$(document).ready(function () {

   $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 900,
      easing: 'ease-in',
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      pauseOnFocus: true,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
   });

});

$(document).ready(function () {

   $('.info__slider__container').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 1,
      speed: 700,
      easing: 'ease-in',
      initialSlide: 2,
      infinite: true,
      draggable: true,
      swipe: true,
      touchThreshold: 5,
      appendArrows: $(' .info__slider__container '),
   });

});



$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body, html').toggleClass('lock');
   });
});
$(document).ready(function () {
   $('.header__link').click(function (event) {
      $('body, html').removeClass('lock');
       $('.header__burger, .header__menu').removeClass('active');
   });
});

$(document).ready(function () {
   $('.but').on("touchstart", function () {
      $('.but').addClass('Myhover');
   });
});
$(document).ready(function () {
   $('.but').on("touchend", function () {
      $('.but').removeClass('Myhover');
   });
});


$(document).ready(function () {
   $('.submit-send').on("touchstart", function () {
      $('.submit-send').addClass('Myhover1');
   });
});
$(document).ready(function () {
   $('.submit-send').on("touchend", function () {
      $('.submit-send').removeClass('Myhover1');
   });
});
