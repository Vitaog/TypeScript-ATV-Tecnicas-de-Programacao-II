import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import Cliente from "../modelos/cliente";
import Hospedagem from "../modelos/hospedagem";

export default class FinalizarHospedagem extends Processo {

    private listarClientesHospedados(): Cliente[] {
        console.log('Clientes Hospedados:');
        const clientesHospedados = Armazem.InstanciaUnica.Clientes.filter(cliente => 
            cliente.Acomodacao.NomeAcomadacao !== undefined && !cliente.Excluido
        );
    
        if (clientesHospedados.length === 0) {
            console.log('Não há clientes hospedados no momento.');
            return [];
        }
    
        clientesHospedados.forEach(cliente => {
            console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
        });
    
        return clientesHospedados;
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a finalização de hospedagem...');

        const clientesHospedados = this.listarClientesHospedados();

        if (clientesHospedados.length === 0) {
            console.log('Não há clientes hospedados para finalizar.');
            return;
        }

        const clienteId = this.entrada.receberNumero('Selecione o ID do cliente para finalizar a hospedagem:');
        const clienteSelecionado = clientesHospedados.find(cliente => cliente.Id === clienteId);

        if (!clienteSelecionado) {
            console.log('Cliente não encontrado.');
            return;
        }

        clienteSelecionado.Acomodacao = new Acomodacao();
        clienteSelecionado.DataHospedagemInicial = new Date;
        clienteSelecionado.DataHospedagemFinal = new Date;
        clienteSelecionado.Hospedagem = new Hospedagem();

        console.log('Hospedagem finalizada com sucesso.');
        console.log('Finalizando a finalização de hospedagem...');
    }
}
