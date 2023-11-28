import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefoneTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Coletando os dados de telefone...');

        let cadastrarOutroTelefone = true;

        while (cadastrarOutroTelefone) {
            let ddd = this.entrada.receberTexto('Qual o DDD?');
            let numero = this.entrada.receberTexto('Qual o número de telefone?');

            let telefone = new Telefone(ddd, numero);
            this.cliente.Telefones.push(telefone);

            cadastrarOutroTelefone = this.entrada.receberTexto('Deseja cadastrar outro telefone? (S/N)').toUpperCase() === 'S';
        }
    }
}
