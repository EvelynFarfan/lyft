$(document).ready(function() {
	$("#inputTelf").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});

	$("#inputTelf").keyup(function(evento) {
		var valorInput = $(this).val();
		var longitud = valorInput.length;
		localStorage.setItem("numCel", valorInput);
		if (longitud == 9) {
			$("#siguiente").click(function(){
				var x = Math.floor((Math.random() * 899) + 99);
				var num = "LAB - " + x;
				alert(num);
				localStorage.setItem("random", x);
				$("#siguiente").attr("href", "signup2.html");
			});
		} else {
			$("#siguiente").removeAttr("href");
		}
	});

	// $("#inputTelf").keyup(function(evento) {
	// 	var longitud = $(this).val().length;
	// 	if (longitud == 9) {
	// 		$("#siguiente").attr("href", "signup_dos.html");
	// 	} else {
	// 		$("#siguiente").removeAttr("href");
	// 	}
	// });
});
