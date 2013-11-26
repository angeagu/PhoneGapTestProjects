

function onDeviceReady() {
	
	var db = window.openDatabase("NBAPLAYERS", "1.0", "NBAPLAYERS", 1000000);
	db.transaction(poblarBBDD,errorBBDD,exitoBBDD);
}

function errorBBDD(error) {
	//alert ('Error al procesar SQL: ' + error.message + " error: " + error.code);
	console.log('Error al procesar SQL: ' + error)
}


function exitoBBDD(error) {
	console.log('Ejecucion de sql correcta');
	var db = window.openDatabase("NBAPLAYERS", "1.0", "NBAPLAYERS", 1000000);
	db.transaction(cargarListaEquipos,errorBBDD);
	
}

function poblarBBDD(transaction) {
	
	transaction.executeSql('DROP TABLE IF EXISTS PLAYERS');
	transaction.executeSql('DROP TABLE IF EXISTS TEAMS');
	transaction.executeSql('CREATE TABLE PLAYERS (NOMBRE TEXT, APELLIDO TEXT,ID_EQUIPO REAL);');
	transaction.executeSql('CREATE TABLE TEAMS (ID_EQUIPO REAL, NOMBRE TEXT, CONFERENCIA TEXT);');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("1","Miami Heat","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("2","New York Knicks","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("3","Indiana Pacers","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("4","Chicago Bulls","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("5","Boston Celtics","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("6","Brooklyn Nets","Este")');
	
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("7","San Antonio Spurs","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("8","Oklahoma City Thunder","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("9","Los Angeles Clippers","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("10","Los Angeles Lakers","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("11","Denver Nuggets","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("12","Memphis Grizzlies","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("13","Atlanta Hawks","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("14","Milwaukee Bucks","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("15","Toronto Raptors","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("16","Philadelphia 76ers","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("17","Washington Wizards","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("18","Detroit Pistons","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("19","Cleveland Cavaliers","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("20","Orlando Magic","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("21","Charlotte Bobcats","Este")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("22","Golden State Warriors","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("23","Houston Rockets","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("24","Utah Jazz","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("25","Dallas Mavericks","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("26","Portland Trail Blazers","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("27","Minnesota Timberwolves","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("28","Sacramento Kings","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("29","New Orleans Hornets","Oeste")');
	transaction.executeSql('INSERT INTO TEAMS (ID_EQUIPO,NOMBRE,CONFERENCIA) VALUES ("30","Phoenix Suns","Oeste")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Lebron","James","1")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Dwayne","Wade","1")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Chris","Bosh","1")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Ray","Allen","1")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Shane","Battier","1")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Carmelo","Anthony","2")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Tyson","Chandler","2")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Raymond","Felton","2")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Amare","Stoudemire","2")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Paul","George","3")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Roy","Hibbert","3")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("David","West","3")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("George","Hill","3")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Joakim","Noah","4")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Derrick","Rose","4")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Luol","Deng","4")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Carlos","Boozer","4")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jeff","Green","5")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Gerald","Wallace","5")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Brandon","Bass","5")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Rajon","Rondo","5")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Deron","Williams","6")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Joe","Johnson","6")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Brook","Lopez","6")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Paul","Pierce","6")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kevin","Garnett","6")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Andrei","Kirilenko","6")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Tim","Duncan","7")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Tony","Parker","7")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Thiago","Splitter","7")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Manu","Ginobili","7")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kawhi","Leonard","7")');
	
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Russell","Westbrook","8")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kevin","Durant","8")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Serge","Ibaka","8")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Thabo","Sefolosha","8")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Blake","Griffin","9")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Chris","Paul","9")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("DeAndre","Jordan","9")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jamal","Crawford","9")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kobe","Bryant","10")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Pau","Gasol","10")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Steve","Nash","10")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Ty","Lawson","11")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Danilo","Gallinari","11")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kenneth","Faried","11")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Wilson","Chandler","11")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Mike","Conley","12")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Marc","Gasol","12")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Zach","Randolph","12")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Tyshaun","Prince","12")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Al","Horford","13")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jeff","Teague","13")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Elton","Brand","13")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Paul","Millsap","13")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("O.J.","Mayo","14")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Ersan","Ilyasova","14")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Larry","Sanders","14")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Rudy","Gay","15")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Demarr","Derozan","15")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jonas","Valanciunas","15")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Evan","Turner","16")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Thaddeus","Young","16")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Michael","Carter-Williams","16")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("John","Wall","17")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Bradley","Beal","17")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Nene","Hilario","17")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Josh","Smith","18")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Greg","Monroe","18")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Andre","Drummond","18")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Brandon","Jennings","18")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kyrie","Irving","19")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Dion","Waiters","19")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Tristan","Thompson","19")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Andrew","Bynum","19")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jameer","Nelson","20")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Glen","Davis","20")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Nikola","Vucevic","20")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Arron","Afflalo","20")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Al","Jefferson","21")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kemba","Walker","21")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Gerald","Henderson","21")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Stephen","Curry","22")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Andre","Iguodala","22")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Klay","Thompson","22")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Andre","Bogut","22")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("David","Lee","22")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Harrison","Barnes","22")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jeremy","Lin","23")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("James","Harden","23")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Chandler","Parsons","23")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Dwight","Howard","23")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Enes","Kanter","24")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Derrick","Favors","24")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Gordon","Hayward","24")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Trey","Burke","24")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jose","Calderon","25")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Monta","Ellis","25")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Dirk","Nowitzki","25")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Shawn","Marion","25")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Vince","Carter","25")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Damian","Lillard","26")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Nicolas","Batum","26")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("LaMarcus","Aldridge","26")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Ricky","Rubio","27")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kevin","Love","27")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Nikola","Pekovic","27")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Kevin","Martin","27")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("DeMarcus","Cousins","28")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Isaiah","Thomas","28")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Greivis","Vasquez","28")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Jrue","Holiday","29")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Eric","Gordon","29")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Anthony","Davis","29")');
	
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Eric","Bledsoe","30")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Goran","Dragic","30")');
	transaction.executeSql('INSERT INTO PLAYERS (NOMBRE,APELLIDO,ID_EQUIPO) VALUES ("Markieff","Morris","30")');		
	
}

