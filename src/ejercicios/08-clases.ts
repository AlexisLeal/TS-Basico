
/*
    ===== Código de TypeScript =====
*/

class PersonaNormal{


    constructor(
        public nombre:string,
        public direccion:string
    ) {}
}



class Hereo extends PersonaNormal{
     //Esto es la forma clasica pero no la mas eficiente 
    /*
    alterEgo:string;
    edad:number;
    nombreReal:string
*/
   
    /*
    constructor(alterEgo:string,edad:number,nombreReal:string){
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;

    }
    */
    //forma mas eficiente 

    constructor(
        public alterEgo:string,
        public edad:number,
        public nombreReal?:string
        ){
            //hereramos el constructor padre
            super(nombreReal,'nuevo york, USA');
        }
}

const ironman = new Hereo("Hola",25,"Alexis");

console.log(ironman);

