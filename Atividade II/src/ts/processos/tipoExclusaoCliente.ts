import Processo from "../abstracoes/processo";
import MenuTipoExclusaoCliente from "../menus/menuTipoExclusao";
import CadastroClienteDependente from "./cadastroClienteDependente";
import ExclusaoClienteTitular from "./exclusaoClienteTitular";

export default class TipoExclusaoCliente extends Processo {
    constructor() {
        super()
        this.menu = new MenuTipoExclusaoCliente()
    }
    processar(): void {
        this.menu.mostrar()
        this.opcao = this.entrada.receberNumero('Qual opção desejada?')
        
        switch (this.opcao) {
            case 1:
                this.processo = new ExclusaoClienteTitular()
                this.processo.processar()
                break
            case 2:
                this.processo = new CadastroClienteDependente();
                this.processo.processar()
                break
            default:
                console.log('Opção não entendida :(')
        }
    }
}