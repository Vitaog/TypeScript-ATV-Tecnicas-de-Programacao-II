import { TipoHospedagem } from "../enumeracoes/TipoHospedagem"

export default class Hospedagem {
    private tipo: TipoHospedagem

    constructor(tipo: TipoHospedagem) {
        this.tipo = tipo
    }

    public get Tipo(){
        return this.tipo
    }
    
    public set Tipo(tipo: TipoHospedagem){this.tipo = tipo}
}