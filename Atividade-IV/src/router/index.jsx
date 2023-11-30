import Home from "../pages/home/home";
import CadastroTitular from "../pages/cadastroTitular/cadastroTitular"
import CadastroDependente from "../pages/cadastroDependente/cadastroDependente";
import ListarTitulares from "../pages/listarTitular/listarTitular";
import EditarTitular from "../pages/editarTitular/editarTitular";
import EditarDependente from "../pages/editarDependente/editarDependente";
import ListarDependentes from "../pages/listarDependente/listarDependente";


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
},
{
    path: "/listarTitular",
    element: <ListarTitulares />
},
{
    path: "/listarDependente",
    element: <ListarDependentes />
},
{
    path: "/editar-titular/:id",
    element: <EditarTitular />
},
{
    path: "/editar-dependente/:id",
    element: <EditarDependente />
}
];
