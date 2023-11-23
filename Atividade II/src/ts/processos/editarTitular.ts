import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import EditarTelefoneTitular from "./editarTelefoneTitular";
import EditarEnderecoTitular from "./editarEnderecoTitular";
import EditarDocumentosCliente from "./editarDocumentosTitular";

export default class EditarClienteTitular extends Processo {

    private cliente: Cliente | undefined;

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
    

    private obterClientePorId(id: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === id);
    }

    private receberEntradaComOpcaoDefault(mensagem: string, opcaoDefault: string): string {
        const input = this.entrada.receberTexto(`${mensagem} (Pressione ENTER para manter [${opcaoDefault}]):`);
        return input.trim() === "" ? opcaoDefault : input;
    }

    private titular(cliente: Cliente): boolean {
        return cliente.Titular === undefined;
    }
    
    processar(): void {
        console.log('Iniciando a edição de um cliente...');

        this.listarClientesTitulares();

        const clienteId = this.entrada.receberNumero('Selecione o ID do cliente que deseja editar:');
        this.cliente = this.obterClientePorId(clienteId);

        if (this.cliente) {
            console.log('Cliente encontrado. Iniciando edição...');

            let nome = this.receberEntradaComOpcaoDefault(`Novo nome para ${this.cliente.Nome}`, this.cliente.Nome);
            let nomeSocial = this.receberEntradaComOpcaoDefault(`Novo nome social para ${this.cliente.NomeSocial}`, this.cliente.NomeSocial);

            this.cliente.Nome = nome;
            this.cliente.NomeSocial = nomeSocial;
            

            this.processo = new EditarTelefoneTitular(this.cliente);
            this.processo.processar();

            this.processo = new EditarEnderecoTitular(this.cliente);
            this.processo.processar();

            this.processo = new EditarDocumentosCliente(this.cliente);
            this.processo.processar();

            console.log('Edição concluída.');

        } else {
            console.log('Cliente não encontrado.');
        }
    }
}
