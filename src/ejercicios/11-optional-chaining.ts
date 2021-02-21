/*
    ===== Código de TypeScript =====
*/


interface Pasajero {
  nombre: string;
  hijos?: string[]
}

const pasajero1: Pasajero = {
  nombre: 'Fernando'
}

const pasajero2: Pasajero = {
  nombre: 'Melissa',
  hijos: ['Natalia','Gabriel']
}


function imprimeHijos( pasajero: Pasajero ): void {

  //aqui le hacemos como un if 
  // el ? funciona como el operado securiity de swift 
  const cuantosHijos = pasajero.hijos?.length || 0;
  
  console.log( cuantosHijos );

}


imprimeHijos( pasajero1 );