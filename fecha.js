export default class Fecha {
    constructor(Año, Mes, Dia) {
        this._Fecha = new Date(Año, Mes - 1, Dia);
        this._Dia = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Vierenes", "Sábado"]
        this._Mes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
        this._Actual = new Date(Date.now())
    }
    getAños() {
        return `los años que han pasado son ${this._Actual.getFullYear() - this._Fecha.getFullYear()} desde ${this._Fecha.getFullYear()}`
    }
    getMeses() {
        return `los meses que han pasado son ${this._Actual.getFullYear() - this._Fecha.getFullYear() * 12} desde ${this._Fecha.getFullYear()} `
    }
    getSemanas() {
        return `las semanas que han pasado son ${this._Actual.getFullYear() - this._Fecha.getFullYear() * 48} desde ${this._Fecha.getFullYear()}`
    }
    getDias() {
        return `los dias que han pasado son ${this._Actual.getFullYear() - this._Fecha.getFullYear() * 365} desde ${this._Fecha.getFullYear()}`
    }
    getFecha() {
        return `${this._Fecha.getDate()}/${this._Mes[this._Fecha.getMonth()]}/${this._Fecha.getFullYear()}`
    }
    getDiaFecha() {
        return `${this._Dia[this._Fecha.getDate()]}`
    }
}