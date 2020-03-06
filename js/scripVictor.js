var flechaAtras = document.getElementById("flechaAtras");
var flechaAdelante = document.getElementById("flechaAdelante");
var imgenFondo = document.getElementById("fondo");
var titulosMenuNav = document.getElementById("menu");

flechaAtras.addEventListener("mouseover", agrandarFlechaAtras);
function agrandarFlechaAtras() {
  flechaAtras.style.width = "95%";
  flechaAtras.style.marginLeft = "-4.5%";
  flechaAtras.style.cursor = "pointer";
  imgenFondo.style.backgroundSize = "110% 110%";
  imgenFondo.style.backgroundPosition = "center";

}

flechaAdelante.addEventListener("mouseover", agrandarFlechaAdelante);
function agrandarFlechaAdelante() {
  flechaAdelante.style.width = "95%";
  flechaAdelante.style.marginRight = "-5.5%";
  flechaAdelante.style.cursor = "pointer";
  imgenFondo.style.backgroundSize = "110% 110%";
  imgenFondo.style.backgroundPosition = "center";
}

titulosMenuNav.addEventListener("mouseover", agrandarTituloNav);
function agrandarTituloNav() {
  titulosMenuNav.style.letterSpacing = "5px";
  titulosMenuNav.style.cursor = "pointer";
  imgenFondo.style.backgroundSize = "110% 110%";
  imgenFondo.style.backgroundPosition = "center";
}

flechaAtras.addEventListener("mouseout", regresarFlechaOriginal);
function regresarFlechaOriginal() {
  flechaAtras.style.width = "80%";
  flechaAtras.style.marginLeft = "0%";
  flechaAtras.style.marginRight = "0%";
  imgenFondo.style.backgroundSize = "100% 100%";
  imgenFondo.style.backgroundPosition = "center";
}

flechaAdelante.addEventListener("mouseout", regresarFlechaOriginalAdelante);
function regresarFlechaOriginalAdelante() {
  flechaAdelante.style.width = "80%";

  flechaAdelante.style.marginRight = "0%";
  imgenFondo.style.backgroundSize = "100% 100%";
  imgenFondo.style.backgroundPosition = "center";
}

titulosMenuNav.addEventListener("mouseout", volverOriginalTituloNav);
function volverOriginalTituloNav() {
  titulosMenuNav.style.letterSpacing = "0px";
  imgenFondo.style.backgroundSize = "100% 114%";
  imgenFondo.style.backgroundPosition = "center";
}

var images = ['url("/Tecnolog-aWeb1/imagenes/SalarUyuni10.jpg")', 'url("/Tecnolog-aWeb1/imagenes/hotel01.jpg")', 'url("/Tecnolog-aWeb1/imagenes/tours04.jpg")', 'url("/Tecnolog-aWeb1/imagenes/contacto01.jpg")'];
var titulos = ["Lugares Turísticos", "Hoteles", "Galería", "Contacto"];
var num = 0;

flechaAdelante.addEventListener("click", siguiente);
function siguiente() {
  num++;
  if (num >= images.length) {
    num = 0;
  }
  imgenFondo.style.backgroundImage = images[num];
  titulosMenuNav.innerText = titulos[num];

  cambiarColorNav();
}
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var contactos = document.getElementById("contactos");
var galeria = document.getElementById("galeria");
var hoteles = document.getElementById("hoteles");
var lugares = document.getElementById("lugares");
function cambiarColorNav() {
  if (num == 1) {
    titulosMenuNav.style.color = "white";
  }
  else {
    titulosMenuNav.style.color = "black";
  }
  switch (num) {
    case 0:
      uno.innerText = "01";
      dos.innerText = "";
      tres.innerText = "";
      cuatro.innerText = "";
      lugares.style.backgroundColor = "black";
      hoteles.style.backgroundColor = "white";
      galeria.style.backgroundColor = "white";
      contactos.style.backgroundColor = "white";
      break;
    case 1:
      uno.innerText = "";
      dos.innerText = "02";
      tres.innerText = "";
      cuatro.innerText = "";
      lugares.style.backgroundColor = "white";
      hoteles.style.backgroundColor = "black";
      galeria.style.backgroundColor = "white";
      contactos.style.backgroundColor = "white";
      break;
    case 2:
      uno.innerText = "";
      dos.innerText = "";
      tres.innerText = "03";
      cuatro.innerText = "";
      lugares.style.backgroundColor = "white";
      hoteles.style.backgroundColor = "white";
      galeria.style.backgroundColor = "black";
      contactos.style.backgroundColor = "white";
      break;
    case 3:
      uno.innerText = "";
      dos.innerText = "";
      tres.innerText = "";
      cuatro.innerText = "04";
      lugares.style.backgroundColor = "white";
      hoteles.style.backgroundColor = "white";
      galeria.style.backgroundColor = "white";
      contactos.style.backgroundColor = "black";
      break;
  }
}

flechaAtras.addEventListener("click", anterior);
function anterior() {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  imgenFondo.style.backgroundImage = images[num];
  titulosMenuNav.innerText = titulos[num];
  cambiarColorNav();
}

titulosMenuNav.addEventListener("click", linkear);
function linkear() {
  switch (num) {
    case 0:

      break;
    case 1:
      titulosMenuNav.href = "/Tecnolog-aWeb1/Tareas/Asignacion9/hoteles.html";
      break;
    case 2:
      titulosMenuNav.href = "/Tecnolog-aWeb1/Tareas/Asignacion5/galeria.html";
      break;
    case 3:
      titulosMenuNav.href = "/Tecnolog-aWeb1/Tareas/Asignacion7/contacto.html"
      break;
  }

}


