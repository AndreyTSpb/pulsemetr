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

    $('input[type="phone"]').mask("+7(999) 999-9999");

    /**
     * Валидация форм
     */
    function validateForm(form){
      $(form).validate({
        rules: {
          // simple rule, converted to {required:true}
          name: "required",
          // compound rule
          phone: "required",
          email: {
            required: true,
            email: true
          }
        }
      });
    }

    validateForm('#consultation form');
});