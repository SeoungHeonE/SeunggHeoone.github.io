let mySound1 = document.getElementById("audio");

mySound1.addEventListener("ended", function() {
    mySound1.currentTime = 0;
    mySound1.play();
});

document.getElementById("play").onclick = function () {
    if (mySound1.paused) {
        mySound1.play();
        document.getElementById("play").innerHTML = "MUSIC OFF";
    } else {
        mySound1.pause();
        document.getElementById("play").innerHTML = "MUSIC ON";
    }
};

const audio = document.getElementById('audio');
audio.volume = 0.2; // 0.0에서 1.0 사이의 값을 사용하여 볼륨을 조절합니다.

// let mySound1 = document.getElementById("audio");

// mySound1.addEventListener("ended", function() {
//     mySound1.currentTime = 0;
//     mySound1.play();
// });

// document.getElementById("play").onclick = function () {
//     mySound1.play();
//     document.getElementById("play").innerHTML = "MUSIC OFF";
// };

// document.getElementById("stop").onclick = function () {
//     mySound1.pause();
//     document.getElementById("stop").innerHTML = "MUSIC ON";
// };