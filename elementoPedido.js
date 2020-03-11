import Producto from "producto.js"
export default class ElementoPedido{

    constructor(Producto = new Producto, cantidad){
        this.Producto = Producto
        this.cantidad = cantidad
    }

    getDescripcion(){
        return `${this.cantidad} x ${this.Producto.getDescripcion()}`
    }
}