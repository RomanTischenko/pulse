window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
        menuItem = document.querySelectorAll('.promo__item'),
        hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('promo__hamburger-active');
        menu.classList.toggle('promo__menu-active');
    })
});

$(document).ready(function(){
  $('.carousel__inner').slick({
        speed: 768,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/carousel/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/carousel/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});