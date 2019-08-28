$(document).ready(function(){
	$("a").on('click', function(event) {
		if (this.hash !== "") {
		event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
			window.location.hash = hash;
			});
		}
	});
}); 
	 




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









