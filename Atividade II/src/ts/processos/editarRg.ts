import Processo from "../abstracoes/processo";
import { TipoDocumento } from "../enumeracoes/TipoDocumento";
import Cliente from "../modelos/cliente";

export default class EditarRg extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Editando RG...');
        const rg = this.cliente.Documentos.find(doc => doc.Tipo === TipoDocumento.RG);

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
        }
    }
}
