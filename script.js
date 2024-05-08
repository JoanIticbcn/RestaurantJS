var video = document.getElementById('vid');

function playvideo(){
    video.play();
}

document.getElementById('play').addEventListener('click', ()=> {
    video.play();
});

document.getElementById('pause').addEventListener('click', ()=> {
    video.pause();
});

document.getElementById('vup').addEventListener('click', ()=> {
    video.muted = false;
});

document.getElementById('vof').addEventListener('click', ()=> {
    video.muted = true;
});