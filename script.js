var video = document.getElementById('vid');
var nav = document.getElementById('nav');

function playvideo(){
    video.play();
    document.getElementById('play').innerHTML = 'pause_circle';
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        nav.style.height = "3.3vh";
        nav.style.backgroundColor="red";
        playvideo();
    }else {
        nav.style.height = "6.6vh";
        nav.style.backgroundColor="#0e1111";
    }
}

document.getElementById('play').addEventListener('click', () => {
    if (video.paused) {
        video.play();
        document.getElementById('play').innerHTML = 'pause_circle';
    } else {
        video.pause();
        document.getElementById('play').innerHTML = 'play_circle';
    }
});

document.getElementById('vup').addEventListener('click', () => {
    if (video.muted === true) {
        video.muted = false;
        document.getElementById('vup').innerHTML = 'volume_up';
    } else {
        video.muted = true;
        document.getElementById('vup').innerHTML = 'volume_off';
    }

});