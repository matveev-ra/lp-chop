Fancybox.bind('[data-fancybox]', {
    // Custom options
});   


$(document).ready(function () {

    $('.Slider-reviews').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    dots: true,
    responsive: [
    {
    breakpoint: 768,
    settings: {
        slidesToShow: 2,
        dots: true,
        arrows: false,
    }
    },
    {
    breakpoint: 540,
    settings: {
        slidesToShow: 1,
        arrows: false,
    }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
    });


    $(window).scroll(function(){
        var wScrTop =  $(window).scrollTop()
        if (wScrTop > 0) {
            $('.top-bar').addClass('fixed')
    $('body').addClass('body-padding'); 
        }else{
            $('.top-bar').removeClass('fixed');
    $('body').removeClass('body-padding');
        }
    });



    $(".menutop a[href^='#']").click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'), // забираем идентификатор блока с атрибута href
            target = $(id), // находим целевой элемент
            windowHeight = $(window).height(), // высота окна браузера
            elementHeight = target.outerHeight(), // высота целевого элемента
            scrollPosition = target.offset().top - ((windowHeight / 2) - (elementHeight / 2)); // вычисляем позицию прокрутки

        $("html, body").animate({scrollTop: scrollPosition}, 400);

    });


    //работа меню бургер - открыть/закрыть
    $('#hamburger').click(function (e) {
        $(this).toggleClass('active'); 
        $('.dropDownMenu').fadeToggle(100);
    });

    //аккардион для частых вопросов



    // //Клик вне меню бургера
    // $(document).mouseup(function (e){ // событие клика по веб-документу
	// 	var div = $("#Topmenu"); // тут указываем ID элемента
	// 	if (!div.is(e.target) // если клик был не по нашему блоку
    //     && div.has(e.target).length === 0 
    //     && $('#hamburger').hasClass('active')) 
    //     { // и не по его дочерним элементам
	// 		//div.hide(); // скрываем его
    //   $('.dropDownMenu').fadeOut();
    //   $('#hamburger').removeClass("active");
	// 	}	
	// });





});

(function ($) {
    $(document).ready(function () {
        var $accordion = $(".title_block");

        $accordion.on("click", function () {
            var $currentItem = $(this).parents(".accordion_item");
            var $currentInfo = $currentItem.find(".info");

            if ($currentItem.hasClass("active_block")) {
                $currentItem.removeClass("active_block");
                $currentInfo.slideUp();
            } else {
                $currentItem.addClass("active_block");
                $currentInfo.stop(true, true).slideDown();

                // Закрываем другие открытые блоки
                $currentItem.siblings(".active_block").removeClass("active_block")
                    .find(".info").stop(true, true).slideUp();
            }
        });
    });
})(jQuery);



