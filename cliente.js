export default class Cliente {

    constructor(nombre, direccion, telefono){
        this._nombre = nombre
        this._direccion = direccion
        this._telefono = telefono
    }

    getPerfil(){
        return `${this._nombre}, Av.${this._direccion}, telefono ${this._telefono}`
    }
}