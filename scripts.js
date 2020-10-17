ready(fn);

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

function fn() {
  const form = document.getElementById('dynamicForm');
  form.addEventListener('submit', handleSubmit);
}

function handleSubmit(evt) {
  evt.preventDefault();
  window.evt = evt;
  let url = createSrcURL(evt);
  setVideoSrc(url);
}

function createSrcURL(evt){
  var form = evt.srcElement;
  var snippet = "ENG_" + form.querySelectorAll("input[name='number']")[0].value;
  var snippet_scene = "_" + form.querySelectorAll("select#example")[0].value;
  var url = "https://dkjplpdstudyjp.akamaized.net/" + snippet + snippet_scene + ".mp4";
  return url;
}

function setVideoSrc(src){
  var video = document.getElementById("dynamicVideo");
  video.src = src;
  video.controls = "true";
  video.seeking = "true";
  video.play();
}
