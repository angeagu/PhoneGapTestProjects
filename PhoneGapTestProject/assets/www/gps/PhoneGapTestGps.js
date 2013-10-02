var checkposition;
var watch;

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
   	checkposition = true;
}

function stop() {
	
	watch = navigator.geolocation.clearWatch(watch);
	
}

function capturarCoordenadas() {
	
		//navigator.geolocation.getCurrentPosition(procesarPosicion,errorPosicion, 
		//	{ frecuency: 2500, enableHighAccuracy: true });
		watch = navigator.geolocation.watchPosition(procesarPosicion,errorPosicion, 
			{ frecuency: 2500, enableHighAccuracy: true });
}

function procesarPosicion(position) {
	document.getElementById('latitud').value=position.coords.latitude;
	document.getElementById('longitud').value=position.coords.longitude;
	document.getElementById('altitud').value=position.coords.altitude;
	document.getElementById('precision').value=position.coords.accuracy;
	document.getElementById('precision_altitud').value=position.coords.altitudeAccuracy;
	document.getElementById('direccion').value=position.coords.heading;
	document.getElementById('velocidad').value=position.coords.speed;
	document.getElementById('fecha').value=position.timestamp;

}

function errorPosicion(positionError) {
	alert('No se ha podido determinar la posición GPS. Error: ' + positionError.code + ' Mensaje: ' + positionError.message);
	navigator.notification.alert ('No se ha podido determinar la posición GPS. Error: ' + positionError.code + ' Mensaje: ' + positionError.message, null, 'Error GPS','OK');
	
}