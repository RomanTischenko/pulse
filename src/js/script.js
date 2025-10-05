window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
        menuItem = document.querySelectorAll('.promo__item'),
        hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('promo__hamburger-active');
        menu.classList.toggle('promo__menu-active');
    })
});