const anibal = {
    Nombre: 'Anibal',
    Clase: 'Guerrero',
    Ataque: 9,
    sanación: 1,
    Salud: 22,
    ataca : function(merlin){
        merlin.Salud = merlin.Salud - anibal.Ataque;
    },
    cura : function(){
        anibal.Salud = anibal.Salud + anibal.sanación
    },
    informacion : function(){
        console.log('Nombre: '+ this.Nombre
                    + ' Clase: '+ this.Clase
                    + ' Ataque: '+ this.Ataque
                    + ' Sanacion: '+ this.sanación
                    + ' Salud :'+ this.Salud);
    }
};

const merlin = {
    Nombre: 'Merlin',
    Clase: 'Mago',
    Ataque: 5,
    sanación: 5,
    Salud: 20,
    ataca : function(anibal){
        anibal.Salud = anibal.Salud - merlin.Ataque;
    },
    cura : function(){
        merlin.Salud = merlin.Salud + merlin.sanación;
    },
    informacion : function(merlin){
        console.log('Nombre: '+ this.Nombre
                    + ' Clase: '+ this.Clase
                    + ' Ataque: '+ this.Ataque
                    + ' Sanacion: '+ this.sanación
                    + ' Salud :'+ this.Salud);
    }
};


anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);
merlin.ataca(anibal);

anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);
merlin.cura();

anibal.informacion();
merlin.informacion();

console.log('++++++++++++++++++++++++++++');

anibal.ataca(merlin);

anibal.informacion()
merlin.informacion();





