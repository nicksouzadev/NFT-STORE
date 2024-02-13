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

function adicionarEvento(id, url) {
    document.getElementById(id).addEventListener("click", function () {
        window.location.href = url;
    });
}

adicionarEvento("nav-inicio", "../index.html");
adicionarEvento("nav-inicio-mb", "../index.html");
adicionarEvento("nav-produtos", "../index__pages/produtos.html");
adicionarEvento("nav-produtos-mb", "../index__pages/produtos.html");
adicionarEvento("nav-suporte", "../index__pages/suporte.html");
adicionarEvento("nav-suporte-mb", "../index__pages/suporte.html");
adicionarEvento("nav-comprar", "../index__pages/comprar.html");
adicionarEvento("signup-mb", "../index__pages/comprar.html");
