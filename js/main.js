const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $fordward = document.querySelector("#fordward");
const $progress = document.querySelector("#progress");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
}

function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  // $video.currentTime = $video.currentTime - 10;
  $video.currentTime -= 10;
}

$fordward.addEventListener("click", handleFordward);

function handleFordward() {
  // $video.currentTime = $video.currentTime + 10;
  $video.currentTime += 10;
}

$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
}

function handleTimeUpdate() {
  $progress.value = $video.currentTime;
  // console.log("tiempo actual", $video.currentTime);
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = $progress.value;
  // console.log($progress.value);
}
