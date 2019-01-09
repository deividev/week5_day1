var character = {

};
var moves;

//Método que genera el grid de 10x10 y lo retorna.
function generateMap() {
    var grid = [];
    // TODO debes generar el array de 2D, rellenalo de 0

    //TODO Actualiza el array llamando al método generateObstacles para poner obstaculos aleatorios en el grid
    grid = generateObstacles(grid)
    return grid;
}

//Función que genera los obstaculos aleatoriamente, recibe el array y lo devuelve editado con valor 1 donde
// exista un obstaculo.
function generateObstacles(grid) {
    // Puedes generar la aleatoriedad con Math.floor(Math.random() * 5) + 1, este método devuelve un entero del 51 al 5,
    // podemos por ejemplo, asignar valor 1 en las celdas del grid en el que math.random devuelva menos de 2. 40% posibilidades.

    return grid;
}



// Función que pinta el mapa por consola y al personaje, comprobando también si el personaje a conseguido escapar.
function printMap(map, pj, prev) {
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            if(map[i][j] === 'H') {
                map[i][j] = 0;
            }
        }
    }
    var row = pj.position.x;
    var col = pj.position.y;
    console.log('Posicion del personaje -> ' + 'x: ' + row + ' y: ' + col);
    if (map[col][row] === 'S') {
        alert('Felicidades, has escapado!!');
    }
    map[col][row] = 'H';
    map[0][0] = 'S';
    var arrText = '';
    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[i].length; j++) {
            arrText+=map[i][j]+'  ';
        }
        console.log(arrText);
        arrText='';
    }
}
// Función que pide al usuario mediante un prompt que introduzca una secuencia de movimientos y dicha secuencia
// Es almacenada en la variable movimientos, definida al principio del fichero.
function setInstructions() {

}
// Funcion que comprueba la cadena de instrucciones y en función de si es N-S-E-O llama a los métodos que realizan
// el movimiento del personaje
function checkInstructions() {


    // Al finalizar todas las llamadas, debe pintar el mapa de nuevo para ver la última posición del personaje
    printMap(map, personaje);
}

// Función que mueve al personaje hacia el norte.
function moveNorth() {
    personaje.position.y = personaje.position.y - 1;
    return checkObstacle(personaje.position.x, personaje.position.y);
}
// Función que mueve al personaje hacia el sur
function moveSouth() {

}
// Función que mueve al personaje hacia el este
function moveEast() {

}
//Función que mueve el personaje hacia el oeste
function moveWest() {

}
// Función que comprueba, dadas las coordenadas del personaje, si existe un obstaculo (valor 1) en esa celda del array

function checkObstacle(x, y) {
    return map[y][x] === 1;
}

// El boton dar instrucciones pide una secuencia de comandos a ejecutar.
// La secuencia se almacena en la variable movimientos.
// Al darle al boton comprobar instrucciones, se comprobaran los movimientos realizados por el personaje.

console.log('Consigue que el personaje llegue a la salida!');
console.log('Introduce la secuencia de movimientos para llegar a la casilla S');
console.log('Los movimientos posibles son: N, S, E y O');
printMap(map, character);
var map = generateMap();