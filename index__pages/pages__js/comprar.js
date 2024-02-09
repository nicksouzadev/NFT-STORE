function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../assets/button/open.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../assets/button/close.svg";
    }
}

var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}

function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}

register();