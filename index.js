


let placarc = document.getElementById("casa");
let placarv = document.getElementById("visita");

function trespc() {
    placarc.textContent = parseInt(placarc.textContent) + 3;
}

function doispc() {
    placarc.textContent = parseInt(placarc.textContent) + 2;
}

function umpc() {
    placarc.textContent = parseInt(placarc.textContent) + 1;
}

function trespv() {
    placarv.textContent = parseInt(placarv.textContent) + 3;
}

function doispv() {
    placarv.textContent = parseInt(placarv.textContent) + 2;
}

function umpv() {
    placarv.textContent = parseInt(placarv.textContent) + 1;
}
function reset() {
    document.getElementById("casa").textContent = "0";
    document.getElementById("visita").textContent = "0";
}

