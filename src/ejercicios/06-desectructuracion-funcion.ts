
/*
    ===== Código de TypeScript =====
*/

//El export (EXPORTAR) nos ayuda a que podramos consumir esta interface desde cualquier archivo externo, esto se va a ver mejor reflajado en angular
export interface Producto{
    descripcion:string,
    precio:number,
}

const telefono:Producto={
    descripcion:"Iphone 11",
    precio:700,
}

//creo un objecto
const tableta:Producto={
    descripcion:"Ipad Air",
    precio:400
}

export function calculaImpuestoSobreVenta(productos:Producto[]):[number,number]{
    let total = 0;

   /* productos.forEach((producto)=>{
        total += producto.precio
    })
    */
    //Aqui hacemos desestructuracion de argumentos
    productos.forEach(({precio})=>{
        total += precio
    })

    return [total,total*0.15];
}

const articulos:Producto[] = [telefono,tableta]; 


const impuestoSobreVenta = calculaImpuestoSobreVenta(articulos);

console.log("El impuesto sobre la venta es:",impuestoSobreVenta);

//Hacemos desectructuracion 
const [total,isv] = impuestoSobreVenta;
console.log("El total es :",total);
console.log("El impuesto sobre la venta es:",isv);