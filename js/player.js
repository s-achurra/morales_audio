//like & shuffle button
$('.heart').click(function () {
  $(this).toggleClass('clicked');
});

$('.shuffle').click(function () {
  $(this).toggleClass('clicked');
});

//show info box on hover
$('#player').hover(function () {
  $('.info').toggleClass('up');
});

//music player settings

let audio = new Audio('http://music.dawnfoxes.com/_fxs_/_upls_/_sngs_/UK/clean_bandit-symphony-ft-zara_larsson.mp3');

$('.pause').hide(); //hide pause button until clicked

//play button
$('.play').click(function () {
  audio.play();
  $('.play').hide();
  $('.pause').show();
});

//pause button
$('.pause').click(function () {
  audio.pause();
  $('.play').show();
  $('.pause').hide();
});


// variable to store HTML5 audio element
var music = document.getElementById('audio_player');

function playAudio() {
  if (music.paused) {
    music.play();
    pButton.className = "";
    pButton.className = "pause";
  } else {
    music.pause();
    pButton.className = "";
    pButton.className = "play";
  }
}

function setVolume(volume) {
  music.volume = volume;
}