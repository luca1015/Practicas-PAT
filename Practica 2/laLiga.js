var direccion3 = 'https://api.football-data.org/v2/competitions/PD/standings';
var direccion4 = 'https://api.football-data.org/v2/competitions/PD/scorers';
var direccion5 = 'http://api.football-data.org/v2/competitions/PD';
var direccion6 = 'https://api.football-data.org/v2/competitions/PD/matches?matchday=';

    function limpiar_contenedor(){
        document.getElementById('contenido').innerHTML = '';
    }

    function generar_jornadas(){
        var idjorn = document.getElementById('idjornadas');
        for (let step = 1; step < 39; step++) {
            var jornada_ind = document.createElement("a");
            jornada_ind.onclick = function() { generar_jor(step); };
            jornada_ind.classList.add('dropdown-item');
            var texto = document.createTextNode("Jornada "+step);
            jornada_ind.appendChild(texto);
            idjorn.appendChild(jornada_ind);
        }

    }

    function generar_jor(num_jor){
        limpiar_contenedor();
        var body = document.getElementById('contenido');

        var title_father = document.createElement("div");
        title_father.classList.add('jor-f');
        var title_child1 = document.createElement("div");
        title_child1.classList.add('jor-c');
        var title_child2 = document.createElement("div");
        title_child2.classList.add('jor-c', 'img-c');

        var text = document.createElement('h2');
        var texto = document.createTextNode("JORNADA "+num_jor);
        text.appendChild(texto);

        var img2 = document.createElement('img');
        img2.classList.add('imgre');
        img2.setAttribute('src', 'static/images/LaLiga.png');

        title_child1.appendChild(text);
        title_child2.appendChild(img2);
        title_father.appendChild(title_child1);
        title_father.appendChild(title_child2);
        body.appendChild(title_father);

        obtener_partidos(direccion6,num_jor);

    }

    function genera_historico(){
        limpiar_contenedor();

        var body = document.getElementById('contenido');

        var tabla   = document.createElement("table");
        tabla.classList.add('tabla_pi');
        tabla.setAttribute("id", "id_tabla_clas");
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');
        var celda = document.createElement("td");
        celda.classList.add('celda-p','celda-ti');
        var textoCelda = document.createTextNode("");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda12 = document.createElement("td");
        textoCelda = document.createTextNode("");
        celda12.classList.add('celda-p','celda-ti');
        celda12.appendChild(textoCelda);
        hilera.appendChild(celda12);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode("Equipo");
        celda2.classList.add('celda-p','celda-ti');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode("Temporada");
        celda3.classList.add('celda-p','celda-ti');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        tblBody.appendChild(hilera);

        tabla.appendChild(tblBody);
        body.appendChild(tabla);

        meterWinners(direccion5,'id_tabla_clas');
    }

    function genera_pichichi(){
        limpiar_contenedor();

        var body = document.getElementById('contenido');

        var tabla   = document.createElement("table");
        tabla.classList.add('tabla_pi');
        tabla.setAttribute("id", "id_tabla_clas");
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');
        var celda = document.createElement("td");
        celda.classList.add('celda-p','celda-ti','centrar');
        var textoCelda = document.createTextNode("Pos");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda12 = document.createElement("td");
        textoCelda = document.createTextNode("Nombre");
        celda12.classList.add('celda-p','celda-ti');
        celda12.appendChild(textoCelda);
        hilera.appendChild(celda12);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode("Equipo");
        celda2.classList.add('celda-p','celda-ti');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode("Goles");
        celda3.classList.add('celda-p','celda-ti');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        tblBody.appendChild(hilera);

        tabla.appendChild(tblBody);
        body.appendChild(tabla);

        meterJugadores(direccion4,'id_tabla_clas');
    }

    function genera_tabla(clasi) {
        limpiar_contenedor();
        // Obtener la referencia del elemento body
        var body = document.getElementById('contenido');

        var tabla   = document.createElement("table");
        tabla.classList.add('tabla_clas');
        tabla.setAttribute("id", "id_tabla_clas");
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');
        var celda = document.createElement("td");
        celda.classList.add('celda','celda-ti');
        var textoCelda = document.createTextNode("Pos");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda12 = document.createElement("td");
        textoCelda = document.createTextNode("");
        celda12.classList.add('celda-img','imgClub','celda-ti');
        celda12.appendChild(textoCelda);
        hilera.appendChild(celda12);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode("Equipo");
        celda2.classList.add('celda-eq','celda-ti');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode("Pts");
        celda3.classList.add('celda','celda-ti');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        var celda4 = document.createElement("td");
        textoCelda = document.createTextNode("PJ");
        celda4.classList.add('celda','celda-ti');
        celda4.appendChild(textoCelda);
        hilera.appendChild(celda4);

        var celda5 = document.createElement("td");
        textoCelda = document.createTextNode("W");
        celda5.classList.add('celda','celda-ti');
        celda5.appendChild(textoCelda);
        hilera.appendChild(celda5);

        var celda6 = document.createElement("td");
        textoCelda = document.createTextNode("L");
        celda6.classList.add('celda','celda-ti');
        celda6.appendChild(textoCelda);
        hilera.appendChild(celda6);

        var celda7 = document.createElement("td");
        textoCelda = document.createTextNode("D");
        celda7.classList.add('celda','celda-ti');
        celda7.appendChild(textoCelda);
        hilera.appendChild(celda7);

        var celda8 = document.createElement("td");
        textoCelda = document.createTextNode("Forma");
        celda8.classList.add('celda-forma','celda-ti');
        celda8.appendChild(textoCelda);
        hilera.appendChild(celda8);

        var celda9 = document.createElement("td");
        textoCelda = document.createTextNode("GF");
        celda9.classList.add('celda','celda-ti');
        celda9.appendChild(textoCelda);
        hilera.appendChild(celda9);

        var celda10 = document.createElement("td");
        textoCelda = document.createTextNode("GC");
        celda10.classList.add('celda','celda-ti');
        celda10.appendChild(textoCelda);
        hilera.appendChild(celda10);

        var celda11 = document.createElement("td");
        textoCelda = document.createTextNode("DG");
        celda11.classList.add('celda','celda-ti');
        celda11.appendChild(textoCelda);
        hilera.appendChild(celda11);

        tblBody.appendChild(hilera);

        tabla.appendChild(tblBody);
        body.appendChild(tabla);


        if(clasi=="total"){
            meterClasificacion(direccion3,'id_tabla_clas',0);
        }else if(clasi=="local"){
            meterClasificacion(direccion3,'id_tabla_clas',1);
        }else if(clasi=="visitante"){
            meterClasificacion(direccion3,'id_tabla_clas',2);
        }

    }

    function addPartidos_jor(equipo1,equipo2,resultado){
        var body = document.getElementById('contenido');

        var title_father = document.createElement("div");
        title_father.classList.add('jor-f');
        var title_child1 = document.createElement("div");
        title_child1.classList.add('jor-c','text-j','f-1');
        var title_child2 = document.createElement("div");
        title_child2.classList.add('jor-c','text-j','f-2');
        var title_child3 = document.createElement("div");
        title_child3.classList.add('jor-c','text-j','f-3');

        var text = document.createElement('h3');
        var texto = document.createTextNode(equipo1);
        text.appendChild(texto);

        var text2 = document.createElement('h3');
        var texto2 = document.createTextNode(equipo2);
        text2.appendChild(texto2);

        var text3 = document.createElement('h3');
        var texto3 = document.createTextNode(resultado);
        text3.appendChild(texto3);

        title_child1.appendChild(text);
        title_child2.appendChild(text2);
        title_child3.appendChild(text3);
        title_father.appendChild(title_child1);
        title_father.appendChild(title_child3);
        title_father.appendChild(title_child2);
        body.appendChild(title_father);
    }

    function addWinners(idTabla, imagen, equipo, temporada){

        var body = document.getElementById('id_tabla_clas');
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');

        var celda12 = document.createElement("td");
        var img2 = document.createElement('img');
        celda12.classList.add('celda-img','imgClub2');
        img2.classList.add('imgre');
        img2.setAttribute('src', 'https://img.icons8.com/flat-round/64/000000/uefa-euro-trophy.png');
        celda12.appendChild(img2);
        hilera.appendChild(celda12);

        var celda1 = document.createElement("td");
        var img2 = document.createElement('img');
        celda1.classList.add('celda-img','imgClub2');
        img2.classList.add('imgre');
        img2.setAttribute('src', imagen);
        celda1.appendChild(img2);
        hilera.appendChild(celda1);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode(equipo);
        celda2.classList.add('celda-p');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode(temporada);
        celda3.classList.add('celda-p');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        tblBody.appendChild(hilera);
        body.appendChild(tblBody);

    }

    function addPlayer(idTabla, posicion, nombre, equipo, goles){
        var body = document.getElementById('id_tabla_clas');
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');

        var celda = document.createElement("td");
        celda.classList.add('celda-p','centrar');
        var textoCelda = document.createTextNode(posicion);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda12 = document.createElement("td");
        textoCelda = document.createTextNode(nombre);
        celda12.classList.add('celda-p');
        celda12.appendChild(textoCelda);
        hilera.appendChild(celda12);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode(equipo);
        celda2.classList.add('celda-p');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode(goles);
        celda3.classList.add('celda-p');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        tblBody.appendChild(hilera);
        body.appendChild(tblBody);
    }

    function addEquipos(idTabla, posicion, imagen, equipo, puntos, partidos_jugados, w, l, d, forma, gf, gc, diferencia_goles){
        var body = document.getElementById('id_tabla_clas');
        var tblBody = document.createElement("tbody");

        var hilera = document.createElement("tr");
        hilera.classList.add('fila');
        var celda = document.createElement("td");
        celda.classList.add('celda');
        var textoCelda = document.createTextNode(posicion);
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);

        var celda12 = document.createElement("td");
        var img2 = document.createElement('img');
        celda12.classList.add('celda-img','imgClub');
        img2.classList.add('imgre');
        img2.setAttribute('src', imagen);
        celda12.appendChild(img2);
        hilera.appendChild(celda12);

        var celda2 = document.createElement("td");
        textoCelda = document.createTextNode(equipo);
        celda12.classList.add('celda-eq');
        celda2.appendChild(textoCelda);
        hilera.appendChild(celda2);

        var celda3 = document.createElement("td");
        textoCelda = document.createTextNode(puntos);
        celda3.classList.add('celda');
        celda3.appendChild(textoCelda);
        hilera.appendChild(celda3);

        var celda4 = document.createElement("td");
        textoCelda = document.createTextNode(partidos_jugados);
        celda4.classList.add('celda');
        celda4.appendChild(textoCelda);
        hilera.appendChild(celda4);

        var celda5 = document.createElement("td");
        textoCelda = document.createTextNode(w);
        celda5.classList.add('celda');
        celda5.appendChild(textoCelda);
        hilera.appendChild(celda5);

        var celda6 = document.createElement("td");
        textoCelda = document.createTextNode(l);
        celda6.classList.add('celda');
        celda6.appendChild(textoCelda);
        hilera.appendChild(celda6);

        var celda7 = document.createElement("td");
        textoCelda = document.createTextNode(d);
        celda7.classList.add('celda');
        celda7.appendChild(textoCelda);
        hilera.appendChild(celda7);

        var celda8 = document.createElement("td");
        textoCelda = document.createTextNode(forma);
        celda12.classList.add('celda-forma');
        celda8.appendChild(textoCelda);
        hilera.appendChild(celda8);

        var celda9 = document.createElement("td");
        textoCelda = document.createTextNode(gf);
        celda9.classList.add('celda');
        celda9.appendChild(textoCelda);
        hilera.appendChild(celda9);

        var celda10 = document.createElement("td");
        textoCelda = document.createTextNode(gc);
        celda10.classList.add('celda');
        celda10.appendChild(textoCelda);
        hilera.appendChild(celda10);

        var celda11 = document.createElement("td");
        textoCelda = document.createTextNode(diferencia_goles);
        celda11.classList.add('celda');
        celda11.appendChild(textoCelda);
        hilera.appendChild(celda11);

        tblBody.appendChild(hilera);
        body.appendChild(tblBody);

    }

    function meterWinners(direccion,idTabla){
        fetch(direccion,
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
                for (let step = 1; step < 4; step++) {
                    var imagen = r.seasons[step].winner.crestUrl;
                    var equipo = r.seasons[step].winner.name;
                    equipo = recortarNombre(equipo);
                    var temporada_ini = r.seasons[step].startDate;
                    var temporada_fin = r.seasons[step].endDate;
                    var temporada = "Temporada "+temporada_ini.substr(0,4)+"/"+temporada_fin.substr(0,4);
                    addWinners(idTabla, imagen, equipo, temporada);
                }
            })
            //Errores de RED y respuestas KO
            .catch(e => console.log(e))
    }

    function obtener_partidos(direccion,num_jor){
        var direccion2 = direccion+num_jor;
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
                for (let step = 0; step < r.matches.length; step++) {
                    var equipo1 = r.matches[step].awayTeam.name;
                    var equipo2 = r.matches[step].homeTeam.name;
                    equipo1 = recortarNombre(equipo1);
                    equipo2 = recortarNombre(equipo2);
                    var estado = r.matches[step].status;
                    var g_h = r.matches[step].score.fullTime.homeTeam;
                    var date = r.matches[step].utcDate;
                    var dia = date.substr(8,2);
                    var mes = date.substr(5,2);
                    var hora = date.substr(11,2);
                    var minuto = date.substr(14,2);
                    var fecha = dia+"/"+mes+" "+hora+":"+minuto;
                    if(g_h==null){
                        g_h=0;
                    }
                    var g_a = r.matches[step].score.fullTime.awayTeam;
                    if(g_a==null){
                        g_a=0;
                    }
                    var resultado = g_h+"-"+g_a;
                    if(estado=="FINISHED"){
                        addPartidos_jor(equipo1,equipo2,resultado);
                    }else{
                        addPartidos_jor(equipo1,equipo2,fecha);
                    }
                }
            })
            //Errores de RED y respuestas KO
            .catch(e => console.log(e))
    }

    function meterClasificacion(direccion,idTabla,indice){

        fetch(direccion,
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
                for (let step = 0; step < r.standings[indice].table.length; step++) {
                    var posicion = r.standings[indice].table[step].position;
                    var imagen = r.standings[indice].table[step].team.crestUrl;
                    var equipo = r.standings[indice].table[step].team.name;
                    equipo = recortarNombre(equipo);
                    var puntos = r.standings[indice].table[step].points;
                    var partidos_jugados = r.standings[indice].table[step].playedGames;
                    var w = r.standings[indice].table[step].won;
                    var l = r.standings[indice].table[step].lost;
                    var d = r.standings[indice].table[step].draw;
                    var forma = r.standings[indice].table[step].form;
                    var gf = r.standings[indice].table[step].goalsFor;
                    var gc= r.standings[indice].table[step].goalsAgainst;
                    var diferencia_goles = r.standings[indice].table[step].goalDifference;
                    addEquipos(idTabla, posicion, imagen, equipo, puntos, partidos_jugados, w, l, d, forma, gf, gc, diferencia_goles);
                }
            })
            //Errores de RED y respuestas KO
            .catch(e => console.log(e))
    }

    function meterJugadores(direccion,idTabla){

        fetch(direccion,
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
                for (let step = 0; step < r.scorers.length; step++) {
                    var posicion = step+1;
                    var nombre = r.scorers[step].player.name;
                    var equipo = r.scorers[step].team.name;
                    equipo = recortarNombre(equipo);
                    var goles =  r.scorers[step].numberOfGoals;
                    addPlayer(idTabla, posicion, nombre, equipo, goles);
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