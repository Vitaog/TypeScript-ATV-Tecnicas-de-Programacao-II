import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class EditarTelefoneTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Editando os telefones do titular...');

        if (this.cliente.Telefones.length === 0) {
            console.log('O titular não possui telefones cadastrados.');
            return;
        }

        this.cliente.Telefones.forEach((telefone, index) => {
            console.log(`${index + 1}. DDD: ${telefone.Ddd}, Número: ${telefone.Numero}`);
        });

        const opcao = this.entrada.receberTexto('Selecione o número do telefone que deseja editar (Pressione ENTER para cancelar):');

        if (opcao.trim() !== "") {
            const indice = parseInt(opcao, 10) - 1;

            if (!isNaN(indice) && indice >= 0 && indice < this.cliente.Telefones.length) {
                const telefoneSelecionado = this.cliente.Telefones[indice];

                let novoDDD = this.entrada.receberTexto(`Novo DDD para ${telefoneSelecionado.Ddd} (Pressione ENTER para manter):`);
                let novoNumero = this.entrada.receberTexto(`Novo número para ${telefoneSelecionado.Numero} (Pressione ENTER para manter):`);

                
                if (novoDDD.trim() !== "") {
                    telefoneSelecionado.Ddd = novoDDD;
                }

                if (novoNumero.trim() !== "") {
                    telefoneSelecionado.Numero = novoNumero;
                }

                console.log('Edição do telefone concluída.');
            } else {
                console.log('Opção inválida. A edição foi cancelada.');
            }
        } else {
            console.log('Edição cancelada.');
        }
    }
}
