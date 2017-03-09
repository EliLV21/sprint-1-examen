var estudiantes = [];



function obtenerListaEstudiantes(nombre, puntosTecnicos, puntosHSE) {
    // TO DO: Retornar la lista de estudiantes
    nombre: nombre;
    puntosTecnicos: puntosTecnicos;
    puntosHSE: puntosHSE;
    };

function agregarEstudiante() {
    // TO DO: Preguntar al usuario por el nombre, puntos técnicos y puntos de HSE de un estudiante
    // Hint: El estudiante debe ser agregado a la lista de estudiantes
    // TO DO: Retornar el estudiante recientemente creado
    var pregunta = ["¿Cual es el nombre de la alumna?", "¿Cuantos puntos tecnicos tiene?", "¿Cuantos puntos HSE tiene?"];
    var numPreguntas = pregunta.length;

    for(var i=0; i<numPreguntas; i++){
      var datos = prompt(pregunta[i]);
        estudiantes.push(datos);
      }

}

function mostrar(estudiante) {
    // TO DO: Completar el template para que muestre las propiedades correctas del estudiante
  var resultado = "";

  for (var i = 0; i<estudiantes; i++){
    resultado = string(estudiantes);
  }

    resultado += "<div class='row'>";
    resultado += "<div class='col m12'>";
    resultado += "<div class='card blue-grey darken-1'>";
    resultado += "<div class='card-content white-text'>";
    resultado += "<p><strong>Nombre:</strong> " + resultado.nombre + "</p>";
    resultado += "<p><strong>Puntos Técnicos:</strong> " + resultado.puntosTecnicos + "</p>";
    resultado += "<p><strong>Puntos HSE:</strong> " + resultado.puntosHSE + "</p>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    resultado += "</div>";
    return resultado;
}

function mostrarLista(estudiantes) {
    // TO DO: Iterar la lista del estudiantes para devolverlos en el formato que usa la función mostrar(estudiante)
    // Retornar el template de todos los estudiantes
    for (var i = 0; i<resultado; i++){
      return resultado;
    }
}

function buscar(nombre, estudiantes) {
    // TO DO: Buscar el nombre en la lista de estudiantes que se recibe por parámetros
    // Retornar el objeto del estudiante buscado
    // Nota: NO IMPORTA SI EL USUARIO ESCRIBE EL NOMBRE EN MAYÚSCULAS O MINÚSCULAS
    for(var i=0; i<numPreguntas; i++){
      var datos = prompt(pregunta[i])
        estudiantes.push(datos)
      }
}

function topTecnico(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje técnico de mayor a menor
   for (var i = 0; i<estudiante; i++);
}

function topHSE(estudiantes) {
    // TO DO: Retornar el arreglo de estudiantes ordenado por puntaje de HSE de mayor a menor

}
