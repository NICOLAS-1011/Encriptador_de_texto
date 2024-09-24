// Definir clave y datos
const clave = 'proyecto_final:)';

// Usar las funciones de cifrado y descifrado

function encryptText(plaintext, secretKey) {
    return CryptoJS.AES.encrypt(plaintext, secretKey).toString();
  }
  
  // Función para descifrar
  function decryptText(ciphertext, secretKey) {
    return CryptoJS.AES.decrypt(ciphertext, secretKey).toString(CryptoJS.enc.Utf8);
  }

//Guardara el resultado de cada procedimiento como cadena de txt para imprimirlo despues
var cifrado = "";
var descifrado = "";

//FUNCIONES DE BOTONES
function cifrar() {
    //Captura lo que se encuentre en el campo de txt del HTML con el id 'campoTexto'
    var texto = document.getElementById(`campoTexto`).value;
    
    cifrado = encryptText(texto, clave);
    console.log('Mensaje cifrado:', cifrado);


    //Limpia el campo de texto
    ele = document.querySelector('label');
    ele.innerHTML = (cifrado);
    
    document.querySelector('#campoTexto').value = '';
    ocultarImagen();
}


function descifrar() {
    var texto = document.getElementById(`campoTexto`).value;

    descifrado = decryptText(cifrado, clave);
    console.log('Mensaje descifrado:', descifrado);

    ele = document.querySelector('label');
    ele.innerHTML = (descifrado);
    document.querySelector('#campoTexto').value = '';
    ocultarImagen();
}

function filtrarEntrada(input) {
    const valorFiltrado = input.value.replace(/[^a-z0-9 ]/g, '');
    input.value = valorFiltrado;
}

function ocultarImagen() {
    var imagen = document.getElementById("Mune");
    imagen.style.display = "none";
}

function copiarTexto() {
    var texto = document.getElementById("resultado").innerText;

    navigator.clipboard.writeText(texto).then(function() {
        alert("Texto copiado al portapapeles: " + texto);
    }).catch(function(error) {
        console.error("Error al copiar el texto: ", error);
    });

}