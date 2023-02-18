let turnon = document.getElementById("turnon");
let turnoff = document.getElementById("turnoff");
let lamp = document.getElementById("lamp");

function lampadaestaquebrada() {
  return lamp.src.indexof("quebrada") > -1;
}

function acenderlampada() {
  lamp.src = "./img/ligada.jpg";
}
function apagarlampada() {
  lamp.src = "./img/desligada.jpg";
}
function lampadaquebrada() {
  lamp.src = "img/quebrada.jpg";
}

turnon.addEventListener("click", acenderlampada);
turnoff.addEventListener("click", apagarlampada);
lamp.addEventListener("mouseover", acenderlampada);
lamp.addEventListener("mouseleave", apagarlampada);
lamp.addEventListener("dblclick", lampadaquebrada);
