
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(poblarBBDD,errorBBDD,exitoBBDD);
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
	
	
}

function selectFacturas(transaction) {
	console.log('ejecutandoSelect');
	transaction.executeSql('SELECT * FROM FACTURAS', [], returnRows, errorBBDD);
	
}

function returnRows(transaction,results) {
	console.log("Num filas devueltas: " + results.rows.length);
	//alert("Num filas devueltas: " + results.rows.length);
	//if (!results.rowsAffected) {
	if (results.rows.length==0) {
	    console.log('No hay filas afectadas!');
	    return false;
	}
	  // for an insert statement, this property will return the ID of the last inserted row
	  //console.log("Ultimo id insertado = " + results.insertId);
	crearTabla(results);

}


function crearTabla(results) {
	$('#listaregistros').empty();
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		console.log("Fila = " + i + " CONCEPTO = " + row.CONCEPTO + " Importe =  " + row.IMPORTE + " Fecha: " + row.FECHA);
		$('#listaregistros').append('<div class="ui-block-a ui-bar-a">'+row.CONCEPTO +'</div>');
		$('#listaregistros').append('<div class="ui-block-b ui-bar-a">'+row.IMPORTE +'</div>');
		$('#listaregistros').append('<div class="ui-block-c ui-bar-a">'+row.FECHA +'</div>');
		

	}
}


function guardarRegistro() {
	
	$('#formularioRegistro');
	var concepto = $('#concepto').val();
	var fecha = $('#fecha').val();
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
}


function errorBBDD(error) {
	alert ('Error al procesar SQL: ' + error);
	console.log('Error al procesar SQL: ' + error)
}


function exitoBBDD(error) {
	console.log('Ejecucion de sql correcta');
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(selectFacturas,errorBBDD);
}


function cargarListaCompleta() {
	console.log('Entrando en cargarListaCompleta');
	var db = window.openDatabase("FACTURAS", "1.0", "Facturas", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM FACTURAS', [], crearTablaListaCompleta, errorBBDD);
	},errorBBDD);
}


function crearTablaListaCompleta(transaction,results) {
	console.log("Num filas devueltas: " + results.rows.length);
	//alert("Num filas devueltas: " + results.rows.length);
	//if (!results.rowsAffected) {
	if (results.rows.length==0) {
	    console.log('No hay filas afectadas!');
	    return false;
	}
	  // for an insert statement, this property will return the ID of the last inserted row
	  //console.log("Ultimo id insertado = " + results.insertId);
	crearTabla(results);
	$('#listacompletaregistros').empty();
	$('#listacompletaregistros').append('<ul data-role="listview" data-filter="true" data-inset="true">');
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		console.log("Fila = " + i + " CONCEPTO = " + row.CONCEPTO + " Importe =  " + row.IMPORTE + " Fecha: " + row.FECHA);
		$('#listacompletaregistros').append('<li>');
		//$('#listacompletaregistros').append('<div class="ui-block-a ui-bar-a">'+row.CONCEPTO +'</div>');
		//$('#listacompletaregistros').append('<div class="ui-block-b ui-bar-a">'+row.IMPORTE +'</div>');
		//$('#listacompletaregistros').append('<div class="ui-block-c ui-bar-a">'+row.FECHA +'</div>');
		$('#listacompletaregistros').append('<a href="#">'+row.CONCEPTO + '  ' + row.FECHA + '  ' + row.IMPORTE + '  ' + '</a>');
		$('#listacompletaregistros').append('</li>');

	}
	$('#listacompletaregistros').append('</ul>');
}
