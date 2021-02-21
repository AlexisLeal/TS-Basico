interface Persona {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string;
}
 
interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}
 
// Extendemos la inteface Persona
interface SuperHeroe extends Persona {
    habilidades: string[];
    mostrarHabilidades: () => string;
}
 
const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    habilidades: [],
    mostrarDireccion() {
        const { nombre, direccion } = this;
        return `${nombre}, ${direccion.ciudad}, ${direccion.pais}`
    },
    mostrarHabilidades() {
        const { nombre, habilidades } = this;
        return `${nombre} tiene las siguientes habilidades ${habilidades.toString()}`
    }
};
 
const persona: Persona = {
    nombre: 'Mary Jane Watson',
    edad: 19,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        const { nombre, direccion } = this;
        return `${nombre}, ${direccion.ciudad}, ${direccion.pais}`
    },
}
 
const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
 
superHeroe.habilidades.push('Sentido arácnido');
const habilidadesHeroe = superHeroe.mostrarHabilidades();
console.log(habilidadesHeroe);
 
const direccionPersona = persona.mostrarDireccion();
console.log(direccionPersona);