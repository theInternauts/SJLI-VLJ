$(document).ready(function() {
  //option A
  // I know, I know, I don't need JQuery!
  $("#dynamicForm").submit(function(evt){
    evt.preventDefault(evt);
    window.evt = evt;
    var snippet = "ENG_" + $(evt.currentTarget).find("input[name='number']").val();
    var snippet_scene = "_" + $(evt.currentTarget).find("select#example").val();
    var url = "https://dkjplpdstudyjp.akamaized.net/" + snippet + snippet_scene + ".mp4";
    console.log("--- ", url);
    $("#dynamicVideo").attr("src", url);
    var video = document.getElementById("dynamicVideo");
    // video.defaultMuted = "true";
    video.controls = "true";
    video.seeking = "true";
    video.loop = "false";
    video.play();
  });

  $(".control-links a").on('click', function(evt){
    evt.preventDefault(evt);
  });
});