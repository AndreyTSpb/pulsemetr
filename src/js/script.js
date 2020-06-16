$(document).ready(function(){
    $('.carusel__slider').slick({
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      //adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/left-arrow.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/icons/right-arrow.png"></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            dots: true,
            slidesToShow: 1
          }
        }
      ]
    });
  });