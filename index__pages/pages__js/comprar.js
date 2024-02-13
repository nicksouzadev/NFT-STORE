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

function adicionarEventoComPrevencao(id, url) {
    document.getElementById(id).addEventListener("click", function (event) {
        event.preventDefault();
        window.location.href = url;
    });
}

adicionarEventoComPrevencao("nav-inicio", "../index.html");
adicionarEventoComPrevencao("nav-inicio-mb", "../index.html");
adicionarEventoComPrevencao("nav-produtos", "../index__pages/produtos.html");
adicionarEventoComPrevencao("nav-produtos-mb", "../index__pages/produtos.html");
adicionarEventoComPrevencao("nav-suporte", "../index__pages/suporte.html");
adicionarEventoComPrevencao("nav-suporte-mb", "../index__pages/suporte.html");
adicionarEventoComPrevencao("nav-sobre", "../index__pages/sobre.html");
adicionarEventoComPrevencao("nav-sobre-mb", "../index__pages/sobre.html");
