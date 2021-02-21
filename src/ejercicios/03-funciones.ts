
//funciones

function sumar(a:number,b:number):number{
    return a + b;
}

const sumarFlecha =(a:number,b:number):number =>{
    return a +b;
}

//Los argumentos opcionales tiene el ? y donde dice base tiene un valor defecto 
// Primero van los obligatorios luegos los opciones y al final los por defecto 
//No pues ir primero un opcional y despues un obligatorio marca error 
function multiplicar(numero:number,otronumero?:number,base:number=2):number{
    return numero*base;
}

//Resultado igual a 10 por que la base tiene un valor por defecto 
//const resultado = multiplicar(2,5)

//Resultado igual a 20 por que se cambio el valor por defecto de base a 10
const resultado = multiplicar(2,5,10)

console.log(resultado)

//Funciones con objetos 

interface PersonajeCOD{
    nombre:string;
    puntosVida:number;
    //Vamos a definir una funcion en una interface
    mostrarPuntosVida:() =>void;
    //Ahora que acepte parametros
    // mostrarPuntosVida:(a:number) =>void;
    //o que se sea opcional 
    //mostrarPuntosVida?:() =>void;
    
}


//Creatmos  una funcion que acepte un objeto
function curar(personaje:PersonajeCOD,curarx):void{

    personaje.puntosVida += curarx;

    console.log(personaje);
}

//Creamos un objeto
const nuevoPersonaje: PersonajeCOD = {

    nombre:"Alexis",
    puntosVida:75,
    mostrarPuntosVida(){
        console.log("Los puntos de vida son",this.puntosVida);
    }
}
curar(nuevoPersonaje,10);

console.table(nuevoPersonaje);

nuevoPersonaje.mostrarPuntosVida();
