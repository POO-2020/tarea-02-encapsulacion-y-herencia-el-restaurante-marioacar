import Producto from "producto.js"
export default class ElementoPedido{

    constructor(Producto = new Producto, cantidad){
        this._Producto = Producto
        this._cantidad = cantidad
    }

    getDescripcion(){
        return `${this._cantidad} x ${this._Producto.getDescripcion()}`
    }
}