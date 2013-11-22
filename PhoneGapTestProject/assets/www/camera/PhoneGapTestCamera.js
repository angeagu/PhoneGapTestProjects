
var pictureSource;   // picture source
var destinationType; // sets the format of returned value 

document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady() {
   	pictureSource=navigator.camera.PictureSourceType;
   	destinationType=navigator.camera.DestinationType;
}


function realizarFoto() {
	var tiempoEspera = document.getElementById('slider').value;
	alert("tiempo de espera: " + tiempoEspera + " segundos");
	navigator.notification.alert('Entrando en realizarFoto',null,'realizarFoto','OK');
	navigator.camera.getPicture(guardarFoto, errorFoto, {allowEdit: true, 
	destinationType: destinationType.DATA_URL,
	saveToPhotoAlbum: true });
}

function guardarFoto(imageData) {
	navigator.notification.alert ('Entrando en guardar foto', null, 'GuardarFoto','OK');
	var imagen = document.getElementById('imagen');
	imagen.style.display = 'block';
	imagen.src = "data:image/jpeg;base64," + imageData;
	navigator.notification.alert ('Saliendo de guardar foto', null, 'GuardarFoto','OK');

}

function errorFoto(error) {
	navigator.notification.alert ('Error al obtener foto: ' + error, null, 'Error','OK');
	console.log('Error al obtener foto: ' + error);
}