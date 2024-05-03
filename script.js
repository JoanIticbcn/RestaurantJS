var video = document.getElementById('vid');

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