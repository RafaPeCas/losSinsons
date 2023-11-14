
function cambiar() {

    if (onOff.classList.contains('off')) {
        onOff.classList.remove('off');
        onOff.classList.add('on');
        derecha.classList.remove("oculto");
        izquierda.classList.remove("oculto");
        filtro.classList.remove("oculto");
    } else {
        onOff.classList.remove('on');
        onOff.classList.add('off');
        derecha.classList.add("oculto");
        izquierda.classList.add("oculto");
        filtro.classList.add("oculto");
    }

    if(tv.classList.contains("oculto")){
        tv.classList.remove("oculto");
    }else{
        tv.classList.add("oculto")
    }

};

let i=0;
function canales(gax){
    let imagenes = ["img/bort.gif", "img/busto.gif", "img/guga.gif", "img/homer.gif", "img/venus.gif"];
    i+=gax;
    if (i>imagenes.length-1) i=0;
    if (i<0) i= imagenes.length-1;
    console.log(i+" Va a actuar")
    tv.src= imagenes[i];

}