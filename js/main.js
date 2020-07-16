$(document).ready(function(){
  $('.slider').slick({
    // infinite: false
  });


  $('.accordion__title').on('click', function () {
    $('.accordion__item').removeClass('accordion__item--active')
    $(this).parent().addClass('accordion__item--active')
});

var block = $("#sidebar");// определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)

$('.burger').click(function() {
    block.addClass('active');
});

$(document).mouseup(function (e){ // отслеживаем событие клика по веб-документу
     
    if (!block.is(e.target) // проверка условия если клик был не по нашему блоку
        && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
        block.removeClass('active'); // если условия выполняются - скрываем наш элемент
    }
});

});