
export default class restaurante{

    constructor(nombre,telefono,direccion = new Direccion,producto = new Producto, Pedido = new Pedido){
        this._nombre = nombre
        this._telefono = telefono
        this._direccion = direccion
        this._producto = producto
        this._Pedido = Pedido
    }

    registrarProductos(producto){
        this._producto.push(producto)
    }

    listarProdusctos(){
        this._listarProducto.forEch (Producto => {
            console.log(`${i +1 }${Producto.getDescripcion()}`);
        });
    }
    
    registrarPedido(pedidoF){
        this._pedidoF.push(pedidoF)
    }

    listarPedido(){
        this._listarPedidoF.forEch (PedidoF => {
            console.log(`${i +1 }${PedidoF.getProductos()}`);
        });
    }
}