import Cliente from "./cliente.js"
export default class ClienteFrecuente extends Cliente{

    constructor(numeroCliente,fechaRegistro,nombre,direccion,telefono){
        super(nombre, direccion,telefono)
        this._fechaRegistro = fechaRegistro
        this._numeroCliente = numeroCliente
        this._fechaRegistro = fechaRegistro
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }

    getPerfil(){
        return `${this._numeroCliente}, ${this._fechaRegistro},${this._fechaRegistro},${this._nombre} ${this._direccion}, ${this._telefono}`
    }



}