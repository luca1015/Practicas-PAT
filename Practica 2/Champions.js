var direccion1 = 'https://api.football-data.org/v2/competitions/CL/matches?status=SCHEDULED';
var direccion2 = 'https://api.football-data.org/v2/competitions/CL/standings';

    function limpiar_contenedor(){
        document.getElementById('contenido-c').innerHTML = '';
    }

    function generar_proximosPartidos(){
        limpiar_contenedor();
        generar_prP();
    }

    function partido_ind_active(img1,img2){
        var texto = '<div class="carousel-item active">\n' +
            '                    <div class="p-partidos">\n' +
            '                        <div class="l-f">\n' +
            '                            <div class="l-c l1">\n' +
            '                                <img src="'+img1+'" width="70%" height="40%"/>\n' +
            '                            </div>\n' +
            '                            <div class="l-c l2">\n' +
            '                                <img src="'+img2+'" width="70%" height="40%"/>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <div class="titulo-p">\n' +
            '                            <h1>OCTAVOS DE FINAL</h1>\n' +
            '                        </div>\n' +
            '                    </div>\n' +
            '                </div>\n';
        return texto;
    }

    function partido_ind(img1,img2){
        var texto = '<div class="carousel-item vh-100">\n' +
        '                    <div class="p-partidos">\n' +
        '                        <div class="l-f">\n' +
        '                            <div class="l-c l1">\n' +
        '                                <img src="'+img1+'" width="70%" height="40%"/>\n' +
        '                            </div>\n' +
        '                            <div class="l-c l2">\n' +
        '                                <img src="'+img2+'" width="70%" height="40%"/>\n' +
        '                            </div>\n' +
        '                        </div>\n' +
        '                        <div class="titulo-p">\n' +
        '                            <h1>OCTAVOS DE FINAL</h1>\n' +
        '                        </div>\n' +
        '                    </div>\n' +
        '                </div>\n';
        return texto;
    }

    function generar_prP(){
        document.getElementById('contenido-c').innerHTML = '<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">\n' +
            '            <ol class="carousel-indicators">\n' +
            '                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>\n' +
            '                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>\n' +
            '                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>\n' +
            '                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>\n' +
            '            </ol>\n' +
            '            <div id="carousel-i" class="carousel-inner">\n' +
            '            </div>\n' +
            '            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">\n' +
            '                <span class="carousel-control-prev-icon" aria-hidden="true"></span>\n' +
            '                <span class="sr-only">Previous</span>\n' +
            '            </a>\n' +
            '            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">\n' +
            '                <span class="carousel-control-next-icon" aria-hidden="true"></span>\n' +
            '                <span class="sr-only">Next</span>\n' +
            '            </a>\n' +
            '\n' +
            '        </div>';
        obtenerPartidos();
    }

    function obtenerPartidos(){
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
                var id_equipos = new Array();
                var url_equipos = new Array();
                for (let step = 0; step < r.standings.length; step=step+3) {
                    for (let nteam = 0; nteam < 4; nteam++) {
                        id_equipos.push(r.standings[step].table[nteam].team.id);
                        url_equipos.push(r.standings[step].table[nteam].team.crestUrl);
                    }
                }
                fetch(direccion1 ,
                    {
                        method: 'GET',
                        headers: {
                            'X-Auth-Token': 'd962f8a6ede5406e99d1cb479b832094',
                        }
                    })
                    //Suscribimos a la promesa Response
                    .then(res => {
                        if (res.ok) {
                            //Si la respuesta se resolvió bien, procedemos a resolver la promesa Body
                            return res.json()
                        } else {
                            throw res;
                        }
                    })
                    //Suscribimos a la promesa Body
                    .then(r => {
                        prueba = r;
                        console.log(r);
                        var texto = '';
                        for (let step = 0; step < r.matches.length; step++) {
                            var id_visitante = r.matches[step].awayTeam.id;
                            var id_local = r.matches[step].homeTeam.id;
                            var pos_l = id_equipos.indexOf(id_local);
                            var pos_v = id_equipos.indexOf(id_visitante);
                            var url_l = url_equipos[pos_l];
                            var url_v = url_equipos[pos_v];
                            var equipo_local = r.matches[step].homeTeam.name;
                            equipo_local = recortarNombre(equipo_local);
                            var equipo_visitante = r.matches[step].awayTeam.name;
                            equipo_visitante = recortarNombre(equipo_visitante);
                            if(step==0){
                                texto = texto+partido_ind_active(url_l,url_v);
                            }else{
                                texto = texto+partido_ind(url_l,url_v);
                            }
                        }
                        document.getElementById('carousel-i').innerHTML = texto;
                    })
                    //Errores de RED y respuestas KO
                    .catch(e => console.log(e))

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