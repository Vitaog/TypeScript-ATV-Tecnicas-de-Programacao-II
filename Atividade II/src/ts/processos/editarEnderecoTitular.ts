import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";

export default class EditarEnderecoTitular extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
    }

    processar(): void {
        console.log('Editando o endereço do titular...');

        if (!this.cliente.Endereco) {
            console.log('O titular não possui endereço cadastrado.');
            return;
        }

        const enderecoAtual = this.cliente.Endereco;

        console.log(`Endereço Atual:
            Rua: ${enderecoAtual.Rua}
            Bairro: ${enderecoAtual.Bairro}
            Cidade: ${enderecoAtual.Cidade}
            Estado: ${enderecoAtual.Estado}
            País: ${enderecoAtual.Pais}
            Código Postal: ${enderecoAtual.CodigoPostal}
        `);

        const confirmacao = this.entrada.receberTexto('Deseja editar o endereço? (S/N)').toUpperCase();

        if (confirmacao === 'S') {
            let novaRua = this.entrada.receberTexto(`Nova rua (Pressione ENTER para manter [${enderecoAtual.Rua}]):`);
            let novoBairro = this.entrada.receberTexto(`Novo bairro (Pressione ENTER para manter [${enderecoAtual.Bairro}]):`);
            let novaCidade = this.entrada.receberTexto(`Nova cidade (Pressione ENTER para manter [${enderecoAtual.Cidade}]):`);
            let novoEstado = this.entrada.receberTexto(`Novo estado (Pressione ENTER para manter [${enderecoAtual.Estado}]):`);
            let novoPais = this.entrada.receberTexto(`Novo país (Pressione ENTER para manter [${enderecoAtual.Pais}]):`);
            let novoCodigoPostal = this.entrada.receberTexto(`Novo código postal (Pressione ENTER para manter [${enderecoAtual.CodigoPostal}]):`);

            if (novaRua.trim() !== "") {
                enderecoAtual.Rua = novaRua;
            }

            if (novoBairro.trim() !== "") {
                enderecoAtual.Bairro = novoBairro;
            }

            if (novaCidade.trim() !== "") {
                enderecoAtual.Cidade = novaCidade;
            }

            if (novoEstado.trim() !== "") {
                enderecoAtual.Estado = novoEstado;
            }

            if (novoPais.trim() !== "") {
                enderecoAtual.Pais = novoPais;
            }

            if (novoCodigoPostal.trim() !== "") {
                enderecoAtual.CodigoPostal = novoCodigoPostal;
            }

            console.log('Edição do endereço concluída.');
        } else {
            console.log('Edição do endereço cancelada.');
        }
    }
}
