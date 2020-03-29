$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.header__top').addClass('fixed-top');
		} else {
			$('.header__top').removeClass('fixed-top');
		}
	});
});