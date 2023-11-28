import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemTitularPorDependente extends Processo {
    private impressor!: Impressor;

    constructor() {
        super();
    }

    private listarDependentes(): Cliente[] {
        console.log('Clientes Dependentes Disponíveis:');
        const dependentes = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular !== undefined && !cliente.Excluido);
        dependentes.forEach(cliente => {
            console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
        });
        return dependentes;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes titulares por dependente...');

        const dependentes = this.listarDependentes();

        if (dependentes.length === 0) {
            console.log('Não há dependentes disponíveis.');
            return;
        }

        const dependenteId = this.entrada.receberNumero('Selecione o ID do cliente dependente:');
        const dependenteSelecionado = dependentes.find(cliente => cliente.Id === dependenteId);

        if (!dependenteSelecionado) {
            console.log('Dependente não encontrado.');
            return;
        }

        const titular = dependenteSelecionado.Titular;
        
        if (!titular) {
            console.log('Titular não encontrado para o dependente selecionado.');
            return;
        }

        console.log('Titular encontrado para o dependente selecionado:');
        this.impressor = new ImpressorCliente(titular);
        console.log(this.impressor.imprimir());
    }
}
