import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastroTelefoneTitularAoEditar extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private adicionarTelefoneDependentes(novoTelefone: Telefone): void {
        this.cliente.Dependentes.forEach(dependente => {
            const telefoneDependente = dependente.Telefones.find(
                telefone => telefone.Ddd === novoTelefone.Ddd
            );

            if (!telefoneDependente) {
                const novoTelefoneDependente = new Telefone(novoTelefone.Ddd, novoTelefone.Numero);
                dependente.Telefones.push(novoTelefoneDependente);
            }
        });
    }

    processar(): void {
        console.log('Coletando os dados de telefone...');

        let cadastrarOutroTelefone = true;

        while (cadastrarOutroTelefone) {
            let ddd = this.entrada.receberTexto('Qual o DDD?');
            let numero = this.entrada.receberTexto('Qual o número de telefone?');

            let telefone = new Telefone(ddd, numero);
            this.cliente.Telefones.push(telefone);

            this.adicionarTelefoneDependentes(telefone);

            cadastrarOutroTelefone = this.entrada.receberTexto('Deseja cadastrar outro telefone? (S/N)').toUpperCase() === 'S';
        }
    }
}
