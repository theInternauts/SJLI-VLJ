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

  const searchForm = document.getElementById('jishoSearchForm');
  searchForm.addEventListener('submit', handleSearchSubmit);
}

function handleSubmit(evt) {
  evt.preventDefault();
  let url = createSrcURL(evt);
  setVideoSrc(url);
  var sceneType = evt.srcElement.querySelectorAll("select#example")[0].value;
  setBGDColor(sceneType);
}

function createSrcURL(evt){
  var form = evt.srcElement;
  var videoLetter = form.querySelectorAll("input[name='number']")[0].value;
  var sceneType = form.querySelectorAll("select#example")[0].value;
  var url = `https://dkjplpdstudyjp.akamaized.net/ENG_${videoLetter}_${sceneType}.mp4`;
  return url;
}

function setVideoSrc(src){
  var video = document.getElementById("dynamicVideo");
  video.src = src;
  video.controls = "true";
  video.seeking = "true";
  video.play();
}

function setBGDColor(value){
  if(value == "i"){
    document.getElementsByTagName("body")[0].classList.remove("scene-lesson");
    document.getElementsByTagName("body")[0].classList.add("main-lesson");
  } else if(value == "s"){
    document.getElementsByTagName("body")[0].classList.remove("main-lesson");
    document.getElementsByTagName("body")[0].classList.add("scene-lesson");
  } else {
    document.getElementsByTagName("body")[0].classList.remove("scene-lesson");
    document.getElementsByTagName("body")[0].classList.remove("main-lesson");
  }
}

function handleSearchSubmit(evt){
  evt.preventDefault();
  let url = createSearchUrl(evt);
  console.log(url);
  setSearchUrl(url);
}

function createSearchUrl(evt){
  var searchForm = evt.srcElement;
  var searchTerm = searchForm.querySelectorAll("input[name='search_term']")[0].value;
  var url = `https://jisho.org/search/${searchTerm}`;
  return url;
}

function setSearchUrl(src){
  var iframe = document.getElementById("jishoSearchWindow");
  iframe.src = src;
}