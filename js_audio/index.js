const audio = document.querySelector('audio');
const volumeDown = document.getElementById('volumeDown');
const volumeUp = document.getElementById('volumeUp');
const timeLength30s = document.getElementById('timeLength30s');

audio.volume = 0.5;

let volume = audio.volume;

volumeDown.addEventListener('click', function () {
    if (volume <= 0.1) {
        alert('볼륨을 더 이상 낮출 수 없습니다.')
        return;
    }
    volume -= 0.1;
    audio.volume = volume;
})


volumeUp.addEventListener('click', function () {
    if (volume >= 0.98) {
        alert('볼륨을 더 이상 높일 수 없습니다.')
        return;
    }

    volume += 0.1;
    audio.volume = volume;
})

timeLength30s.addEventListener('click', function() {
    audio.currentTime = 30;
})