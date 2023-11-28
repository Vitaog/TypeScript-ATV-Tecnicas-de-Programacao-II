import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import { TipoHospedagem } from "../enumeracoes/TipoHospedagem";

export default class ListarHospedagens extends Processo {

    private listarTiposHospedagem(): TipoHospedagem | null {
        console.log('Tipos de Hospedagem Disponíveis:');
        console.log('1 - Hotel');
        console.log('2 - Pousada');
        console.log('3 - Resort');

        const opcaoTipoHospedagem = this.entrada.receberNumero('Escolha o tipo de hospedagem (1, 2 ou 3):');

        switch (opcaoTipoHospedagem) {
            case 1:
                return TipoHospedagem.Hotel;
            case 2:
                return TipoHospedagem.Pousada;
            case 3:
                return TipoHospedagem.Resort;
            default:
                console.log('Opção inválida.');
                return null;
        }
    }

    private listarDetalhesHospedagens(tipoHospedagem: TipoHospedagem): void {
        console.clear();
        console.log(`Listando hospedagens para o tipo: ${TipoHospedagem[tipoHospedagem]}`);

        Armazem.InstanciaUnica.Clientes.forEach(cliente => {
            if (cliente.Hospedagem && cliente.Hospedagem.Tipo === tipoHospedagem && !cliente.Excluido && Object.keys(cliente.Acomodacao).length > 0)  {
                console.log(`****************************`)
                console.log(`ID: ${cliente.Id} - Nome: ${cliente.Nome}`);
                console.log(`Tipo de Acomodação: ${cliente.Acomodacao.NomeAcomadacao}`);
                console.log(`Data de Início: ${cliente.DataHospedagemInicial.toLocaleDateString()}`);
                console.log(`Data de Término: ${cliente.DataHospedagemFinal.toLocaleDateString()}`);
                console.log(`****************************`);
            }
        });
    }

    processar(): void {
        console.clear();
        console.log('Iniciando a listagem de hospedagens...');

        const tipoHospedagem = this.listarTiposHospedagem();

        if (tipoHospedagem !== null) {
            this.listarDetalhesHospedagens(tipoHospedagem);
        }

        console.log('Finalizando a listagem de hospedagens...');
    }
}
