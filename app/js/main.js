$(function() {


    $('.menu__btn').on('click', function(){
        $('.menu-burger').toggleClass('menu-burger--active');
    })
    
    $('.menu-burger__btn').on('click', function(e) {
        e.preventDefault();
        $('.menu-burger').removeClass('menu-burger--active');
    });

    $('.menu__btn').on('click', function(){
        $('.filters-aside').toggleClass('filters-aside--active');
    })
    $('.filters-aside__button-close').on('click', function(){
        $('.filters-aside').toggleClass('filters-aside--active');
    })
    


    $('.catalog-tabs__top-item').on('click', function(e) {
        e.preventDefault();
        $('.catalog-tabs__top-item').removeClass('catalog-tabs__top-item--active');
        $(this).addClass('catalog-tabs__top-item--active');

        $('.catalog-tabs__content-item').removeClass('catalog-tabs__content-item--active');
        $($(this).attr('href')).addClass('catalog-tabs__content-item--active');
    });


    $('.select-style').styler();




    
  var $range = $(".filter-price__controller");
  var $inputFrom = $(".filter-price__from");
  var $inputTo = $(".filter-price__to");
  var instance;
  var min = 0;
  var max = 1150;
  var from = 0;
  var to = 0;
  
  $range.ionRangeSlider({
      skin: "round",
      type: "double",
      min: min,
      max: max,
      from: 100,
      to: 1000,
      onStart: updateInputs,
      onChange: updateInputs,
      onFinish: updateInputs
  });
  instance = $range.data("ionRangeSlider");
  
  function updateInputs (data) {
      from = data.from;
      to = data.to;
  
      $inputFrom.prop("value", from);
      $inputTo.prop("value", to);
  }
  
  $inputFrom.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < min) {
          val = min;
      } else if (val > to) {
          val = to;
      }
  
      instance.update({
          from: val
      });
  
      $(this).prop("value", val);
  
  });
  
  $inputTo.on("change", function () {
      var val = $(this).prop("value");
  
      // validate
      if (val < from) {
          val = from;
      } else if (val > max) {
          val = max;
      }
  
      instance.update({
          to: val
      });
  
      $(this).prop("value", val);
  });
  



  var mixer = mixitup('.categories__inner, .catalog-info__inner');
 



   $('.reviews__inner-slider').slick({
    dots: true,
    arrows: true,
    autoplaySpeed: 2000,
});










});