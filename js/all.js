$(document).ready(function() {
	$('.dropdown').click(function (event) {
		event.preventDefault();
    $('.dropdown').toggleClass('active');
		$('.dropdown-open').slideToggle();
	});
	//swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
		loop: true,
		effect: 'fade',
		speed: 800,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        autoplay: {
			delay: 2000,
			disableOnInteraction: false, //點擊後自動切換依然有效果
        },
    });
    //lightbox
    lightbox.option({
        'resizeDuration': 100,  //點擊圖片到燈箱中出現圖片所需要花費的時間
        'wrapAround': true      //燈箱循環播放
    });
    
    $('.top').click(function (event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0},700);
    });
});