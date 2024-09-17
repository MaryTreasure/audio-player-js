const player = document.querySelector('.player');
const playBtn = document.querySelector('.play');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const audio = document.querySelector('.audio');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const title = document.querySelector('.song');
const cover = document.querySelector('.cover__img');
const imgSrc = document.querySelector('.img__src');

const songs = ['Dont_start_now', 'Lemonade'];

let songIndex = 0;

function loadSong (song) {
    title.innerHTML = song;
    audio.src = `assets/audio/${song}.mp3`;
    cover.src = `assets/img/cover${songIndex + 1}.png`
}

loadSong(songs[songIndex]);

function playSong () {
    audio.play()
}
function pauseSong () {
    audio.pause()
} 

playBtn.addEventListener('click', () => {
    playSong()
})