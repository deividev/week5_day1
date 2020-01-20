var character = {
    x: 0,
    y: 0

};
let moves;

//Método que genera el grid de 10x10 y lo retorna.
function generateMap() {
    let grid = [];
    // TODO debes generar el array de 2D, rellenalo de 0
    for (let i = 0; i < 10; i++) {
        grid[i] = [0,0,0,0,0,0,0,0,0,0,];
        
    }
    //TODO Actualiza el array llamando al método generateObstacles para poner obstaculos aleatorios en el grid
    grid = generateObstacles(grid)
    
    return grid;
}

//Función que genera los obstaculos aleatoriamente, recibe el array y lo devuelve editado con valor 1 donde
// exista un obstaculo.
function generateObstacles(grid) {
    // Puedes generar la aleatoriedad con Math.floor(Math.random() * 5) + 1, este método devuelve un entero del 51 al 5,
    // podemos por ejemplo, asignar valor 1 en las celdas del grid en el que math.random devuelva menos de 2. 40% posibilidades.
   
    for (let i = 0; i < grid.length; i++) {
        let obstaculos = grid[i];
        let random = Math.floor(Math.random() * 5) + 1;
        if(random < 2){
            obstaculos[i] = 1;
            console.log(obstaculos);
        }
    }
   
    console.log(grid);
    return grid;
}



 //Función que pinta el mapa por consola y al personaje, comprobando también si el personaje a conseguido escapar.
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
    moves = prompt('Introduce tus movimientos');
}
// Funcion que comprueba la cadena de instrucciones y en función de si es N-S-E-O llama a los métodos que realizan
// el movimiento del personaje
function checkInstructions() {
    switch (moves){
        case 'N':
            moveNorth();
            break;
        case 'S':
            moveSouth();
            break;
        case 'E':
            moveEast();
            break;
        case 'O':
            moveWest();
            break;
        default:
            
    }    

    // Al finalizar todas las llamadas, debe pintar el mapa de nuevo para ver la última posición del personaje
    printMap(map, character);
}

// Función que mueve al personaje hacia el norte.
function moveNorth() {
    let YcordNegative  = character.position.y - 1;
    return checkObstacle(character.position.x, YcordNegative);
}
// Función que mueve al personaje hacia el sur
function moveSouth() {
    let YcordPlus =  character.position.y + 1;
    return checkObstacle(character.position.x, YcordPlus);
}
// Función que mueve al character hacia el este
function moveEast() {
    let XcordPlus =  character.position.x + 1;
    return checkObstacle(character.position.x, XcordPlus);
}
//Función que mueve el character hacia el oeste
function moveWest() {
    let XcordNegative =  character.position.x - 1;
    return checkObstacle(character.position.x, XcordNegative);
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
let map = generateMap();
printMap(map, character);
