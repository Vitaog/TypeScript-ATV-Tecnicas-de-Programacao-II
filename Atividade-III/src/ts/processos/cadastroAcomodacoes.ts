import Processo from "../abstracoes/processo";
import DiretorCasalSimples from "../diretores/diretorCasalSimples";
import DiretorFamiliaMais from "../diretores/diretorFamiliaMais";
import DiretorFamiliaSimples from "../diretores/diretorFamiliaSimples";
import DiretorFamiliaSuper from "../diretores/diretorFamiliaSuper";
import DiretorSolteiroMais from "../diretores/diretorSolteiroMais";
import DiretorSolteiroSimples from "../diretores/diretorSolteiroSimples";
import Armazem from "../dominio/armazem";
import Acomodacao from "../modelos/acomodacao";

export default class CadastroAcomodacoes extends Processo {
    private acomodacoes: Acomodacao[]
    constructor() {
        super()
        this.acomodacoes = Armazem.InstanciaUnica.Acomodacoes
    }
    processar(): void {
        let diretor1 = new DiretorSolteiroSimples()
        let diretor2 = new DiretorSolteiroMais()
        let diretor3 = new DiretorFamiliaSuper()
        let diretor4 = new DiretorFamiliaMais()
        let diretor5 = new DiretorFamiliaSimples()
        let diretor6 = new DiretorCasalSimples()

        this.acomodacoes.push(diretor1.construir(), diretor2.construir(), diretor3.construir(), diretor4.construir(), diretor5.construir(), diretor6.construir())
    }
}