import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";
import CadastroTelefoneTitular from "./cadastroTelefoneTitular";

export default class EditarTelefoneTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private exibirTelefones(): void {
        console.log('Telefones do titular:');
        if (this.cliente.Telefones.length === 0) {
            console.log('O titular não possui telefones cadastrados.');
        } else {
            this.cliente.Telefones.forEach((telefone, index) => {
                console.log(`${index + 1}. DDD: ${telefone.Ddd}, Número: ${telefone.Numero}`);
            });
        }
    }

    private atualizarTelefonesDependentes(novoTelefone: Telefone): void {
        this.cliente.Dependentes.forEach(dependente => {
            const telefoneDependente = dependente.Telefones.find(
                telefone => telefone.Ddd === novoTelefone.Ddd && telefone.Numero === novoTelefone.Numero
            );
    
            if (telefoneDependente) {
                telefoneDependente.Numero = novoTelefone.Numero;
            } else {
                const novoTelefoneDependente = new Telefone(novoTelefone.Ddd, novoTelefone.Numero);
                dependente.Telefones.push(novoTelefoneDependente);
            }
        });
    }
    

    processar(): void {
        console.log('Editando os telefones do titular...');

        this.exibirTelefones();

        const opcao = this.entrada.receberTexto('Selecione o número do telefone que deseja editar (Pressione ENTER para cancelar):');

        if (opcao.trim() !== "") {
            const indice = parseInt(opcao, 10) - 1;

            if (!isNaN(indice) && indice >= 0 && indice < this.cliente.Telefones.length) {
                const telefoneSelecionado = this.cliente.Telefones[indice];

                let novoDDD = this.entrada.receberTexto(`Novo DDD para ${telefoneSelecionado.Ddd} (Pressione ENTER para manter):`);
                let novoNumero = this.entrada.receberTexto(`Novo número para ${telefoneSelecionado.Numero} (Pressione ENTER para manter):`);

                if (novoDDD.trim() !== "") {
                    telefoneSelecionado.Ddd = novoDDD;
                }

                if (novoNumero.trim() !== "") {
                    telefoneSelecionado.Numero = novoNumero;
                    this.atualizarTelefonesDependentes(telefoneSelecionado);
                }

                console.log('Edição do telefone concluída.');
            } else {
                console.log('Opção inválida. A edição foi cancelada.');
            }
        } else {
            console.log('Edição cancelada.');
        }

        const cadastrarNovoTelefone = this.entrada.receberTexto('Deseja cadastrar um novo telefone? (S/N)').toUpperCase() === 'S';

        if (cadastrarNovoTelefone) {
            const processoCadastroTelefone = new CadastroTelefoneTitular(this.cliente);
            processoCadastroTelefone.processar();
        }
    }
}
