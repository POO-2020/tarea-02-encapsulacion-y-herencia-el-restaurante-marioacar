
export default class Pedido {
    constructor(fecha = new Fecha, hora = new Tiempo, cliente = new Cliente) {
        this.fecha = fecha
        this.hora = hora
        this.cliente = cliente
        this.elementos = new Array()
    }

    getResumen() {
        return `${this.fecha.getFecha()} ${this.hora.getFormato12()} - ${this.elementos.length} productos `
    }
    getCostoTotal() {
        return `El costo de las pizzas es luego`
    }
    getProductos() {
        return `El usted pidio ${this.elementos.length} productos`
    }
    getNumeroElementos() {
        return ``
    }
    agregarElemento(Pedido) {
        this.elementos.push(Pedido)
    }

    listarElementos() {
        this.elementos.forEach((Pedido, i) => {
            console.log(`${i + 1} ${Pedido.getDescripcion()}`);
        });
    }
}