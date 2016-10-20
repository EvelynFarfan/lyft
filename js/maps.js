var cargarPagina = function() {
	if (navigator.geolocation) { 
		// también se puede usar if ("geolocation" in navigator) {}
		navigator.geolocation.getCurrentPosition(funcionExito, funcionError);
	}
};

var funcionExito = function(posicion) {
	var lat = posicion.coords.latitude;
  var lon = posicion.coords.longitude;
  var latlon = new google.maps.LatLng(lat, lon);
  var mapa = document.getElementById("mapa");
  // mapa.classList.add("mapa");

  mapa.style.height = "100%";
  mapa.style.width = "100%";
  mapa.style.position = "absolute";

  // mapa.style.height = $(document).height();
  // mapa.style.width = $(document).width();

  var myOptions = {
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{
    	style: google.maps.NavigationControlStyle.SMALL
   	}
  };
  
  var map = new google.maps.Map(document.getElementById('mapa'), myOptions);

  var marker = new google.maps.Marker({
  	position:latlon,
  	map:map,
  	title:"You are here!"
  });
};

var funcionError = function (error) {
	console.log(error);
};

$(document).ready(cargarPagina);
