var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
$(document)
$('#open').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mainnav').slideDown();
    $('#close').show();
    $('#drl').addClass('overf');
});
$('#close').click(function(e) {
    e.preventDefault();
    $(this).hide();
    $('#mainnav').slideUp();
    $('#open').show();
    $('#drl').removeClass('overf');
});

$('#btn-search').click(function(e) {
    e.preventDefault();
    $(this).hide(400);
    $('#search-box').show(400);
    $('#btn-search-close').show(400);
});
$('#btn-search-close').click(function(e) {
    e.preventDefault();
    $(this).hide(400);
    $('#search-box').hide(400);
    $('#btn-search').show(400);
});