//DECLARACION DE VARIABLES
    //Tomara de aqui los caracteres aleatorios
const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789"; 

    //Guarda la palabra como un arreglo para poder insertar/quitar los caracteres por su posicion
var resultadoCifrar = []; 
var resultadoDescifrar = [];

    //Se usa para guardar el caracter seleccionado aleatoriamente
var caracter = 0; 

    //Guardara el resultado de cada procedimiento como cadena de txt para imprimirlo despues 
var cifrado = "";
var descifrado = "";

//FUNCIONES DE BOTONES
function cifrar() {
    //Captura lo que se encuentre en el campo de txt del HTML con el id 'campoTexto'
    var texto = document.getElementById(`campoTexto`).value;
    
    //Pasa el txt a minusculas (PODRIA ELIMINARSE POR FUNCION filtrarEntrada)
    texto = texto.toLowerCase()
    var long = 0;
    
    //De acuerdo a la cantidad de caracteres ingresados hara el ciclo el doble
    for (let i = 0; i < (texto.length * 2); i++) {
        
        //Trae un caracter de la const
        caracter = Math.floor(Math.random()*35);
        
        //En cada posicion par insertara el caracter en el arreglo y luego insertara la letra que digitó el usuario
        if (i % 2 == 0) {
            resultadoCifrar.push(caracteres[caracter])
        } else {
            resultadoCifrar.push(texto[long])
            long += 1;
        }
    }

    //Convierte el arreglo en string
    for (let j = 0; j < resultadoCifrar.length; j++) {
        cifrado += resultadoCifrar[j]
    }

    //Limpia el campo de texto
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