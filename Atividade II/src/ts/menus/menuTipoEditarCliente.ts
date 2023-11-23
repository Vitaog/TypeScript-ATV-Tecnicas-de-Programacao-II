import Menu from "../interfaces/menu";

export default class MenuTipoEditarCliente implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo de edição desejada? `)
        console.log(`----------------------`)
        console.log(`| 1 - Um titular específico`)
        console.log(`| 2 - Um dependente específico`)
        console.log(`----------------------`)
    }
}