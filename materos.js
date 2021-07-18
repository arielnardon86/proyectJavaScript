const listadoProductos = [{nombre: "BOLSO MATERO", precio: 600, id:1, stock: 20,},
{nombre: "KIT MATERO", precio: 1000, id:2, stock: 20,},
{nombre: "SET MATERO", precio: 500, id:3, stock: 20,},
]

class ProductoAñadido {
    constructor(producto, cantidad) {
        this.nombre = producto.nombre;
        this.precio = producto.precio;
        this.id = producto.id;
        this.cantidad = cantidad;
        this.subtotal = producto.precio * cantidad
    }   
}

let productoIngresado;
let cantidadIngresada;
let productoSeleccionado;
let elegirNuevoProducto;
const carritoCompras = [];

procesoCompleto()
while(elegirNuevoProducto == "SI") {
    procesoCompleto()
}

console.log(carritoCompras)
verCarrito()

function procesoCompleto () {
    elegirProducto()
    const disponibilidad = verDisponibilidadProducto(productoIngresado, listadoProductos, cantidadIngresada)
    if(disponibilidad) {
    
       let agregar = prompt("¿Desea agregar el producto al carrito? SI / NO")
       if (agregar.toUpperCase() == "SI") {    
           let item = new ProductoAñadido (productoSeleccionado, cantidadIngresada)
           agregarItem(item)
           elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
        
       } else {
           elegirNuevoProducto = prompt("¿Quiere seleccionar otro producto? SI / NO")
       } 
    } else {
        console.log("Disculpa el producto elegido no esta disponible")
    }

}

function elegirProducto() {
    do{
        productoIngresado = prompt("Elige un producto: BOLSO MATERO, KIT MATERO o SET MATERO");
        cantidadIngresada = parseInt(prompt("Ingresa la cantidad a comprar"))
        
     } while(productoIngresado == "" || productoIngresado == null || !isNaN(productoIngresado) )
}


function verDisponibilidadProducto (nombreProducto, lista, cantidad) {
    productoSeleccionado = lista.find((p) => p.nombre == nombreProducto.toUpperCase()) 
    let stock = verificarStock(productoSeleccionado.stock, cantidad)
    
    if (productoSeleccionado && stock) {
        return true
    } else if (!productoSeleccionado) {
        alert("El producto seleccionado no existe")
    } else if (!stock) {
        alert("El producto " + nombreProducto + " no cuenta con disponibilidad")

    }
}

function verificarStock(stockProducto, cantidad){
    if (stockProducto >= cantidad){
        return true
    } else {
        return false
    }
}


function agregarItem(itemAagregar) {
    carritoCompras.push(itemAagregar)
}

function verCarrito() {
    for (let i = 0 ; i < carritoCompras.length; i++){
        console.log("Producto: " + carritoCompras[i].nombre + ". Cantidad: " + carritoCompras[i].cantidad)
    }
    let totalCarrito = carritoCompras.reduce((currentTotal, producto) => {
        return producto.subtotal + currentTotal;
      }, 0);
      alert("El total de tu compra es: " + "$" + totalCarrito)
}