var audioPlayer = document.getElementById('audioPlayer');
var playButton = document.getElementById('playButton');
var pauseButton = document.getElementById('pauseButton');
var restartButton = document.getElementById('restartButton');
var progressBar = document.getElementById('progressBar');

function playAudio() {
  audioPlayer.play();
}

function restartAudio(){
    audioPlayer.currentTime = 0;
    audioPlayer.pause();
}

function pauseAudio() {
  audioPlayer.pause();
}

function updateProgress() {
    var progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    progressBar.style.width = progress + '%';
  }
  
  function initializeProgress() {
    progressBar.style.width = '0%';
  }

playButton.addEventListener('click', playAudio);
pauseButton.addEventListener('click', pauseAudio);
restartButton.addEventListener('click', restartAudio);
audioPlayer.addEventListener('timeupdate', updateProgress);
audioPlayer.addEventListener('play', initializeProgress);