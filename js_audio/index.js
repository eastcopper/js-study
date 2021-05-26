const audio = document.querySelector('audio');
let volumeDown = document.getElementById('volumeDown');
let volumeUp = document.getElementById('volumeUp');

audio.volume = 0.5;

let volume = audio.volume;

volumeDown.addEventListener('click', function () {
    if (volume <= 0.1) {
        alert('볼륨을 더 이상 낮출 수 없습니다.')
        return;
    }
    volume -= 0.1;
    audio.volume = volume;
    console.log(volume);
})


volumeUp.addEventListener('click', function () {
    if (volume >= 0.98) {
        alert('볼륨을 더 이상 높일 수 없습니다.')
        return;
    }

    volume += 0.1;
    audio.volume = volume;
    console.log(volume);
})