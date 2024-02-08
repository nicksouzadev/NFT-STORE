const elements = document.querySelectorAll('.bid p');

const maxTime = 40000; 

function updateTimer(element, time) {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const hoursText = hours > 0 ? `${hours}h ` : '';

    const minutesText = minutes > 0 ? `${minutes}m ` : '';

    element.textContent = `${hoursText}${minutesText}${seconds}s`;

    time--;

    if (time < 0) {

        time = maxTime;

        const randomTime = Math.floor(Math.random() * maxTime) + 1;

        setTimeout(() => {
            updateTimer(element, randomTime);
        }, 1000);
    } else {

        setTimeout(() => {
            updateTimer(element, time);
        }, 1000);
    }
}

elements.forEach((element) => {

    const initialRandomTime = Math.floor(Math.random() * maxTime) + 1;

    updateTimer(element, initialRandomTime);
});


function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assets/button/open.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assets/button/close.svg";
    }
}