import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";
import Hospedagem from "../modelos/hospedagem";
import { TipoHospedagem } from "../enumeracoes/TipoHospedagem";

export default class RegistroHospedagem extends Processo {

    private listarAcomodacoes(): Acomodacao[] {
        console.log('Acomodações Disponíveis:');
        Armazem.InstanciaUnica.Acomodacoes.forEach((acomodacao, index) => {
            console.log(`ID: ${index + 1} - Nome: ${acomodacao.NomeAcomadacao}`);
        });
        return Armazem.InstanciaUnica.Acomodacoes;
    }
    
    processar(): void {
        console.clear();
        console.log('Iniciando o registro de hospedagem...');

        console.log('Clientes Disponíveis:');
        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if(!cliente.Excluido) {
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
            }
        });

        const clienteId = this.entrada.receberNumero('Selecione o ID do cliente para registrar a hospedagem:');
        const clienteSelecionado = Armazem.InstanciaUnica.Clientes.find(cliente => cliente.Id === clienteId);

        if (!clienteSelecionado) {
            console.log('Cliente não encontrado.');
            return;
        }

        console.log('Selecione o tipo de hospedagem:');
        console.log('1 - Hotel');
        console.log('2 - Pousada');
        console.log('3 - Resort');

        const opcaoTipoHospedagem = this.entrada.receberNumero('Opção:');

        let tipoHospedagem: TipoHospedagem;

        switch (opcaoTipoHospedagem) {
            case 1:
                tipoHospedagem = TipoHospedagem.Hotel;
                break;
            case 2:
                tipoHospedagem = TipoHospedagem.Pousada;
                break;
            case 3:
                tipoHospedagem = TipoHospedagem.Resort;
                break;
            default:
                console.log('Opção inválida.');
                return;
        }

        const acomodacoesDisponiveis = this.listarAcomodacoes();
        const acomodacaoId = this.entrada.receberNumero('Selecione o ID da acomodação:');
        const acomodacaoSelecionada = acomodacoesDisponiveis[acomodacaoId - 1];

        if (!acomodacaoSelecionada) {
            console.log('Acomodação não encontrada.');
            return;
        }

        const dataInicio = this.entrada.receberData('Informe a data de início da hospedagem:');
        const dataFinal = this.entrada.receberData('Informe a data de término da hospedagem:');

        const hospedagem = new Hospedagem(tipoHospedagem);
        clienteSelecionado.Acomodacao = acomodacaoSelecionada;
        clienteSelecionado.Hospedagem = hospedagem;
        clienteSelecionado.DataHospedagemInicial = dataInicio;
        clienteSelecionado.DataHospedagemFinal = dataFinal;

        console.log('Hospedagem registrada com sucesso.');
        console.log('Finalizando o registro de hospedagem...');
    }
}
