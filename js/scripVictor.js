var flechaAtras=document.getElementById("flechaAtras");
var flechaAdelante=document.getElementById("flechaAdelante");
var imgenFondo=document.getElementById("fondo");
var titulosMenuNav=document.getElementById("menu");

flechaAtras.addEventListener("mouseover",agrandarFlechaAtras);
function agrandarFlechaAtras(){
    flechaAtras.style.width="11%";
    flechaAtras.style.marginLeft ="-1.5%";
    flechaAtras.style.marginRight="-1.5%";
    flechaAtras.style.cursor="pointer";
    imgenFondo.style.backgroundSize="105% 105%";
    imgenFondo.style.backgroundPosition="center";

}

flechaAdelante.addEventListener("mouseover",agrandarFlechaAdelante);
function agrandarFlechaAdelante(){
    flechaAdelante.style.width="11%";
    flechaAdelante.style.marginLeft ="-1.5%";
    flechaAdelante.style.marginRight="-1.5%";
    flechaAdelante.style.cursor="pointer";
    imgenFondo.style.backgroundSize="105% 105%";
    imgenFondo.style.backgroundPosition="center";

}

titulosMenuNav.addEventListener("mouseover",agrandarTituloNav);
function agrandarTituloNav(){
    titulosMenuNav.style.letterSpacing="3px";
    titulosMenuNav.style.marginLeft="13%";
    titulosMenuNav.style.marginRight="13%";
    titulosMenuNav.style.cursor="pointer";
    imgenFondo.style.backgroundSize="105% 105%";
}

flechaAtras.addEventListener("mouseout",regresarFlechaOriginal);
function regresarFlechaOriginal(){
  flechaAtras.style.width="8%";
  flechaAtras.style.marginLeft ="0%";
  flechaAtras.style.marginRight="0%";
  imgenFondo.style.backgroundSize="100% 100%";
  imgenFondo.style.backgroundPosition="center";
}

flechaAdelante.addEventListener("mouseout",regresarFlechaOriginalAdelante);
function regresarFlechaOriginalAdelante(){
    flechaAdelante.style.width="8%";
    flechaAdelante.style.marginLeft ="0%";
    flechaAdelante.style.marginRight="0%";
    imgenFondo.style.backgroundSize="100% 100%";
    imgenFondo.style.backgroundPosition="center";
  }

titulosMenuNav.addEventListener("mouseout",volverOriginalTituloNav);
function volverOriginalTituloNav(){
    titulosMenuNav.style.letterSpacing="0px";
    titulosMenuNav.style.marginLeft="15%";
    titulosMenuNav.style.marginRight="15%";
    imgenFondo.style.backgroundSize="100% 100%";
}

var images=['url("/imagenes/SalarUyuni10.jpg")','url("/imagenes/hotel01.jpg")','url("/imagenes/tours01.jpg")','url("/imagenes/contacto01.jpg")'];
var titulos=["Lugares Turísticos","Hoteles","Galeria","Contacto"];
var num = 0;

flechaAdelante.addEventListener("click",siguiente);
function siguiente() {
  num++;
  if(num >= images.length) {
    num = 0;
  }
  imgenFondo.style.backgroundImage= images[num];
  titulosMenuNav.innerText=titulos[num];
}

flechaAtras.addEventListener("click",anterior);
function anterior() {
  num--;
  if(num < 0) {
    num = images.length-1;
  }
  imgenFondo.style.backgroundImage= images[num];
  titulosMenuNav.innerText=titulos[num];
}

