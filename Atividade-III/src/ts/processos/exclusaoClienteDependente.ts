import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExclusaoClienteDependente extends Processo {

    processar(): void {
        console.log('Iniciando a exclusão de um cliente dependente...');

        console.log('Clientes Titulares Disponíveis:');
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (cliente.Titular === undefined && !cliente.Excluido) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });

        const clienteTitularId = this.entrada.receberNumero('Selecione o ID do cliente titular para o qual deseja excluir um dependente:');
        const clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === clienteTitularId && cliente.Titular === undefined);

        if (clienteTitular) {
            console.log(`Dependentes do Titular ${clienteTitular.Nome}:`);
            clienteTitular.Dependentes.forEach(dependente => {
                if (!dependente.Excluido) {
                    console.log(`ID: ${dependente.Id} - Nome: ${dependente.Nome}`);
                }
            });

            const dependenteId = this.entrada.receberNumero('Selecione o ID do dependente que deseja excluir:');
            const dependente = clienteTitular.Dependentes.find(dep => dep.Id === dependenteId);

            if (dependente) {
                dependente.marcarComoExcluido();
                console.log('Dependente excluído com sucesso.');
            } else {
                console.log('Dependente não encontrado ou inválido para exclusão.');
            }
        } else {
            console.log('Cliente titular não encontrado ou inválido.');
        }

        console.log('Finalizando a exclusão de cliente dependente...');
    }
}
