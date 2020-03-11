export default class Direccion{

    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this._calle = calle
        this._numeroExterior = numeroExterior
        this._numeroInterior = numeroInterior
        this._colonia = colonia
        this._codigoPostal = codigoPostal
        this._ciudad = ciudad
        this._municipio = municipio
    }

    getFormatoCorto(){
        return `Av.${this._calle} ${this._numeroExterior} `
    }
    getFormatoLargo(){
        return `Av.${this._calle} ${this._numeroExterior} de la colonia ${this._colonia} CP ${this._codigoPostal} del municipio de ${this._municipio} ciudad ${this._ciudad}`
    }
}