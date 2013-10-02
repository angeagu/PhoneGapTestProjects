
var media = null;
var seconds = 0;
var varInterval;

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    document.addEventListener('backbutton', onBackKeyDown, false);
}

function onBackKeyDown()  {
	navigator.notification.confirm(
       ("Desea salir de la aplicacion?"),
        saliraplicacion,
        'MediaPlayer',
        'YES,NO');
 	
}

function saliraplicacion(button) {
   //alert('entrando con button: ' + button);
   if(button=="1" || button==1) {
   	if (media!=null) {
		media.release();
	}
    navigator.app.exitApp();
   }
}

function grabarAudio() {

	if (media!=null) {
		media.release();
	}
	var src = "audio1.mp3";
	media = new Media(src,exito,error);
	
	
	$('#botonGrabarAudio').button('disable');
	$('#botonReproducirAudio').button('disable');
	$('#botonDetenerReproduccion').button('disable');
	
	seconds=0;
	var mensaje='Grabando audio...';
	clearInterval(varInterval);
	varInterval=setInterval(message(mensaje),1000);
	
	media.startRecord();
}


function reproducirAudio() {
	var src = "audio1.mp3";
	if (media == null) {
		media = new Media(src,exito,error);
	}
	$('#botonGrabarAudio').button('disable');
	$('#botonDetenerGrabacion').button('disable');
	$('#botonReproducirAudio').button('disable');
	$('#botonDetenerReproduccion').button('enable');
	
	
	seconds=0;
	var mensaje='Reproduciendo Audio... ';
	clearInterval(varInterval);
	varInterval=setInterval(message(mensaje),1000);
	//alert('antes de llamar a play');
	media.play();

}

function detenerGrabacion() {
	var src = "audio1.mp3";
	if (media == null) {
		media = new Media(src,exito,error);
	}
	$('#botonGrabarAudio').button('enable');
	$('#botonDetenerGrabacion').button('enable');
	$('#botonReproducirAudio').button('enable');
	$('#botonDetenerReproduccion').button('enable');
	
	clearInterval(varInterval);
	message('');
	media.stopRecord();	
}


function detenerReproduccion() {
	
	$('#botonGrabarAudio').button('enable');
	$('#botonDetenerGrabacion').button('enable');
	$('#botonReproducirAudio').button('enable');
	$('#botonDetenerReproduccion').button('enable');
	
	clearInterval(varInterval);
	message('');
    
	if (media != null && media.isPlaying()) {
		media.stop();
	}
	

}

function message(txt) {
	//alert('entrando en mensaje');
	if (txt == '') {
		seconds='';
	}
	$('#message').html(txt + '    ' + seconds);
}

function exito() {
	//navigator.notification.alert('El objeto Media se ha obtenido correctamente',null,'Media Player','OK');
	console.log('El objeto Media se ha obtenido correctamente');
}

function error(error) {
    navigator.notification.alert ('Error al obtener el objeto Media. Codigo: ' + error.code, null, 'Error','OK');
	navigator.notification.alert ('Error al obtener el objeto Media. Mensaje ' + error.message, null, 'Error','OK');
	console.log('Error al obtener el objeto media: ' + error.message);
}