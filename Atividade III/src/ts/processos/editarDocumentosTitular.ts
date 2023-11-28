import Processo from "../abstracoes/processo";
import Cliente from "../modelos/cliente";
import EditarCpf from "./editarCpf";
import EditarRg from "./editarRg";
import EditarPassaporte from "./editarPassaporte";
import MenuTipoEditarDocumento from "../menus/menuTipoEditarDocumento";

export default class EditarDocumentosCliente extends Processo {
    private cliente: Cliente;

    constructor(cliente: Cliente) {
        super();
        this.cliente = cliente;
        this.menu = new MenuTipoEditarDocumento();
        this.execucao = true;
    }

    processar(): void {
        console.log('Iniciando a edição de documentos...');

        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero('Qual opção deseja editar?');
            switch (this.opcao) {
                case 1:
                    this.processo = new EditarCpf(this.cliente);
                    this.processo.processar();
                    break;
                case 2:
                    this.processo = new EditarRg(this.cliente);
                    this.processo.processar();
                    break;
                case 3:
                    this.processo = new EditarPassaporte(this.cliente);
                    this.processo.processar();
                    break;
                case 0:
                    this.execucao = false;
                    break;
                default:
                    console.log('Opção não entendida :(');
            }
        }
    }
}
