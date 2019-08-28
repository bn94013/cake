$(document).ready(function () {
	$(document).on("scroll", onScroll);

	//smoothscroll
	$('a[href^="#"]').on('click', function (e) {
		e.preventDefault();
		$(document).off("scroll");

		$('a').each(function () {
			$(this).removeClass('active');
		})
		$(this).addClass('active');

		var target = this.hash,
			menu = target;
		$target = $(target);
		$('html, body').stop().animate({
			'scrollTop': $target.offset().top + 0
		}, 500, 'swing', function () {
			window.location.hash = target;
			$(document).on("scroll", onScroll);
		});
	});
});

function onScroll(event) {
	var scrollPos = $(document).scrollTop();
	// $('.menu-main li a').each(function () {
	// 	var currLink = $(this);
	// 	var refElement = $(currLink.attr("href"));
	// 	if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
	// 		$('.menu-main li a').removeClass("active");
	// 		currLink.addClass("active");
	// 	}
	// 	else {
	// 		currLink.removeClass("active");
	// 	}
	// });
}






// 等三秒後跳出視窗
window.onload = function () {
	time = window.setInterval("showc()", 3000);
}
function showc() {
	var adDiv = document.getElementById("adDiv");
	adDiv.style.display = "block";
}

function ww2() {
	document.getElementById('abox1').style.display = 'none';
}









