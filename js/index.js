const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
var resultadoCifrar = [];
var resultadoDescifrar = [];
var caracter = 0;
var cifrado = "";
var descifrado = "";

function cifrar() {
    var texto = document.getElementById(`campoTexto`).value;
    texto = texto.toLowerCase()
    var long = 0;
    
    
    for (let i = 0; i < (texto.length * 2); i++) {
        
        caracter = Math.floor(Math.random()*35);
        
        if (i % 2 == 0) {
            resultadoCifrar.push(caracteres[caracter])
        } else {
            resultadoCifrar.push(texto[long])
            long += 1;
        }
    }
    

    for (let j = 0; j < resultadoCifrar.length; j++) {
        cifrado += resultadoCifrar[j]
    }

    ele = document.querySelector('label');
    ele.innerHTML = (cifrado);

    document.querySelector('#campoTexto').value = '';
    ocultarImagen();
}

function descifrar() {
    var texto = document.getElementById(`campoTexto`).value;

    for (let i = 0; i < texto.length; i++) {
        if (i % 2 == 1) {
            resultadoDescifrar.push(resultadoCifrar[i]);
        }
    }

    for (let j = 0; j < resultadoDescifrar.length; j++) {
        descifrado += resultadoDescifrar[j]
    }

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