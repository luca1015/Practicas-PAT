const url = 'https://api.football-data.org/v2/';
var peticion1 = 'teams/78/matches?status=SCHEDULED';
var peticion2 = 'competitions/PD/standings';
var direccion1 = url+peticion1;
var direccion2 = url+peticion2;

    function addTablas(){
        obtenerClasificacion(direccion2,'clasificacionLiga');
        obtenerPartidos(direccion1,'proximosPartidos');
    }

    function addClasificacion(idTabla, equipo, puntos, partidos_jugados, diferencia_goles){
        clasificacion = '<td>'+equipo+'</td><td>'+puntos+'</td><td>'+partidos_jugados+'</td><td>'+diferencia_goles+'</td>';
        document.getElementById(idTabla).insertRow(-1).innerHTML = clasificacion;
    }

    function addPartidos(idTabla,enfrentamiento,competicion,fecha){
        partidos = '<td>'+competicion+'</td><td>'+enfrentamiento+'</td><td>'+fecha+'</td>';
        document.getElementById(idTabla).insertRow(-1).innerHTML = partidos;
    }

    function obtenerPartidos(direccion1,idTabla){

        fetch(direccion1,
            {
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'd962f8a6ede5406e99d1cb479b832094',
                }
            })
            //Suscribimos a la promesa Response
            .then(res => {
                if(res.ok){
                    //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                    return res.json()
                }else{
                    throw res;
                }
            })
            //Suscribimos a la promesa Body
            .then(r => {
                for (let step = 0; step < 7; step++) {
                    var local2 = r.matches[step].homeTeam.name;
                    var visitante2 = r.matches[step].awayTeam.name;
                    var local = recortarNombre(local2);
                    var visitante = recortarNombre(visitante2)
                    var enfrentamiento = local + " - " + visitante;
                    var competicion = r.matches[step].competition.name;
                    var date = r.matches[step].utcDate;
                    var dia = date.substr(8,2);
                    var mes = date.substr(5,2);
                    var hora = date.substr(11,2);
                    var minuto = date.substr(14,2);
                    var fecha = dia+"/"+mes+" "+hora+":"+minuto;

                    addPartidos(idTabla, enfrentamiento, competicion, fecha);
                }
            })
            //Errores de RED y respuestas KO
            .catch(e => console.log(e))
    }

    function obtenerClasificacion(direccion2,idTabla){

        fetch(direccion2,
            {
                method: 'GET',
                headers: {
                    'X-Auth-Token': 'd962f8a6ede5406e99d1cb479b832094',
                }
            })
            //Suscribimos a la promesa Response
            .then(res => {
                if(res.ok){
                    //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                    return res.json()
                }else{
                    throw res;
                }
            })
            //Suscribimos a la promesa Body
            .then(r => {
                for (let step = 0; step < 7; step++) {
                    var equipo = r.standings[0].table[step].team.name;
                    equipo = recortarNombre(equipo);
                    var puntos = r.standings[0].table[step].points;
                    var partidos_jugados = r.standings[0].table[step].playedGames;
                    var diferencia_goles = r.standings[0].table[step].goalDifference;
                    addClasificacion(idTabla, equipo, puntos, partidos_jugados, diferencia_goles);
                }
            })
            //Errores de RED y respuestas KO
            .catch(e => console.log(e))
    }

    function recortarNombre(equipo){
        var equipo_recortado = equipo;
        var indice1 = equipo.indexOf("FC");
        var tamaño = equipo.length;
        if(indice1>0){
            equipo_recortado = equipo.substr(0,indice1-1);
        }else if(indice1==0){
            equipo_recortado = equipo.substr(3,tamaño-1);
        }
        var indice2 = equipo.indexOf("Club");
        if(indice2>0){
            equipo_recortado = equipo.substr(0,indice2-1);
        }else if(indice2==0){
            equipo_recortado = equipo.substr(5,tamaño-1);
        }
        var indice3 = equipo.indexOf("CF");
        if(indice3>0){
            equipo_recortado = equipo.substr(0,indice3-1);
        }else if(indice3==0){
            equipo_recortado = equipo.substr(3,tamaño-1);
        }
        var indice4 = equipo.indexOf("Deportivo");
        if(indice4>0){
            equipo_recortado = equipo.substr(0,indice3-1);
        }else if(indice4==0){
            equipo_recortado = equipo.substr(9,tamaño-1);
        }
        return equipo_recortado;
    }

    function añadirComentario(){
        let miNodo = document.createElement('div');
        miNodo.classList.add('media', 'border', 'p-3');

        let miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('media-body');

        let miNodoTitle = document.createElement('h4');
        miNodoTitle.textContent = "Lucas Martinez";

        let texto = document.createElement('p');
        var comentario = document.getElementById("comentario").value;
        texto.textContent = comentario;

        let miNodoFecha = document.createElement('small');
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var f=new Date();
        let fecha_p = " Publicado el "+f.getDay()+" de "+meses[f.getMonth()]+", "+f.getFullYear();
        miNodoFecha.textContent = fecha_p;

        miNodoTitle.appendChild(miNodoFecha);

        // Imagen
        let miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('mr-3', 'mt-3', 'rounded-circle', 'wd');
        miNodoImagen.setAttribute('src', "static/images/Usuario2.png");

        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(texto);

        miNodo.appendChild(miNodoImagen);
        miNodo.appendChild(miNodoCardBody);

        var div = document.querySelector("#id2");
        div.appendChild(miNodo);
    }

var datos_clas = '<td>'+posicion+'</td><td class ="celda-img"><img src="'+imagen+'" width="100%" height="10%"></td><td class="celda-eq">'+equipo+'</td><td>'+puntos+'</td><td>'+partidos_jugados+'</td><td>'+w+'</td><td>'+l+'</td><td>'+d+'</td><td>'+forma+'</td><td>'+gf+'</td><td>'+gc+'</td><td>'+diferencia_goles+'</td>';
var body = document.getElementById('contenido');
document.getElementById('id_tabla_clas').insertRow(-1).innerHTML = datos_clas;


