 export default class Precio{

    constructor(precio){
        this._precio = precio
    }

    getPrecio(){
        return `$${this._precio.toFixed(2)}`
    }
}