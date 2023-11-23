import Documento from "./documento"
import Endereco from "./endereco"
import Telefone from "./telefone"

export default class Cliente {
    private id: number;
    private nome: string
    private nomeSocial: string
    private dataNascimento: Date
    private dataCadastro: Date
    private telefones: Telefone[] = []
    private endereco!: Endereco
    private documentos: Documento[] = []
    private dependentes: Cliente[] = []
    private titular!: Cliente
    private static proximoId = 1;

    private static obterProximoId(): number {
        return Cliente.proximoId++;
    }

    constructor(id:number | null, nome: string, nomeSocial: string, dataNascimento: Date, titular?: Cliente) {
        this.id = id !== null ? id: Cliente.obterProximoId();
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.dataNascimento = dataNascimento
        this.dataCadastro = new Date()
        this.titular = titular!;
    }

    public get Id() { return this.id; }
    public get Nome() { return this.nome }
    public get NomeSocial() { return this.nomeSocial }
    public get DataNascimento() { return this.dataNascimento }
    public get DataCadastro() { return this.dataCadastro }
    public get Telefones() { return this.telefones }
    public get Endereco() { return this.endereco }
    public get Documentos() { return this.documentos }
    public get Dependentes() { return this.dependentes }
    public get Titular() { return this.titular }

    public set Endereco(endereco: Endereco) { this.endereco = endereco }
    public set Nome(nome: string) { this.nome = nome; }
    public set NomeSocial(nomeSocial: string) { this.nomeSocial = nomeSocial; }
    
}