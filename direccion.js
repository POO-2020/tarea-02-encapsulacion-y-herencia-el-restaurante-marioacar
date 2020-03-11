export default class Direccion{

    constructor(calle,numeroExterior,numeroInterior,colonia,codigoPostal,ciudad,municipio){
        this.calle = calle
        this.numeroExterior = numeroExterior
        this.numeroInterior = numeroInterior
        this.colonia = colonia
        this.codigoPostal = codigoPostal
        this.ciudad = ciudad
        this.municipio = municipio
    }

    getFormatoCorto(){
        return `Av.${this.calle} ${this.numeroExterior} `
    }
    getFormatoLargo(){
        return `Av.${this.calle} ${this.numeroExterior} de la colonia ${this.colonia} CP ${this.codigoPostal} del municipio de ${this.municipio} ciudad ${this.ciudad}`
    }
}