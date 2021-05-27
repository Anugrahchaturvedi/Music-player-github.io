const musicContainer = document.querySelector(".music-container");
const playBtn = document.querySelector("#play");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const audio = document.querySelector("#audio");
const progress = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");
const title = document.querySelector("#title");
const cover = document.querySelector("#cover");

// titles of songs
const songs = [
  "StarBoy – The Weekend.mp3","We Don’t talk any more – Charlie Puth.mp3","BlackMagic – young mavu.mp3","Drag me Down – One direction.mp3","Treat you Better -Shawn Mendes.mp3","Voodoo-Willy William.mp3","Fast & Furious.mp3","Strip that down-Liam payne.mp3","Meant to be.mp3","Slow Hands.mp3","Fetish- Selena gomez.mp3"
];

let songIndex = 0;
loadSong(songs[songIndex]);

function loadSong(songs) 
{
  title.innerText = songs;
  audio.src = `music/${songs}`;
  cover.src = `images/${songs}.jpg`;
  playSong();
}

function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector('i,fas').classList.remove('fa-play')
  playBtn.querySelector('i,fas').classList.add('fa-pause')
  audio.play() 
}
function pauseSong() {
    musicContainer.classList.remove("play");
    playBtn.querySelector('i,fas').classList.add('fa-play')
    playBtn.querySelector('i,fas').classList.remove('fa-pause')
    audio.pause()
}

function prevSong(){
songIndex--;
if(songIndex<0)
{
    songIndex==songs.length-1;

}
loadSong(songs[songIndex]);
}
function nextSong(){
    songIndex++
    if(songIndex>songs.length-1)
    {
        songIndex=0;
    
    }
    loadSong(songs[songIndex]);
}
function updateprogress(e){
const{duration,currentTime} =e.srcElement;
const progresspercent=(currentTime / duration) * 100;
progress.style.width =`${progresspercent}%`;
}
function setprogress(e){
   const width = this.clientWidth
   const clickX=e.offsetX
   const duration = audio.duration
   audio.currentTime = (clickX/width)* duration;
}
// eveet listen
playBtn.addEventListener("click", () => {
  const isplaying = musicContainer.classList.contains("play");
  if (isplaying) {
    pauseSong();
  } else {
    playSong();
  }
});


// change events
prevBtn.addEventListener("click" ,prevSong);
nextBtn.addEventListener("click" ,nextSong);



//progress bar
audio.addEventListener('timeupdate',updateprogress)
progressContainer.addEventListener('click' ,setprogress);

audio.addEventListener('ended',nextSong)
