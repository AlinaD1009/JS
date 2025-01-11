// 1. Створити промпт при заповненні якого вас перенаправляє на сайт який був введений в промпті.
const answer1 = document.getElementById('answer1');
const url = prompt('Введіть URL-адресу');

if (url) {
    window.location.href = url;
} else {
    answer1.innerText ='URL-адресу не введено.';
}

// 2. Створити функцію яка буде показувати на екрані геолокацію та url шлях сайту.
// const answer2 = document.getElementById('answer2');
const url2 = window.location.href;
const locat = document.getElementById('location');

if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      locat.innerText = `Широта: ${latitude}, Долгота: ${longitude}, URL шлях сайту: ${url2}`;
    });
};

// 3. Створити стрім із мікро і відео (Див. лекцію).
const vid = document.getElementById('vid')
window.navigator.mediaDevices.getUserMedia({audio: true, video: true}).then(d => {
    console.log(d);

    vid.srcObject = d;
    vid.play()
});
