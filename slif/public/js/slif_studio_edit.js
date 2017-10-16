function SlifStudioEdit(runtime, element) {
  $(element).find(".save-button").bind("click", function() {
    var handlerUrl = runtime.handlerUrl(element, "studio_submit");
    var data = {
        href: $(element).find("input[name=href]").val(),
        width: $(element).find("input[name=width]").val(),
        height: $(element).find("input[name=height]").val(),
        maxscore: $(element).find("input[name=maxscore]").val()
    };
    runtime.notify("save", {state: "start"});
    
    $.ajax({
        type: "POST",
        url: handlerUrl,
        data: JSON.stringify(data),
        // There are issues with using proper status codes at the moment.
        // So we pass along a 'success' key for now.
        success: function(result) {
            if (result.success) {
                runtime.notify("save", {state: "end"});
            } else {
                runtime.notify("error", {
                    "title": "Error saving form",
                    "message": format_errors(result.errors)
                });
            }
        }
    });
  });

  $(element).find(".cancel-button").bind("click", function() {
    runtime.notify("cancel", {});
  });
}

function format_errors (errors) {
      var new_list = [];
      for (var line in errors) {
          // Javascript has no sane HTML escape method.
          // Do this instead.
          new_list.push($("<div/>").text(errors[line]).html())
      }
      return new_list.join("<br />")
}