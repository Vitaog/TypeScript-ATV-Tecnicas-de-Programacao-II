import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private impressor!: Impressor;

    constructor() {
        super();
    }

    private listarTitulares(): Cliente[] {
        console.log('Clientes Titulares Disponíveis:');
        const titulares = Armazem.InstanciaUnica.Clientes.filter(cliente => cliente.Titular === undefined);
        titulares.forEach(cliente => {
            if (!cliente.Excluido) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });
        return titulares;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem dos clientes dependentes...');

        const titulares = this.listarTitulares();

        if (titulares.length === 0) {
            console.log('Não há titulares disponíveis.');
            return;
        }

        const titularId = this.entrada.receberNumero('Selecione o ID do cliente titular:');
        const titularSelecionado = titulares.find(cliente => cliente.Id === titularId);

        if (!titularSelecionado) {
            console.log('Titular não encontrado.');
            return;
        }

        const dependentes = titularSelecionado.Dependentes.filter(dependente => !dependente.Excluido);
        dependentes.forEach(dependente => {
            this.impressor = new ImpressaorCliente(dependente);
            console.log(this.impressor.imprimir());
        });
    }
}