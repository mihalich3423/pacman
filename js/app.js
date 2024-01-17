
let name = prompt('Пожалуйста введите ваше имя.')

let titleText = 'Привет ' + name +' Добро пожаловать на сайт группы отелей Selly Hotels!'

$(window).on('scroll', function() {
    toggleScrollUpButton();
});

function toggleScrollUpButton() {
    var TOP_OFFSET = 0;
    if ($('html').scrollTop() > $(window).height() - TOP_OFFSET) {
        $('#scrollUpArrow').addClass('visible');
    }

    else {
        $('#scrollUpArrow').removeClass('visible');
    }
}

$(window).on('load', function() {
    initScrollUpButton();
    initMobileMenu();
    initPopup();
});

function initScrollUpButton() {
    $('#scrollUpArrow').click(function () {
        var topOffest = $('#promoWrapper').offset().top;
        $('html').animate({
            scrollTop: topOffest
        }, 1000)
    });
}

function initMobileMenu() {
    $('#menuButton').on('click', function(){
        $('#menuButton').toggleClass('active');
        $('#menuContainer').toggleClass('active');
    });
}

function initPopup() {
    $('#subscribePopupButton').click(function() {
       $('overlay').addClass('visible');
       $('#popupWindow').addClass('visible');
    });

    $('#closePopupButton').click(function() {
        $('overlay').removeClass('visible');
        $('#popupWindow').removeClass('visible');
    });

    $('#popupWindow').click(function(event){
        if (event.target.id == 'popupWindow') {
            $('#overlay').removeClass('visible');
            $('#popupWindow').removeClass('visible');
        }
    });
}

let links = $('.menu_link');

for (let i = 0; i < links.length; i++) {
    let link = links[i];
    let scrollTarget = $(link).attr('href');
    $(link).click( function() {
        $(window).scrollTo($(scrollTarget), 1000);
    });


}

$(document).ready(function(){
    $('.owl-carousel').owlCarousel();
});
