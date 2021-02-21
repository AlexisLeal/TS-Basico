
/*
    ===== Código de TypeScript =====
*/
//Aqui IMPORTAMOS la interface 
import { Producto,calculaImpuestoSobreVenta } from "./06-desectructuracion-funcion";


const carritosCompras:Producto[]= [
    {
        descripcion:"Telefono1",
        precio:100
    },
    {
        descripcion:"Telefono2",
        precio:600
    },

];


const [total,isv] = calculaImpuestoSobreVenta(carritosCompras);

console.log("El total es :",total);
console.log("El impuesto sobre la venta es:",isv);

//CHECAR VIDEO 21 MINUTO 8