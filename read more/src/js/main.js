 let burger = $ ('.burger');
let nav = $ ('.footer__nav');

burger.on('click',function () {
burger.toggleClass('active');
nav.toggleClass('active');
});