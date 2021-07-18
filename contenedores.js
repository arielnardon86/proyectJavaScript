class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id;
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.stock = parseInt(stock);
    }
}
//Agrego productos a la seccion
const contenedores = [];
contenedores.push(new Producto("1", "contenedor grande", 300, 5));
contenedores.push(new Producto("2", "contenedor mediano", 250, 5));
contenedores.push(new Producto("3", "contenedor chico", 200, 5));
