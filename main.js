console.log("Welcome to Spotify");
// Initialize the variables
let  songIndex = 0; 
let audiioElement = New Audio('1.mp3');
let Masterplay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('masterplay');
let gif = document.getElementById('gif');

let songs = [
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"},
    {songName:" saleme-ishq", FilePath: "song/1.mp3", coverPath:"covers/1.jpg"}
 ]
 
 //audio Element.play;
// handle play/pause click
Masterplay.addEventListener('click',() =>{
    if(audiioElement.pause || audiioElement.currentTime<=0){
        audiioElement.play();
        Masterplay.classList.remove('fa-play-circle');
        Masterplay.classList.add('fa-pause-circle');
    }else{
        audiioElement.pause();
        Masterplay.classList.remove('fa-pause-circle');
        Masterplay.classList.add('fa-play-circle');

    }
})
 // Listen to Events
 myProgressBar.addEventListener('timeupdate', () =>{
console.log('timeupdate');
//update Seeker



 })