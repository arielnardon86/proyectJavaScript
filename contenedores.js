class Producto {
    constructor(nombre, precio, stock) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}
//Agrego productos a la seccion
const contenedores = [];
contenedores.push(new Producto("contenedor grande", 300, 5));
contenedores.push(new Producto("contenedor mediano", 250, 5));
contenedores.push(new Producto("contenedor chico", 200, 5));
