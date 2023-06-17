let mySound1 = document.getElementById("audio");
const audio = document.getElementById('audio');
audio.volume = 0.2; // 0.0에서 1.0 사이의 값을 사용하여 볼륨을 조절합니다.

mySound1.addEventListener("ended", function() {
    mySound1.currentTime = 0;
    mySound1.play();
});

document.getElementById("play").onclick = function () {
    var image = document.querySelector("#play li img");
    
    if (mySound1.paused) {
        mySound1.play();
        image.src = "./image/pause.png";
        image.style.width = "30px";
    } else {
        mySound1.pause();
        image.src = "./image/play.png";
        image.style.width = "30px";
    }
};