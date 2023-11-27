import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";

export default class ExclusaoClienteTitular extends Processo {

    private marcarDependentesComoExcluidos(titular: Cliente): void {
        titular.Dependentes.forEach(dependente => {
            dependente.marcarComoExcluido();
        });
    }

    processar(): void {
        console.log('Iniciando a exclusão de um cliente titular...');

        console.log('Clientes Titulares Disponíveis:');
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (cliente.Titular === undefined && !cliente.Excluido) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });

        const clienteTitularId = this.entrada.receberNumero('Selecione o ID do cliente titular que deseja excluir:');
        const clienteTitular = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === clienteTitularId && cliente.Titular === undefined);

        if (clienteTitular) {
            this.marcarDependentesComoExcluidos(clienteTitular);
            clienteTitular.marcarComoExcluido();
            console.log('Cliente titular e seus dependentes excluídos com sucesso.');
        } else {
            console.log('Cliente titular não encontrado ou inválido para exclusão.');
        }

        console.log('Finalizando a exclusão de cliente titular...');
    }
}
