import Pedido from "./pedido.js"
import Tiempo from "./tiempo.js"
import Direccion from "./direccion.js";
import Fecha from "./fecha.js";
import Cliente from "./cliente.js";
import Producto from "./producto.js";
import Precio from "./precio.js";
class Main {

    constructor() {
        this.dir1 = new Direccion('belisario dominguez', '39A', 'no', 'centro', '28510', 'queseria', 'cuahutemoc')
        this.pedido1 = new Pedido(new Fecha(2000, 9, 24), new Tiempo(4, 50, "AM"), new Cliente('walle', this.dir1, '3123398831'));
        this.pedido2 = new Pedido(new Fecha(2000, 9, 24), new Tiempo(4, 50, "AM"), new Cliente('Astolfo WinterFlang', new Direccion('residencial chida', '39A', 'no', 'centro', '28510', 'queseria', 'cuahutemoc'), '312 - 330 - 20 - 79'));
        this.producto1 = new Producto("pizza de peperoni grande")
        this.producto2 = new Producto("pizza familiar hyper grande")
        this.cliente = new Cliente("Hola",this.dir1,'3123998831')
    }

    probarFecha() {
        console.log(`**FECHA**`)
        let fecha = new Fecha(20, 12, 2000)
        console.log(fecha.getAños())
        console.log(fecha.getMeses())
        console.log(fecha.getSemanas())
        console.log(fecha.getDias())
        console.log(fecha.getFecha())
        console.log(fecha.getDiaFecha())
    }

    probarTiempo() {
        console.log("**TIEMPO**")
        let tiempo = new Tiempo(1, 55, "pm")
        console.log(tiempo.getFormato24())
    }

    probarDireccion() {
        console.log("**DIRECCION**")
        let direccion = new Direccion("villa bonita", 571, "real Loma", 28984, "villa", "villa de Alvarez")
        console.log(direccion.getFormatoCorto())
        console.log(direccion.getFormatoLargo())
    }

    probarPrecio() {
        console.log("**PRECIO**")
        let precio = new Precio(125.50)
        console.log(precio.getPrecio())
    }

    probarProducto() {
        console.log("**PRODUCTO**")
        let producto = new Producto("pizza de peperoni grande", new Precio(250.50))
        console.log(producto.getDescripcion())
    }

    probarPedido() {
        console.log("**ELEMENTO PEDIDO**")
        let pedido = new Pedido(new Fecha(2015,5,20),new Tiempo(5,20,"AM"), this.cliente)
        console.log(pedido.getResumen())
    }

    ProbarPerfil() {
        console.log("**PERFIL**")
        
        console.log(this.cliente)
    }

    probarPedidoF() {
        console.log("**PedidoF**")
        
        console.log(this.pedido1.getCostoTotal())
        console.log(this.pedido1.getResumen())
        console.log(this.pedido1.getProductos())
        pedido.agregarElemento(this.producto)
        pedido.listarElementos()
    }

    probarRestaurante() {
        console.log("**RESTAURANTE**")
        console.log(this.pedido1.producto1)
        console.log(this.pedido2.producto2)
        this.producto1.registrarDoctores(this.pedido1)
        this.producto2.registrarDoctores(this.pedido2)
        this.hospital.listarDoctores()
    }

}

let app = new Main()
app.probarFecha()
app.probarTiempo()
app.probarDireccion()
app.probarPrecio()
app.probarProducto()
app.probarPedido()
app.ProbarPerfil()
app.probarPedidoF()
app.probarRestaurante()