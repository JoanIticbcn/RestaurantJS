var video = document.getElementById('vid');

function playvideo(){
    video.play();
    document.getElementById('play').innerHTML='pause_circle';
}

document.getElementById('play').addEventListener('click', ()=> {
    if(video.paused){
        video.play();
        document.getElementById('play').innerHTML='pause_circle';
    }else{
        video.pause();
        document.getElementById('play').innerHTML='play_circle';
    }
});

document.getElementById('vup').addEventListener('click', ()=> {
    if(video.muted===true){
        video.muted = false;
        document.getElementById('vup').innerHTML='volume_up';
    }else{
        video.muted = true;
        document.getElementById('vup').innerHTML='volume_off';
    }
    
});