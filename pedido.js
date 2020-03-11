
export default class Pedido {
    constructor(fecha = new Fecha, hora = new Tiempo, cliente = new Cliente) {
        this._fecha = fecha
        this._hora = hora
        this._cliente = cliente
        this._elementos = new Array()
    }

    getResumen() {
        return `${this._fecha.getFecha()} ${this._hora.getFormato12()} - ${this._elementos.length} productos `
    }
    getCostoTotal() {
        return `El costo de las pizzas es luego`
    }
    getProductos() {
        return `El usted pidio ${this._elementos.length} productos`
    }
    getNumeroElementos() {
        return ``
    }
    agregarElemento(Pedido) {
        this._elementos.push(Pedido)
    }

    listarElementos() {
        this._elementos.forEach((Pedido, i) => {
            console.log(`${i + 1} ${Pedido.getDescripcion()}`);
        });
    }
}