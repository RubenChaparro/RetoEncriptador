const texto = document.querySelector(".textArea");
const textoMensaje = document.querySelector(".areaDesencriptado");

function botonEncriptar() {

    const textoEncriptado = encriptar(texto.value);
    textoMensaje.value = textoEncriptado;
    texto.value = "";

    document.querySelector(".imagenTextoDesencriptado").style.display = "none";
    document.querySelector(".sinMensaje").style.display = "none";
    textoMensaje.style.height = "700px"
    document.querySelector(".copiar").style.display = "block";
}


function encriptar(textoEncriptar) {

    textoEncriptar = textoEncriptar.replaceAll('é','e');
    textoEncriptar = textoEncriptar.replaceAll('ó','o');
    textoEncriptar = textoEncriptar.replaceAll('í','i');
    textoEncriptar = textoEncriptar.replaceAll('á','a');
    textoEncriptar = textoEncriptar.replaceAll('ú','u');

    textoEncriptar = textoEncriptar.replaceAll('e','enter');
    textoEncriptar = textoEncriptar.replaceAll('o','ober');
    textoEncriptar = textoEncriptar.replaceAll('i','imes');
    textoEncriptar = textoEncriptar.replaceAll('a','ai');
    textoEncriptar = textoEncriptar.replaceAll('u','ufat');
    
    return textoEncriptar;
    
}

function botonDesencriptar() {

const textoDesencriptado = desencriptar(texto.value);
textoMensaje.value = textoDesencriptado;
texto.value = "";

document.querySelector(".imagenTextoDesencriptado").style.display = "none";
document.querySelector(".sinMensaje").style.display = "none";
textoMensaje.style.height = "700px"
document.querySelector(".copiar").style.display = "block";
}

function desencriptar(textoDesencriptar) {

textoDesencriptar = textoDesencriptar.replaceAll('enter','e');
textoDesencriptar = textoDesencriptar.replaceAll('ober','o');
textoDesencriptar = textoDesencriptar.replaceAll('imes','i');
textoDesencriptar = textoDesencriptar.replaceAll('ai','a');
textoDesencriptar = textoDesencriptar.replaceAll('ufat','u');

return textoDesencriptar;

}

function copiar() {
    textoMensaje.select();
    document.execCommand("copy")
}








