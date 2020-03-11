
export default class restaurante{

    constructor(nombre,telefono,direccion = new Direccion,producto = new Producto, Pedido = new Pedido){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.producto = producto
        this.Pedido = Pedido
    }

    registrarProductos(producto){
        this.producto.push(producto)
    }

    listarProdusctos(){
        this.listarProducto.forEch (Producto => {
            console.log(`${i +1 }${Producto.getDescripcion()}`);
        });
    }
    
    registrarPedido(pedidoF){
        this.pedidoF.push(pedidoF)
    }

    listarPedido(){
        this.listarPedidoF.forEch (PedidoF => {
            console.log(`${i +1 }${PedidoF.getProductos()}`);
        });
    }
}