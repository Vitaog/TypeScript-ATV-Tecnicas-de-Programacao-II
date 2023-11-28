import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastroPassaporte from "./cadastroPassaporte";

export default class EditarPassaporte extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private obterPassaporte(): Documento | undefined {
        return this.cliente.Documentos.find(doc => doc.Tipo === TipoDocumento.Passaporte);
    }

    processar(): void {
        console.log('Editando Passaporte...');

        const passaporte = this.obterPassaporte();

        if (passaporte) {
            const novoNumero = this.entrada.receberTexto(`Novo número do Passaporte (Pressione ENTER para manter [${passaporte.Numero}]):`);
            const novaDataExpedicao = this.entrada.receberData(`Nova data de expedição do Passaporte (Pressione ENTER para manter [${passaporte.DataExpedicao}]):`);

            if (novoNumero.trim() !== "") {
                passaporte.Numero = novoNumero;
            }

            if (novaDataExpedicao) {
                passaporte.DataExpedicao = novaDataExpedicao;
            }

            console.log('Edição do Passaporte concluída.');
        } else {
            console.log('Passaporte não encontrado.');

            const cadastrarPassaporte = this.entrada.receberTexto('Deseja cadastrar um novo Passaporte? (S/N)').toUpperCase() === 'S';

            if (cadastrarPassaporte) {
                const processoCadastroPassaporte = new CadastroPassaporte(this.cliente);
                processoCadastroPassaporte.processar();
            } else {
                console.log('Operação cancelada.');
            }
        }
    }
}
