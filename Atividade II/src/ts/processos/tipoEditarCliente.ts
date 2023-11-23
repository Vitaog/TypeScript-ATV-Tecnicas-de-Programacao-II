import Processo from "../abstracoes/processo";
import MenuTipoEditarCliente from "../menus/menuTipoEditarCliente";
import EditarClienteTitular from "./editarTitular";
import ListagemDependentes from "./listagemDependentesPorTitular";

export default class TipoEditarCliente extends Processo {
    constructor(){
        super()
        this.menu = new MenuTipoEditarCliente()
    }
    
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual a opção desejada?')
        switch (this.opcao) {
            case 1:
                this.processo = new EditarClienteTitular()
                this.processo.processar()
                break;
            case 2:
                this.processo = new ListagemDependentes()
                this.processo.processar()
                break;
            default:
                console.log('Opção não entendida... :(')
        }
    }
}