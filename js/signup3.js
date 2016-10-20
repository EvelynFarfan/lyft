$(document).ready(function(){
	$("#siguiente").click(function(e){		
		if($("#casilla").is(":checked")){
			if(validarDatos()){
				$("#formulario").attr("action", "maps.html");
				$("#formulario").submit();
			}
			else{
				$("#formulario").removeAttr("href");
			}
		}
	});
});



function validarDatos(){
	var nombre = $(".nombre").val();
	localStorage.setItem("nombrePerfil", nombre);
	var apellido = $(".apellido").val();
	var email = $(".email").val();
	var emailRegex=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var valid = true; 
	if (nombre.length == 0 && apellido.length == 0 && email.length == 0) {
		valid = false;
		alert ("Complete los campos");
	}else if(nombre == null || nombre.length == 0 || nombre == "" || apellido == null || apellido.length == 0 || apellido == ""){
		valid = false;
		alert("Ingrese datos correctos");
	} else if ( /[0-9]/.test(nombre) || /[0-9]/.test(apellido)){
		valid = false;
		alert("Ingrese datos correctos");
	} else if (nombre.length < 2 && nombre.length > 20 || nombre.length < 2 && nombre.length > 20){
		valid = false;
		alert ("numeros de caracteres no permitidos");
	}else if(!emailRegex.test(email)){
		valid = false;
		alert("Ingrese un correo válido.");
	}
	return valid;
}