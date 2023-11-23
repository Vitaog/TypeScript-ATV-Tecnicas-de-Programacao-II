import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";

export default class EditarPassaporte extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Editando Passaporte...');
        const passaporte = this.cliente.Documentos.find(doc => doc.Tipo === TipoDocumento.Passaporte);

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
        }
    }
}
