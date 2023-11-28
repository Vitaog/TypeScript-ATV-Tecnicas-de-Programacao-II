import Menu from "../interfaces/menu";

export default class MenuTipoEditarDocumento implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Qual o tipo do documento deseja editar? `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastro de Pessoas Física`)
        console.log(`| 2 - Registro Geral`)
        console.log(`| 3 - Passaporte`)
        console.log(`| 0 - Finalizar edição de documentos`)
        console.log(`----------------------`)
    }
}