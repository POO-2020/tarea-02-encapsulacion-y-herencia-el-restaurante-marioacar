import Producto from './producto.js';
import Precio from './precio.js';

export default class ElementoPedido {
  /**
   *
   * @param {Producto} producto Producto que se va a comprar
   * @param {number} cantidad Cantidad del producto que se va a comprar
   */
  constructor(cantidad, producto) {
    this._cantidad = cantidad;
    this._producto = producto;
  }

  getDescripcion() {
    let costoTotal = new Precio(this.cantidad * this._producto.precio.valor);
    return `${this.cantidad} x ${
      this._producto.nombre
    } ${costoTotal.getPrecio()}`;
  }
}
