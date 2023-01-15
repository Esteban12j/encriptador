// Función para encriptar el texto
// Arreglo con las llaves de encriptación
const llaves = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat'
};

// Función para encriptar el texto
function encriptar(texto) {
  // Inicializamos el texto encriptado
  let textoEncriptado = '';

  // Recorremos cada caracter del texto
  for (let i = 0; i < texto.length; i++) {
    // Si el caracter está en el arreglo de llaves, usamos el código de encriptación
    if (llaves[texto[i]]) {
      textoEncriptado += llaves[texto[i]];
    }
    // Si el caracter no está en el arreglo de llaves, lo añadimos tal cual
    else {
      textoEncriptado += texto[i];
    }
  }

  // Devolvemos el texto encriptado
  return textoEncriptado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
  // Inicializamos el texto desencriptado
  let textoDesencriptado = '';

  // Recorremos cada caracter del texto
  for (let i = 0; i < texto.length; i++) {
    // Buscamos el caracter en el arreglo de llaves
    let caracterEncontrado = false;
    for (let j in llaves) {
      // Si encontramos el caracter, añadimos la letra correspondiente
      if (llaves[j] === texto.substr(i, llaves[j].length)) {
        textoDesencriptado += j;
        i += llaves[j].length - 1;
        caracterEncontrado = true;
        break;
      }
    }

    // Si no encontramos el caracter, lo añadimos tal cual
    if (!caracterEncontrado) {
      textoDesencriptado += texto[i];
    }
  }

  // Devolvemos el texto desencriptado
  return textoDesencriptado;
}



// Función para manejar el evento de click en el botón Encriptar/Desencriptar
function manejarEncriptarDesencriptar() {
  // Obtenemos el elemento textarea y el elemento select
  const textarea = document.querySelector('#texto-original');
  const select = document.querySelector('#encriptar-desencriptar');
  var textareaR = document.getElementById("texto-resultante");
 
  // Obtenemos el texto y la opción seleccionada
  const texto = textarea.value;
  const opcion = select.value;

  // Declaramos una variable para almacenar el resultado
  let resultado;

  // Si la opción es "encriptar", encriptamos el texto
  if (opcion === 'encriptar') {
    resultado = encriptar(texto);
  }
  // Si la opción es "desencriptar", desencriptamos el texto
  else {
    resultado = desencriptar(texto);
  }

  



  // Mostramos el resultado en el elemento p#texto-resultante
  document.querySelector("#texto-resultante").style.background = "white";
  document.querySelector('#texto-resultante').textContent = resultado;
}

// Función para copiar el texto encriptado/desencriptado al portapapeles
function copiarTexto() {
  // Creamos un elemento input temporal
  const input = document.createElement('input');

  // Asignamos el contenido del elemento p#texto-resultante como valor del elemento input
  input.value = document.querySelector('#texto-resultante').textContent;

  // Añadimos el elemento input al body para poder seleccionarlo
  document.body.appendChild(input);

  // Seleccionamos el contenido del elemento input y lo copiamos al portapapeles
  input.select();
  document.execCommand('copy');

  // Eliminamos el elemento input del body
  document.body.removeChild(input);

  // Mostramos un mensaje de éxito
  alert('Texto copiado al portapapeles');
}


// Agregamos un manejador de evento al botón Encriptar/Desencriptar
document.querySelector('#encriptar-desencriptar-btn').addEventListener('click', manejarEncriptarDesencriptar);

// Agregamos un manejador de evento al botón Copiar
document.querySelector('#copiar-resultado-btn').addEventListener('click', copiarTexto);
