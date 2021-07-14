class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = parseInt(cantidad);
    }

    

    comprarProducto() {
        if 
            (this.nombre === "bolso matero") {
                alert("Usted compró " + producto1.cantidad + " " + producto1.nombre + " y el costo final es de: " + "$" + parseInt(producto1.cantidad * producto1.precio))
        } else if
            (this.nombre === "kit matero") {
                alert("Usted compró " + producto2.cantidad + " " + producto2.nombre + " y el costo final es de: " + "$" + parseInt(producto2.cantidad * producto2.precio))
        } else if 
            (this.nombre === "set matero") {
                alert("Usted compró " + producto3.cantidad + " " + producto3.nombre + " y el costo final es de: " + "$" + parseInt(producto3.cantidad * producto3.precio))
        } else {
                alert("Producto no encontrado")
        }
    }
}




let producto1 = new Producto({ nombre: "bolso matero", precio: 600, cantidad: ""})
producto1.nombre = prompt("¿Qué producto qurés comprar")
producto1.precio = 600
producto1.cantidad = prompt("Ingresa la cantidad a comprar")


let producto2 = new Producto({ nombre: "kit matero", precio: 1000, cantidad: ""})
producto2.nombre = prompt("¿Qué producto qurés comprar")
producto2.precio = 1000
producto2.cantidad = prompt("Ingresa la cantidad a comprar")


let producto3 = new Producto({ nombre: "set matero", precio: 500, cantidad: ""})
producto3.nombre = prompt("¿Qué producto qurés comprar")
producto3.precio = 500
producto3.cantidad = prompt("Ingresa la cantidad a comprar")

console.log();(producto1.comprarProducto());
console.log();(producto2.comprarProducto());
console.log();(producto3.comprarProducto());