/* Javascript for ShowLessonInIframeXBlock. */
function ShowLessonInIframeXBlock(runtime, element, data) {

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
                                        }else if(score in ans){
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
                                if ('answer' in params && params.answer){
                                    callGetGrade();
                                }else{
                                    ask_server();
                                }
                             }
                });
            }else if('answer' in params && params.answer){
                callGetGrade();
            }
        });
        
        channel.call({
            method: "setState",
            params: {data},
            success: function(){}
        });
    });
}