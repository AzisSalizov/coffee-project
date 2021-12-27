let burger = $('.burger');
let nav = $('.header__nav');
let first = $('.header__list-first');
let second = $('.header__list-second');
let button = $('.open');
let overlay = $('.overlay');
let close = $('.popup__close');
let form = $('.popup__form');
let leave = $('.leave');
let thanks = $('.popup__thanks');
let popup = $('.popup');
let back = $('.back');
let reveal = $('.reveal');
let flag = $('.hiden');
let armor = $('.reservation__btn');
let resers = $('.resers');
let phone = $('#tel');



armor.on('click',function () {
    resers.fadeIn('slow');
});



burger.on('click', function () {
    second.toggleClass('active');
    first.toggleClass('active');
    nav.toggleClass('active');
    burger.toggleClass('active');
});

button.on('click', function () {
    overlay.fadeIn('slow');
    form.fadeIn('slow');

});

close.on('click', function () {
    resers.fadeOut('slow');
    overlay.fadeOut('slow');

});

leave.on('click', function (e) {
    e.preventDefault();
    thanks.fadeIn('slow');
    popup.fadeOut('slow');
});

back.on('click', function () {
    thanks.fadeOut('slow');
    popup.fadeIn('slow');
});


reveal.on('click', function () {
    flag.slideDown('slow');
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 40,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        992: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        580: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        480: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        426: {
            slidesPerView: 1,
            spaceBetween: 40,
        },
        375: {
            slidesPerView: 1,
            spaceBetween: 40,
        },

    }
});

