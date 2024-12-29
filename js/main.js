$('.main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dots: false,
    autoplaySpeed: 2000,
    speed: 1000,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    asNavFor: '.slider_items_text'
  });
  $('.slider_items_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main_slider',
    dots: false,
    centerMode: false,
    fade: true,
  });