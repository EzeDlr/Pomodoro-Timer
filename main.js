var comenzar = document.getElementById('b-comenzar');
var reiniciar = document.getElementById('b-reiniciar');
var detener = document.getElementById('b-detener');
var descanso = document.getElementById('descanso')

var tm = document.getElementById('t-minutos');
var ts = document.getElementById('t-segundos');

var dm = document.getElementById('d-minutos');
var ds = document.getElementById('d-segundos');

var contador = document.getElementById('ciclos');
contador.innerText = 0;

var sonido = document.getElementById('audio');

//Referencia para guardar el tiempo transcurrido. Memoria del tiempo.
 var comenzarTiempo;
 var referenciaDescanso; 
 

 comenzar.addEventListener('click', function () {
     if (comenzarTiempo === undefined) {
         comenzarTiempo = setInterval(temporizador, 1000);
     } else {
        console.log(comenzarTiempo)
         alert('El tiempo ya esta corriendo!');
     }
 })

 reiniciar.addEventListener('click', function() {
    tm.innerText = "25";
    ts.innerText = "00";

    dm.innerText = "05";
    ds.innerText = "00";

    contador.innerText = 0;
    detenerTiempo();
    comenzarTiempo = undefined;
 })

 detener.addEventListener('click', function () {
     detenerTiempo();
     comenzarTiempo = undefined;
     
 })

descanso.addEventListener('click', function() {
    if (referenciaDescanso === undefined) {
        referenciaDescanso = setInterval(descansar, 1000)
    }
})

//Boton de descansar.
function descansar() {
    //Contador de los 5 minutos de descanso.
    if (tm.innerText == 0 && ts.innerText == 0) {
        if (ds.innerText != 0) {
            ds.innerText--;
        } else if (ds.innerText == 0 && dm.innerText != 0) {
            ds.innerText = 59;
            dm.innerText--;
        }
    }

    if (dm.innerText == 0 && ds.innerText == 0) {
        document.getElementById('audio').play();
        var s = setInterval(function() { document.getElementById('audio').pause();}, 2000)
    }

    setTimeout(contador2, 4000)
}

function contador2() {
    //Contador de ciclos de trabajo.
    if (tm.innerText == 0 && ts.innerText == 0) {
        if (dm.innerText == 0 && ds.innerText == 0) {
            tm.innerText = 25;
            ts.innerText = "00";
            dm.innerText = "05";
            ds.innerText = "00";

            contador.innerText++;

        }
        
        if (contador.innerText != 0) {
            ciclos()
            detenerTiempo()
        }

     
    }
}

 //Cronometro.
 function temporizador() {
     //Contador de los 25minutos de trabajo.
     if (ts.innerText != 0) {
        ts.innerText--;
    } else if(tm.innerText != 0 && ts.innerText == 0) {
        ts.innerText = 59;
        tm.innerText--;
    }
    
    //Alarma
    if (tm.innerText == 0 && ts.innerText == 0) {
        document.getElementById('audio').play();
        var s = setInterval(function() { document.getElementById('audio').pause();}, 2000 );
        } 
    }


    

//Suma de ciclos.
 function ciclos() {
    clearInterval(comenzarTiempo);
    clearInterval(referenciaDescanso);
    detenerTiempo();
        
}

//Reiniciar cronometro.
function detenerTiempo() {
    clearInterval(comenzarTiempo);
    clearInterval(referenciaDescanso);
    comenzarTiempo = undefined;
}
 
