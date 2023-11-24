import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import CadastroRg from "./cadastroRg";

export default class EditarRg extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    private obterRg(): Documento | undefined {
        return this.cliente.Documentos.find(doc => doc.Tipo === TipoDocumento.RG);
    }

    processar(): void {
        console.log('Editando RG...');

        const rg = this.obterRg();

        if (rg) {
            const novoNumero = this.entrada.receberTexto(`Novo número do RG (Pressione ENTER para manter [${rg.Numero}]):`);
            const novaDataExpedicao = this.entrada.receberData(`Nova data de expedição do RG (Pressione ENTER para manter [${rg.DataExpedicao}]):`);

            if (novoNumero.trim() !== "") {
                rg.Numero = novoNumero;
            }

            if (novaDataExpedicao) {
                rg.DataExpedicao = novaDataExpedicao;
            }

            console.log('Edição do RG concluída.');
        } else {
            console.log('RG não encontrado.');

            const cadastrarRg = this.entrada.receberTexto('Deseja cadastrar um novo RG? (S/N)').toUpperCase() === 'S';

            if (cadastrarRg) {
                const processoCadastroRg = new CadastroRg(this.cliente);
                processoCadastroRg.processar();
            } else {
                console.log('Operação cancelada.');
            }
        }
    }
}
