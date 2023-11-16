var nav = document.querySelector('nav');
var navbarFill = document.getElementById('navbarFill')

window.addEventListener('scroll', function() {
    if (this.window.pageYOffset > 300) {
        nav.classList.add('navbar-scroll', 'shadow');
        nav.classList.remove('sticky-top');
        navbarFill.classList.remove('visually-hidden');
    } else {
        nav.classList.remove('navbar-scroll', 'shadow');
        nav.classList.add('sticky-top');
        navbarFill.classList.add('visually-hidden');
    }
})