
/*
    ===== Código de TypeScript =====
*/
//cuando veamos <T> se trata de genericos realmente la T es un estandar, pero pueder una A o C o lo que sea 

//Un uso principal de los genericos es poder decir que tipo de dato o que informacion es la que va a retornar alguna funcion o que tipo de 
// dato va a obtenerse 

function queTipoSoy<T>(argumento:T){
    //aqui dice "quetipoSoy" es de tipo que estoy especificando (T) y el argumento va hacer de ese tipo 
    return argumento;
}


let soyString = queTipoSoy("Hola mundo");
//si pasamos el curso arriba es de tipo String 
let soyNumero = queTipoSoy(500);
let soyArreglo = queTipoSoy([1,2,3]);


//Aqui estamos seguro que la funcion retorno sea algo en un tipo en particular en este caso un numero pero podria ser un string o un Objeto
let soyExplicito = queTipoSoy<number>(452);
//----------------------------------------


//NO UTLIZAMOS GENERICOS ES POR EJEMPLO 
function queTipoSoy2(argumento){
    return argumento;
}
let soyString2 = queTipoSoy2("Hola mundo");
//SI pasamos el curso arriba de la variable  soyString2 es de tipo ANY muy diferente al ejemplo de arriba 



