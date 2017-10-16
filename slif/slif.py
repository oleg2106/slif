"""TO-DO: Write a description of what this XBlock is."""

import pkg_resources

from django.template import Context, Template

from xblock.core import XBlock
from xblock.fields import Scope, String, Integer, Float, Boolean, DateTime
from xblock.fragment import Fragment

class ShowLessonInIframeXBlock(XBlock):
    """
    TO-DO: document what your XBlock does.
    """

    # Fields are defined on the class.  You can access them in your code as
    # self.<fieldname>.
    
    #min maxscore
    min_ms = 1
    
    score = Float(
        values={"min": 0},
        default=None, scope=Scope.user_state,
        help="User answer score",
    )
    
    state = String(
        default=None, scope=Scope.user_state,
        help="State of xblock",
    )
    
    href = String(
        display_name="src for IFrame",
        help=("lesson url"),
        default=None,
        scope=Scope.settings,
    )

    width = String(
        display_name="IFrame width",
        help=("IFrame width"),
        default='100%',
        scope=Scope.settings,
    )

    height = String(
        display_name="IFrame Height",
        help=("IFrame Height"),
        default='500px',
        scope=Scope.settings,
    )

    maxscore = Float(
        values={"min": min_ms},
        default=1, scope=Scope.settings,
        help=("Max score"),
    )

    has_score = True

    def fill_context(self, context=None):
        if not context:
            context = {}

        context.update({
            'href': self.href,
            'width': self.width,
            'height': self.height,
            'maxscore': self.maxscore,
            'score': self.score
        })
        
        return context

    def studio_view(self, context=None):
        """
        Studio edit view
        """
        context = self.fill_context(context)
        
        fragment = Fragment()
        fragment.add_content(render_template('public/html/slif_studio_edit.html', context))
        fragment.add_javascript(resource_string("public/js/slif_studio_edit.js"))
        fragment.initialize_js('SlifStudioEdit')        
        return fragment


    # TO-DO: change this view to display your data your own way.
    def student_view(self, context=None):
        """
        The primary view of the ShowLessonInIframeXBlock, shown to students when viewing courses.
        """
        context = self.fill_context(context)
        
        fragment = Fragment()
        if not self.href:
            fragment.add_content(render_template('public/html/slif_student_empty.html', context))
        else:
            fragment.add_content(render_template('public/html/slif.html', context))          
            fragment.add_javascript_url(self.runtime.local_resource_url(self, 'public/js/jschannel.js'))
            fragment.add_javascript_url(self.runtime.local_resource_url(self, 'public/js/slif.js'))
            #frag.add_css(resource_string("public/css/style.css"))
            fragment.initialize_js('ShowLessonInIframeXBlock', {'data': {'state': self.state, 'score': self.score}})
        return fragment


    @XBlock.json_handler
    def studio_submit(self, data, suffix=''):
        """
        Called when submitting the form in Studio.
        """
        result = {'success': True, 'errors': []}

        try:
            m = data.get('maxscore').replace(',', '.')
            m = float(m)
            if m < self.min_ms:
                result['errors'].append("maxscore (not less than %d)" % self.min_ms)
                result['success'] = False                
        except:
            result['errors'].append("maxscore (not less than %d)" % self.min_ms)
            result['success'] = False

        if not result['success']:
            return result

        self.href = data.get('href')
        self.width  = data.get('width')
        self.height = data.get('height')
        self.maxscore = m

        return result

    @XBlock.json_handler
    def save_x_state(self, data, suffix=''):
        out = {}
      
        # save it in string format. Dont need to unpack it
        if 'state' in data['values']:
            self.state = data['values']['state']
            out['state'] = 'ok'
        
        if 'score' in data['values']:
            score = data['values']['score']
            if score.isdigit():
                self.score = float(score)
            
                if self.score <= self.maxscore:
                    grade_event = {'value': self.score, 'max_value': self.maxscore}
                    self.runtime.publish(self, 'grade', grade_event)

                out['score'] = self.score

            else:
                out['error'] = 'score: bad type'

        return out


    # TO-DO: change this to create the scenarios you'd like to see in the
    # workbench while developing your XBlock.
    @staticmethod
    def workbench_scenarios():
        """A canned scenario for display in the workbench."""
        return [
            ("ShowLessonInIframeXBlock",
             """<slif/>
             """),
            ("Multiple ShowLessonInIframeXBlock",
             """<vertical_demo>
                <slif/>
                </vertical_demo>
             """),
        ]

    # Everything below is stolen from
    # https://github.com/edx/edx-ora2/blob/master/apps/openassessment/
    #        xblock/lms_mixin.py
    # It's needed to keep the LMS+Studio happy.
    # It should be included as a mixin.

    display_name = String(
        default="SLIFtest!", scope=Scope.settings,
        help="Display name"
    )

    start = DateTime(
        default=None, scope=Scope.settings,
        help="ISO-8601 formatted string representing the start date "
             "of this assignment. We ignore this."
    )

    due = DateTime(
        default=None, scope=Scope.settings,
        help="ISO-8601 formatted string representing the due date "
             "of this assignment. We ignore this."
    )

    weight = Float(
        display_name="Problem Weight",
        help=("Defines the number of points each problem is worth. "
              "If the value is not set, the problem is worth the sum of the "
              "option point values."),
        values={"min": 0, "step": .1},
        scope=Scope.settings
    )

    def has_dynamic_children(self):
        """Do we dynamically determine our children? No, we don't have any.
        """
        return False

    def max_score(self):
        """The maximum raw score of our problem.
        """
        return self.maxscore


def resource_string(resource_path):  # pragma: NO COVER
    """
    Gets the content of a resource
    """
    resource_content = pkg_resources.resource_string(__name__, resource_path)
    return unicode(resource_content.decode('utf8'))


def render_template(template_path, context=None):  # pragma: NO COVER
    """
    Evaluate a template by resource path, applying the provided context.
    """
    if context is None:
        context = {}

    template_str = resource_string(template_path)
    template = Template(template_str)
    return template.render(Context(context))
