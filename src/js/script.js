$(document).ready(function(){
    /**
     * 
     */
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
    /**
     * 
     */
    $('input[type="phone"]').mask("+7(999) 999-9999");

    /**
     * 
     */
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    /**
     *  Modal 
     */ 

    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

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