var mesActual;
var anoActual;
var pestanaActual='Mes';

document.addEventListener("deviceready", onDeviceReady, false);
document.addEventListener("backbutton", onBackKeyDown, false);

function onDeviceReady() {
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(poblarBBDD,errorBBDD,exitoBBDD);
	
	var fecha = new Date();
	var dia = fecha.getDate();
	var mes = fecha.getMonth() + 1;
	if (mes<10) {mes = "0" + mes;}
	var ano = fecha.getFullYear();
	
	alert (dia+'-'+mes+'-'+ano);
	
	var selectDia = $('#select-dia');
	var selectMes = $('#select-mes');
	var selectAno = $('#select-ano');
	
	selectDia.val(dia).attr('selected', true).siblings('option').removeAttr('selected');
	selectMes.val(mes).attr('selected', true).siblings('option').removeAttr('selected');
	selectAno.val(ano).attr('selected', true).siblings('option').removeAttr('selected');

	selectDia.selectmenu("refresh", true);
	selectMes.selectmenu("refresh", true);
	selectAno.selectmenu("refresh", true);
	
}

function poblarBBDD(transaction) {
	
	transaction.executeSql('DROP TABLE IF EXISTS FACTURAS');
	transaction.executeSql('CREATE TABLE FACTURAS (CONCEPTO TEXT, IMPORTE REAL, FECHA TEXT);');
	
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Gas","123.45","27-07-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Alquiler","98.87","27-05-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("IBI","123.45","27-06-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Agua","98.87","27-07-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Dinero Cajero","123.45","27-05-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Comisiones","98.87","27-06-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Telefono","123.45","27-07-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Iberdrola","98.87","27-05-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Supermercado","123.45","27-06-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Taller Coche","98.87","27-06-2012")');
	
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Gas","123.45","27-07-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Alquiler","98.87","27-05-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("IBI","123.45","27-06-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Agua","98.87","27-07-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Dinero Cajero","123.45","27-05-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Comisiones","98.87","27-06-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Telefono","123.45","27-07-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Iberdrola","98.87","27-05-2012")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Supermercado","123.45","27-06-2012")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Taller Coche","98.87","27-06-2012")');
	
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Gas","123.45","27-07-2013")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Alquiler","98.87","27-05-2013")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("IBI","123.45","27-06-2013")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Agua","98.87","27-07-2013")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Dinero Cajero","123.45","27-05-2013")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Comisiones","98.87","27-06-2013")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Telefono","123.45","27-07-2013")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Iberdrola","98.87","27-05-2013")');
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Supermercado","123.45","27-06-2013")'); 
	transaction.executeSql('INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("Taller Coche","98.87","27-06-2013")');
		
	//transaction.executeSql("SELECT * FROM FACTURAS", [], returnRows, errorBBDD);
	cargarFacturasMes(0);
	
}


function returnRows(transaction,results) {
	console.log("Num filas devueltas: " + results.rows.length);
	//alert("Num filas devueltas: " + results.rows.length);

	if (results.rows.length==0) {
	    console.log('No hay filas afectadas!');
	}
	  
	crearTabla(results);

}


function crearTabla(results) {
	$('#listaregistros').empty();
	
	//Añadimos la cabecera
	$('#listaregistros').append('<div class="ui-block-a ui-bar-a">CONCEPTO</div>');
	$('#listaregistros').append('<div class="ui-block-b ui-bar-a">IMPORTE</div>');
	$('#listaregistros').append('<div class="ui-block-c ui-bar-a">FECHA</div>');
	$('#listaregistros').append('<div class="ui-block-a ui-bar-a"></div>');
	$('#listaregistros').append('<div class="ui-block-b ui-bar-a"></div>');
	$('#listaregistros').append('<div class="ui-block-c ui-bar-a"></div>');
	
	alert("NumFacturas: " + results.rows.length);
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		console.log("Fila = " + i + " CONCEPTO = " + row.CONCEPTO + " Importe =  " + row.IMPORTE + " Fecha: " + row.FECHA);
		$('#listaregistros').append('<div class="ui-block-a ui-bar-a">'+row.CONCEPTO +'</div>');
		$('#listaregistros').append('<div class="ui-block-b ui-bar-a">'+row.IMPORTE +'</div>');
		$('#listaregistros').append('<div class="ui-block-c ui-bar-a">'+row.FECHA +'</div>');
		

	}
}


function guardarRegistro() {
	//alert('entrando en guardar registro');
	$('#formularioRegistro');
	var concepto = $('#concepto').val();
	var dia=$('#select-dia').val();
	var mes=$('#select-mes').val();
	var ano=$('#select-ano').val();
	var fecha = dia + '-' + mes + '-' + ano;
	//alert(fecha);
	var importe = $('#importe').val();
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction) {
			insertaFactura(transaction,concepto,importe,fecha);
		},errorBBDD,exitoBBDD);
}


