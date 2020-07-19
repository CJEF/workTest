$(document).ready(function () {
  $(".slider").slick({
    infinite: false,
    dots: true,
    responsive: [
      {
        breakpoint: 761,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $(".accordion__title").on("click", function () {
    $(".accordion__item").removeClass("accordion__item--active");
    $(this).parent().addClass("accordion__item--active");
  });

  var block = $("#sidebar"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)

  $(".burger").click(function () {
    block.addClass("active");
  });

  $(document).mouseup(function (e) {
    // отслеживаем событие клика по веб-документу

    if (
      !block.is(e.target) && // проверка условия если клик был не по нашему блоку
      block.has(e.target).length === 0
    ) {
      // проверка условия если клик не по его дочерним элементам
      block.removeClass("active"); // если условия выполняются - скрываем наш элемент
    }
  });

  $(".default-option").click(function () {
    $(this).parent().toggleClass("active");
  });

  $(".select-ul li").click(function () {
    let currentelem = $(this).html();
    $(".default-option li").html(currentelem);
    $(this).parents(".select_wrap").removeClass("active");
  });

  $('.tab').click(function() {
    $('.tab-item').removeClass('active');
    $(this).parent().addClass("active");
  })

  $('.tabs__base-div').click(function() {
    $('.tabs__base-item').removeClass('active');
    $(this).parent().addClass("active");
  })

  $('.tabs__little-div').click(function() {
    $('.tabs__little-item').removeClass('active');
    $(this).parent().addClass("active");
  })
  

  // $('.questions__form-text').onFocus(function() {
  //   if($(this) = $('.questions__form-item-2')) {

  //   }
  // })
});
