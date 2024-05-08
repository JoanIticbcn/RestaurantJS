var video = document.getElementById('vid');

function playvideo(){
    video.play();
}

document.getElementById('play').addEventListener('click', ()=> {
    if(video.paused){
        video.play();
        document.getElementById('play').innerHTML('play_circle');
    }else{
        video.pause();
        document.getElementById('play').innerHTML('pause_circle');
    }
});

document.getElementById('vup').addEventListener('click', ()=> {
    video.muted = false;
});

document.getElementById('vof').addEventListener('click', ()=> {
    video.muted = true;
});