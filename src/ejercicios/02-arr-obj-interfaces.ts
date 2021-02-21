//Arreglos

let habilidades:string[] = [];
//Para que el arreglo acepte dos tipos diferentes pero si queremos que acepte cualquier le ponemos any
//let habilidades:string[]|number = [];
//Para que acepte arriba de dos tipos diferentes
//let habilidades:(string|boolean|number)[]= [];
//Agregar un elemento a  un arreglo
habilidades.push("Leal");

//Objetos 

//Para trabajar con objetos y tener un control de los mismo vamos a trabajar con las interfaces
// una interface no es mas una serie de llaves para aseguranos que un codigo sea como nosotros queramos o que un obketo luzca 
// como nosotros queramos
interface Personaje{
    nombre:string;
    puntosVida:number;
    habilidades:string[];
    //Le decimos que pueblo natal es opcional con el signo ?
    puebloNatal?:string;

}
//Las interfaces van con la primera letra en mayuscalas y son exclusivas de typeScript 


//declaramos un objeto personaje de tipo Personaje 
const personaje:Personaje = {
    nombre: 'Alexis',
    puntosVida:100,
    habilidades:['bash','counter','healing']
}

personaje.puebloNatal= "Pueblo paleta";

console.table(personaje);