function insertaFactura (transaction,concepto,importe,fecha) {
	var sql = 'INSERT INTO FACTURAS (CONCEPTO,IMPORTE,FECHA) VALUES ("'+concepto+'","'+importe+'","'+fecha+'")';
	console.log('Sql a ejecutar: ' + sql);
	transaction.executeSql(sql);
	console.log('fin inserta factura');
	
	//transaction.executeSql("SELECT * FROM FACTURAS", [], returnRows, errorBBDD);
	var array = fecha.split("-");
	var month = array[1];
	var year = array[2];
	alert ('Month: ' + month + ' Year: ' + year);
	queryFacturasMes(transaction,month,year);
}



function cargarFacturasMes(mes) {
	//alert ('Entrando en cargarFacturasMes');

	fecha = new Date();
	var month=mes;
	var year;
	
	if (month==0) {
		month = fecha.getMonth()+1;
	}
	
	if (month<10) {
			month = "0" + month;
	}
	mesActual = month;
	year=fecha.getFullYear();
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction) {
					queryFacturasMes(transaction,month,year);
					},
					errorBBDD,exitoBBDD);
	
}

function queryFacturasMes(transaction,month,year) {
	var sql= 'SELECT * FROM FACTURAS WHERE FECHA LIKE "%-' + month + '-' + year +'"';
	alert("SQL:" + sql);
	transaction.executeSql(sql, [], returnRows, errorBBDD);
}

function cargarFacturasAno(anno) {
	//alert ('Entrando en cargarFacturasAno');
	
	var fecha;
	var year=anno;
	if (year==0) {
		fecha = new Date();
		year = fecha.getFullYear();
	}
	anoActual = year;
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction) {
					queryFacturasAno(transaction,year);
					},
					errorBBDD,exitoBBDD);
	
}

function queryFacturasAno(transaction,year) {
	var sql= 'SELECT * FROM FACTURAS WHERE FECHA LIKE "%-' + year + '"';
	transaction.executeSql(sql, [], returnRows, errorBBDD);
}

function buscarFacturas() {
	alert('Entrando en Buscar Facturas');
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM FACTURAS', [], crearListaBusquedaFacturas, errorBBDD);
	},errorBBDD);
	
}

function crearListaBusquedaFacturas(transaction,results) {

	var listaBusquedaFacturas = $('#listabusquedafacturas');
	listaBusquedaFacturas.empty();
	
	
	alert("NumFacturas: " + results.rows.length);
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		console.log("Fila = " + i + " CONCEPTO = " + row.CONCEPTO + " Importe =  " + row.IMPORTE + " Fecha: " + row.FECHA);
		var txt = row.CONCEPTO + "            " + row.IMPORTE + "        " + row.FECHA;
		listaBusquedaFacturas.append('<li><a href="" data-role="button">'+txt+'</a></li>');
	}
	
}

function cargarListaCompleta() {
	alert('Entrando en cargarListaCompleta');
	console.log('Entrando en cargarListaCompleta');
	
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM FACTURAS', [], crearTablaListaCompleta, errorBBDD);
	},errorBBDD);
	
}


function crearTablaListaCompleta(transaction,results) {
	//console.log("Num filas devueltas: " + results.rows.length);
	alert("Num filas devueltas: " + results.rows.length);
	//if (!results.rowsAffected) {
	if (results.rows.length==0) {
	    console.log('No hay filas afectadas!');
	    return false;
	}
	  // for an insert statement, this property will return the ID of the last inserted row
	  //console.log("Ultimo id insertado = " + results.insertId);
	crearTabla(results);
	
}

function anterior() {
	alert ('Pestaña Actual: ' + pestanaActual);
	if (pestanaActual == 'Mes') {
		cargarFacturasMes(mesActual-1);
	}	
	if (pestanaActual == 'Ano') {
		cargarFacturasAno(anoActual-1);
	}
}

function siguiente() {
	alert ('Pestaña Actual: ' + pestanaActual);
	if (pestanaActual == 'Mes') {
		cargarFacturasMes(mesActual+1);
	}	
	if (pestanaActual == 'Ano') {
		cargarFacturasAno(anoActual+1);
	}
}

function onBackKeyDown()  {
	navigator.notification.confirm(
       ("Desea salir de la aplicacion?"),
        saliraplicacion(1),
        'PhoneGap Facturas',
        'YES,NO');
 	
}

function saliraplicacion(button) {
   //alert('entrando con button: ' + button);
   if(button=="1" || button==1) {
    navigator.app.exitApp();
   }
}


function errorBBDD(error) {
	alert ('Codigo de Error al obtener transaccion SQL: ' + error.code);
	alert ('Mensaje de Error al obtener transaccion SQL: ' + error.message);
	
}


function exitoBBDD(transaction) {
	alert('Transaccion obtenida correctamente');
	console.log('Transaccion obtenida correctamente');
}