function cargarListaEquipos() {
	console.log('Entrando en cargarListaCompleta');
	//Cargamos la lista de equipos, y antes cargamos el ListView();
	
	var db = window.openDatabase("NBAPLAYERS", "1.0", "NBAPLAYERS", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM TEAMS', [], crearTablaListaEquipos, errorBBDD);
	},errorBBDD);
}


function crearTablaListaEquipos(transaction,results) {
	console.log("Entrando en crearTablaListaEquipos");
	console.log("Num filas devueltas: " + results.rows.length);
	if (results.rows.length==0) {
	    console.log('No hay resultados');
	    return false;
	}
	
	$select = $('#select-equipo');
	$select.empty();
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		console.log("Fila = " + i + " NOMBRE = " + row.NOMBRE + " Conferencia  " + row.CONFERENCIA );
		$select.append('<option value="'+row.ID_EQUIPO+'">'+row.NOMBRE+'</option>');
	}
	$select.selectmenu("refresh", true);
	//return true;

	//Una vez creamos la lista de equipos, cargamos el listView de búsqueda autocompetada
	cargarListView();
}

function actualizaJugadores() {
	$select = $('#select-equipo');
	var id_equipo = $select.val();
	var db = window.openDatabase("NBAPLAYERS", "1.0", "NBAPLAYERS", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM PLAYERS WHERE ID_EQUIPO='+id_equipo, [], crearListaJugadores, errorBBDD);
		},errorBBDD);
	
}


function crearListaJugadores(transaction,results) {
	console.log("Num filas devueltas: " + results.rows.length);
	if (results.rows.length==0) {
	    console.log('No hay resultados');
	    return false;
	}
	
	$select = $('#select-jugador');
	$select.empty();
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		$select.append('<option value="'+row.NOMBRE+' '+row.APELLIDO+'">'+row.NOMBRE+' '+row.APELLIDO+'</option>');
	}
	$select.selectmenu("refresh", true);
}

function cargarListView() {
	var db = window.openDatabase("NBAPLAYERS", "1.0", "NBAPLAYERS", 1000000);
	db.transaction(function(transaction){
		transaction.executeSql('SELECT * FROM PLAYERS', [], crearListaListView, errorBBDD);
		},errorBBDD);
}

function crearListaListView(transaction,results) {
	//alert('entrandoenCrearListaListView');
	if (results.rows.length==0) {
	    console.log('No hay resultados');
	    return false;
	}

	$listview = $('#listview-jugadores');
	for (var i=0; i<results.rows.length; i++) {
		var row = results.rows.item(i);
		//var text = '<li><a href="#">'+row.NOMBRE+' '+row.APELLIDO+'</a></li>';
		//var text = '<li class="ui-screen-hidden" data-filtertext="'+row.NOMBRE+' '+row.APELLIDO+'"><a href="#" onclick="alert("yo");">'+row.NOMBRE+' '+row.APELLIDO+'</a></li>';
		var text = '<li class="ui-screen-hidden" data-filtertext="'+row.NOMBRE+' '+row.APELLIDO+'"><a href="http://hoopdata.com/player.aspx?name='+row.NOMBRE+' '+row.APELLIDO+'" >'+row.NOMBRE+' '+row.APELLIDO+'</a></li>';
		
		//var text = '<li class="ui-screen-hidden" data-filtertext="'+row.NOMBRE+' '+row.APELLIDO+'"><a href="#">'+row.NOMBRE+' '+row.APELLIDO+'</a></li>';
		//var text = '<li>'+row.NOMBRE+' '+row.APELLIDO+'</li>';
		//alert (text);
		$listview.append(text);
	
	}
	$listview.listview();
	$listview.listview("refresh");
		
}


function cargarJugador(string) {
	//alert('entrandoenCargarJugador con string: ' + string);
	
	
	var jugador = '';
	var selectJugador = $('#select-jugador').val().toLowerCase();
	
	if (selectJugador!=undefined && selectJugador.length>0) {
		jugador = selectJugador;
	}
	else {
		jugador = string;
	}
	
	//var urlJugador = 'http://www.nba.com/playerfile/' + jugador;
	var urlJugador = 'http://hoopdata.com/player.aspx?name=' + jugador;
	//alert ('URL Jugador: ' + urlJugador);
	
	
	/* $.mobile.loadPage( urlJugador, { showLoadMsg: false } ); 
	
	$.mobile.changePage(urlJugador);
	*/
	
	var ref = window.open(urlJugador, '_blank', 'location=yes');
	//window.location.href = urlJugador;
	
}



