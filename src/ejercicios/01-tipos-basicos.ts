/*
Esto eso pasa solo con typeScrip mas no en angular 
si declaro una variable en otro archivo llamada alexis y en este archivo declaro una llamada igual 
chocan por que todos los archivos ts, se convierte en un solo archoivo js
*/

//PRIMERO para levantar nuestro proyecto debemos poner el comando npm install en la raiz del proyecto
//Y para iniciarlo te vas a NPM SCRIPT y le picas donde dice start (O EN RAIZ EN CMD PONER NPM STAR)

//typescript de un archivo cuando lo copilamos pasa a un archivo js 
console.log('Hola Mundo!|||');

/*
    ===== Código de TypeScript =====
*/
//iniciar variables 
let nombre:string ="Alexis";
let puntosVida:number = 95;
let estaVivo:boolean = false;

//De esta forma le decimos que puede aceptar dos tipos de datos con el operador |
let puntosVida1:number|string = 95;
puntosVida1 = "Full"

console.log(nombre,puntosVida);