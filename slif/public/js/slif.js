/* Javascript for ShowLessonInIframeXBlock. */
function ShowLessonInIframeXBlock(runtime, element, slif_state) {
    var handlerUrl  = runtime.handlerUrl(element, 'save_x_state');
    
    var channel;
     
    $(function ($) {
        /* Here's where you'd do things on page load. */
        var iframe = $('section').find('iframe[name^="iframe_"]').get(0),
            cWindow = iframe.contentWindow,
            path = iframe.src.substring(0, iframe.src.lastIndexOf("/")+1);
        
        channel = Channel.build({
            window: cWindow,
            origin: path,
            scope: "JSInput"
        });
        
        channel.bind("i_am_ready", function(context, params) {
            var activity = {};
            
            var ask_server = function(){
                        $.ajax({
                            type: "POST",
                            url: handlerUrl,
                            data: JSON.stringify({"values": activity}),
                            success: function(ans){
                                        if (ans.error){
                                            console.log(ans.error);
                                        }else if('score' in ans){
                                            $('#current_score_value').text(ans.score);
                                        }
                                     }
              
                        });
            }

            var callGetGrade = function(){
                channel.call({
                    method: "getGrade",
                    success: function(s) {
                                 activity['score'] = s;
                                 ask_server();
                             }
                });
            }                        
                        
            if ('state' in params && params.state){
                channel.call({
                    method: "getState",
                    success: function(s) {
                                activity['state'] = s;
                                if ('score' in params && params.score){
                                    callGetGrade();
                                }else{
                                    ask_server();
                                }
                             }
                });
            }else if('score' in params && params.score){
                callGetGrade();
            }
        });

        // always get "Uncaught params cannot be a recursive data structure" 
        // hope it helps 
        var score = slif_state.data.score;
        var state = slif_state.data.state;
        if (slif_state.data.score == null){
            score = '';
        }
        if (slif_state.data.state == null){
            state = '';
        }
        
        var set_state_params = {
            'state': state,
            'score': score
        };

        channel.call({
            method: "setState",
            params: set_state_params,
            success: function(){},
            error: function(error, message) { alert(error, message); },
        });
    });
}