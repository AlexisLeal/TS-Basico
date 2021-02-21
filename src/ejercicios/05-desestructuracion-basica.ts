
/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen:number;
    segundo:number;
    cancion:string;
    detalles:Detalles;
}

interface Detalles{
    autor:string;
    anio:number;
}

const reproductor:Reproductor = {
    volumen:90,
    segundo:24,
    cancion:"Parasi city",
    detalles:{
        anio:1995,
        autor:"Guns N Roses"
    }
}


//Desestrutacion

//Esta es la forma clasica 
console.log("El volumnes actual es:",reproductor.volumen);

console.log("El segundo actual es:",reproductor.segundo);

console.log("La cancion actual es:",reproductor.cancion);

console.log("El autor es:",reproductor.detalles.autor);

//Una forma mas simple 

//Lo que digo es toma el objeto reproductor y toma las propiedades que voy a definir adentro de los {}
const {volumen,segundo,cancion,detalles} = reproductor;
//Estas propiedades se van a definir como si fueras constantes 
//Aqui hacemos una destrutarion en otro detruraion 
const {autor:nuevoNombre} = detalles

//Nota si queremos cambiar el nombre de una propiedad seria const {autor:nuevoNombre} = detalles y asi se le cambia el nombre
//esto sirve en dado caso hemos declarado una variable con con el mismo nombre en este caso autor


console.log("El volumnes actual es:",volumen);

console.log("El segundo actual es:",segundo);

console.log("La cancion actual es:",cancion);

console.log("El autor es:",nuevoNombre);

//DESESTRURACION DE ARREGLOS

const dbz:string[] = ['Goku','Vegeta','Trunks'];

console.log('Persona 1:',dbz[0]);
console.log('Persona 2:',dbz[1]);
console.log('Persona 3:',dbz[2]);

//nota para un objeto son {} y para un arreglo son []

const [Goku1,Vegeta1,Trunks1] = dbz;

//Digamos que solo queremos la posicion numero 3 entoces ponemos una coma y un espacio en blaco como se muestra a continueacion
//const [ , ,Trunks1] = dbz; checar mas abajo

console.log('Persona 1:',Goku1);
console.log('Persona 2:',Vegeta1);
console.log('Persona 3:',Trunks1);
//En las desesturarion de arreglos no importe el nombre como en la de objectos si no lo importante es la posicion 

//También se puede destructurar array's para evitar el "," por datos que no quieres, ejemplo:
let nombres:string[] = ["David", "Erick", "Jean", "Jose"];

//Si quieres obtener cualquier valor del array, tener en cuenta que se hace mediante el índice que se encuentra el valor a destructurar (En este caso sacaré el valor de "Jean" que se encuentra en el índice 2)

const { 2 : amigoJean } = nombres;

//Espero les sirva. Saludos 😁😁

console.log(amigoJean);

