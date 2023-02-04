function limpiarTexto (texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function encriptar () {
    let textoDescencriptado = document.getElementById("textoDescencriptado").value.toLowerCase();

    textoDescencriptado = limpiarTexto(textoDescencriptado);

    textoDescencriptado = textoDescencriptado.replace(/a/img, "ai");
    textoDescencriptado = textoDescencriptado.replace(/e/img, "enter");
    textoDescencriptado = textoDescencriptado.replace(/i/img, "imes");
    textoDescencriptado = textoDescencriptado.replace(/o/img, "ober");
    textoDescencriptado = textoDescencriptado.replace(/u/img, "ufat");

    document.getElementById("textoEncriptado").innerHTML = textoDescencriptado;
    document.querySelector(".textarea-encriptado").style.backgroundImage = "none";
}

function descencriptar () {
    let textoEncriptado = document.getElementById("textoDescencriptado").value.toLowerCase();

    textoEncriptado = textoEncriptado.replace(/enter/img, "e");
    textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoEncriptado").innerHTML = textoEncriptado;
}

function copiar(){
    let textoCopiar = document.querySelector("#textoEncriptado");
    textoCopiar.select();
    textoCopiar.setSelectionRange(0, 99999);
    document.execCommand("copy");
}

function ocultarImagen() {
    document.querySelector(".textarea-encriptado").style.backgroundImage = "none";
}

const btnEncriptar = document.querySelector("#botonEncriptar");
btnEncriptar.onclick = encriptar;

const btnDescencriptar = document.querySelector("#botonDescencriptar");
btnDescencriptar.onclick = descencriptar;

const btnCopiar = document.querySelector("#botonCopiar");
btnCopiar.onclick = copiar;

const textarea1 = document.querySelector(".textoDescencriptado");
        textarea1.addEventListener("keyup", e =>{
        textarea1.style.height = "auto";
        let scHeight = e.target.scrollHeight;
        textarea1.style.height = `${scHeight}px`;
        });