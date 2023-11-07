import Entrada from "./entrada";
import ClienteController from "../controller/clienteController";

function menu() {
    const clienteController = new ClienteController();
    while (true) {
        console.log("*********** BEM VINDO AO ATLANTIS! ***********")
        console.log("Menu:");
        console.log("1. Cadastrar Cliente");
        console.log("2. Cadastrar Dependentes");
        console.log("3. Listar Clientes");
        console.log("4. Sair");
        console.log("------------------------------------------------")
        const entrada = new Entrada();
        const escolha = entrada.receberNumero("Digite o número com a opção desejada ");

        switch (escolha) {
            case 1:
                clienteController.cadastrarCliente();
                break;
            case 2:
                clienteController.cadastrarDependentes();
                break;
            case 3:
                clienteController.listarClientes();
                break;
            case 4:
                console.log("Saindo do programa.");
                return;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
    }
}

menu();
