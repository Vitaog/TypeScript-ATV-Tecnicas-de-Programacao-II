import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import EditarTelefoneTitular from "./editarTelefoneTitular";
import EditarEnderecoTitular from "./editarEnderecoTitular";
import EditarDocumentosCliente from "./editarDocumentosTitular";

export default class EditarClienteDependente extends Processo {

    private clienteTitular: Cliente | undefined;

    constructor() {
        super();
    }

    private listarClientesTitulares(): void {
        console.log('Clientes Titulares Disponíveis:');
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (this.titular(cliente)) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });
    }

    private listarDependentesDoTitular(clienteTitular: Cliente): void {
        console.log(`Dependentes de ${clienteTitular.Nome}:`);
        clienteTitular.Dependentes.forEach(dependente => {
            if(!dependente.Excluido) {
            console.log(`ID: ${dependente.Id} - Nome: ${dependente.Nome}`);
            }
        });
    }

    private obterClientePorId(id: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === id);
    }

    private receberEntradaComOpcaoDefault(mensagem: string, opcaoDefault: string): string {
        const input = this.entrada.receberTexto(`${mensagem} (Pressione ENTER para manter [${opcaoDefault}]):`);
        return input.trim() === "" ? opcaoDefault : input;
    }

    private titular(cliente: Cliente): boolean {
        return cliente.Titular === undefined && !cliente.Excluido
    }

    processar(): void {
        console.log('Iniciando a edição de um cliente dependente...');

        this.listarClientesTitulares();

        const clienteTitularId = this.entrada.receberNumero('Selecione o ID do cliente titular que deseja editar:');
        this.clienteTitular = this.obterClientePorId(clienteTitularId);

        if (this.clienteTitular) {
            console.log('Cliente titular encontrado. Iniciando edição...');

            this.listarDependentesDoTitular(this.clienteTitular);

            const dependenteId = this.entrada.receberNumero('Selecione o ID do dependente que deseja editar:');
            const dependente = this.obterClientePorId(dependenteId);

            if (dependente && !this.titular(dependente)) {
                console.log('Dependente encontrado. Iniciando edição...');

                let nome = this.receberEntradaComOpcaoDefault(`Novo nome para ${dependente.Nome}`, dependente.Nome);
                let nomeSocial = this.receberEntradaComOpcaoDefault(`Novo nome social para ${dependente.NomeSocial}`, dependente.NomeSocial);

                dependente.Nome = nome;
                dependente.NomeSocial = nomeSocial;

                this.processo = new EditarDocumentosCliente(dependente);
                this.processo.processar();

                console.log('Edição do dependente concluída.');

            } else {
                console.log('Dependente não encontrado ou inválido para edição.');
            }

        } else {
            console.log('Cliente titular não encontrado.');
        }
    }
}
