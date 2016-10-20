$(document).ready(function(){

	var numCel = localStorage.getItem("numCel");
	$("#numbercel").append(numCel);

	$(".inputNumber").keydown(function(evento) {
		var ascii = evento.keyCode;
		if (ascii == 8 || (ascii >= 48 && ascii <= 57)) {
			return true;
		} else {
			return false;
		}
	});

	$("#siguiente").click(function() {
	 	var codigoTotal = $(".inputNumber").eq(0).val() + $(".inputNumber").eq(1).val() + $(".inputNumber").eq(2).val();
	 	var inputUno = $(".inputNumber").eq(0).val();
		var primerCodigo = inputUno.length;
		var codigoRandom = localStorage.getItem("random");
		if (codigoRandom == codigoTotal) {
			$(this).attr("href", "signup3.html");
		} else if (primerCodigo == 0) {
			alert("Ingrese su código por favor");
		} else if (codigoRandom != codigoTotal) {
			alert("El código ingresado no es correcto");
		}
	});
});