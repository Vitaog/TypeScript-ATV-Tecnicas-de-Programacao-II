import Home from "../pages/home/home";
import CadastroTitular from "../pages/cadastroTitular/cadastroTitular"
import CadastroDependente from "../pages/cadastroDependente/cadastroDependente";


export default [
{
    path: "/",
    element: <Home />
},
{
    path: "/cadastroTitular",
    element: <CadastroTitular />
},
{
    path: "/cadastroDependente",
    element: <CadastroDependente />
}
];
