import Cliente from "./cliente.js"
export default class ClienteFrecuente extends Cliente{

    constructor({numeroCliente,FechaRegistro,nombre, direccion, telefono}){
    super({numeroCliente, FechaRegistro, nombre, direccion, telefono})
    this._numeroCliente = numeroCliente
    this._FechaRegistro = FechaRegistro
    this._nombre = nombre
    this._direccion = direccion
    this._telefono = telefono
    }
    
    getPerfil(){
        return `${this._numeroCliente}, ${this._FechaRegistro}, ${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`
    }

    }
}

