import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";

export default class CadastroClienteDependente extends Processo {
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

    private titular(cliente: Cliente): boolean {
        return cliente.Dependentes.length === 0;
    }

    private obterTitularPorId(id: number): Cliente | undefined {
        return Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === id && this.titular(cliente));
    }

    processar(): void {
        console.log('Iniciando o cadastro de um novo cliente dependente...');

        
        this.listarClientesTitulares();

        let titularId = this.entrada.receberNumero('Selecione o ID do cliente titular:');
        this.clienteTitular = this.obterTitularPorId(titularId);

        if (this.clienteTitular) {
            let nome = this.entrada.receberTexto('Qual o nome do novo cliente dependente?');
            let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo cliente dependente?');
            let dataNascimento = this.entrada.receberData('Qual a data de nascimento do novo cliente dependente?');

            let clienteDependente = new Cliente(null, nome, nomeSocial, dataNascimento);
            clienteDependente.Endereco = this.clienteTitular.Endereco?.clonar() as Endereco;

            this.processo = new CadastrarDocumentosCliente(clienteDependente);
            this.processo.processar();

            this.clienteTitular.Dependentes.push(clienteDependente);
            Armazem.InstanciaUnica.Clientes.push(clienteDependente);

            console.log('Finalizando o cadastro do cliente dependente...');
        } else {
            console.log('Cliente titular não encontrado.');
        }
    }
}
