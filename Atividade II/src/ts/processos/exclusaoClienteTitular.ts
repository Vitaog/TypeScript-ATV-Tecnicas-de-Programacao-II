import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";

export default class ExclusaoClienteTitular extends Processo {

    processar(): void {
        console.log('Iniciando a exclusão de um cliente titular...');

        console.log('Clientes Titulares Disponíveis:');
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (cliente.Titular === undefined) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });

        const clienteTitularId = this.entrada.receberNumero('Selecione o ID do cliente titular que deseja excluir:');
        const clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === clienteTitularId);

        if (clienteTitular && clienteTitular.Titular === undefined) {
            const index = Armazem.InstanciaUnica.Clientes.indexOf(clienteTitular);
            if (index !== -1) {
                Armazem.InstanciaUnica.Clientes.splice(index, 1);
                console.log('Cliente titular excluído com sucesso.');
            } else {
                console.log('Erro ao excluir cliente titular.');
            }
        } else {
            console.log('Cliente titular não encontrado ou inválido para exclusão.');
        }

        console.log('Finalizando a exclusão de cliente titular...');
    }
}
