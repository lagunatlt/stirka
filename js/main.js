$(document).ready(function ($) {
	$(window).scroll(function () {
		if ($(this).scrollTop() > 20) {
			$('.header__top').addClass('fixed-top');
		} else {
			$('.header__top').removeClass('fixed-top');
		}
	});
});

/* -------------- */
function setup_for_width(mql) {
	/* добавление класса к определеному диву */
	let phone = document.querySelectorAll('.phone');
	for (let i = 0; phone.length > i; i++) {
		phone[i].classList.add('phone__reverse');
	}
	let phoneFooter = document.querySelectorAll('.footer-phone');
	for (let i = 0; phoneFooter.length > i; i++) {
		phoneFooter[i].classList.add('phone__reverse');
	}
	/* ------------------ */
	if (mql.matches) {
		let phoneR = document.querySelectorAll('.phone__reverse');
		for (let i = 0; phoneR.length > i; i++) {
			phoneR[i].href = 'javascript:;';
			phoneR[i].dataset.src = '#hidden-content';
			phoneR[i].dataset.fancybox = '';
		}
	}
}
let mql = window.matchMedia("screen and (min-width: 800px)");
mql.addListener(setup_for_width);
setup_for_width(mql);
/* --------------- */
/* mask */
window.addEventListener("DOMContentLoaded", function () {
	[].forEach.call(document.querySelectorAll('.tel'), function (input) {
		var keyCode;

		function mask(event) {
			event.keyCode && (keyCode = event.keyCode);
			var pos = this.selectionStart;
			if (pos < 3) event.preventDefault();
			var matrix = "+7 (___) ___-__-__",
				i = 0,
				def = matrix.replace(/\D/g, ""),
				val = this.value.replace(/\D/g, ""),
				new_value = matrix.replace(/[_\d]/g, function (a) {
					return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
				});
			i = new_value.indexOf("_");
			if (i != -1) {
				i < 5 && (i = 3);
				new_value = new_value.slice(0, i)
			}
			var reg = matrix.substr(0, this.value.length).replace(/_+/g,
				function (a) {
					return "\\d{1," + a.length + "}"
				}).replace(/[+()]/g, "\\$&");
			reg = new RegExp("^" + reg + "$");
			if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
			if (event.type == "blur" && this.value.length < 5) this.value = ""
		}

		input.addEventListener("input", mask, false);
		input.addEventListener("focus", mask, false);
		input.addEventListener("blur", mask, false);
		input.addEventListener("keydown", mask, false)

	});

});
/* ----------- */
$('button[type="submit"]').click(function () {
	// console.log('hi')
	/*Валидация полей формы*/
	let formSend = document.querySelectorAll('form')
	for (let i = 0; formSend.length > i; i++) {
		let nameId = $('#' + formSend[i].attributes.id.value)

		nameId.validate({
			//Правила валидации
			rules: {
				phone: {
					required: true,
					minlength: 18,
				},
			},
			messages: {
				phone: {
					required: "Укажите номер телефона",
					minlength: "Введите корректный номер",
				},
			},
			/*Отправка формы в случае успеха валидации*/
			submitHandler: function () {
				$.ajax({
					url: 'send.php',
					type: 'POST',
					data: nameId.serialize(),
					beforeSend: function () {},
					success: function (result) {
						console.log('ok');
						window.location.href = 'thanks.html'
					},
					error: function () {
						// console.log('none');
					}
				});
				return false;
			}
		});
	}
});
/* ------------------- */
$(function () {
	$("#beforeafter").twentytwenty();
});
// $(function () {
// 	$(".twentytwenty-container").twentytwenty();
// });
// $(function () {
// 	$(".twentytwenty-container").twentytwenty({
// 		default_offset_pct: 0.7, // How much of the before image is visible when the page loads
// 		// orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
// 		before_label: 'January 2017', // Set a custom before label
// 		after_label: 'March 2017', // Set a custom after label
// 		no_overlay: true, //Do not show the overlay with before and after
// 		move_slider_on_hover: true, // Move slider on mouse hover?
// 		move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
// 		click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
// 	});
// });