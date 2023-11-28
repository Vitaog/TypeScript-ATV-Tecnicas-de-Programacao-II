import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastroCpf from "./cadastroCPF";

export default class EditarCpf extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private obterCpf(): Documento | undefined {
        return this.cliente.Documentos.find(doc => doc.Tipo === TipoDocumento.CPF);
    }

    processar(): void {
        console.log('Editando CPF...');

        const cpf = this.obterCpf();

        if (cpf) {
            const novoNumero = this.entrada.receberTexto(`Novo número do CPF (Pressione ENTER para manter [${cpf.Numero}]):`);
            const novaDataExpedicao = this.entrada.receberData(`Nova data de expedição do CPF (Pressione ENTER para manter [${cpf.DataExpedicao}]):`);

            if (novoNumero.trim() !== "") {
                cpf.Numero = novoNumero;
            }

            if (novaDataExpedicao) {
                cpf.DataExpedicao = novaDataExpedicao;
            }

            console.log('Edição do CPF concluída.');
        } else {
            console.log('CPF não encontrado.');

            const cadastrarCpf = this.entrada.receberTexto('Deseja cadastrar um novo CPF? (S/N)').toUpperCase() === 'S';

            if (cadastrarCpf) {
                const processoCadastroCpf = new CadastroCpf(this.cliente);
                processoCadastroCpf.processar();
            } else {
                console.log('Operação cancelada.');
            }
        }
    }
}
