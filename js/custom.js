$('.js-open-nav-menu').on('click', function () {
    $(this).toggleClass('fa-bars');
    $(this).toggleClass('fa-times');
    $('nav').toggleClass('mobile-nav');
});

$('a[href^="#"]').click(function(){
    let target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 800);
    return false;
});