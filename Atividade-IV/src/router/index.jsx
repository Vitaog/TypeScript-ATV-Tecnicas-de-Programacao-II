import Home from "../pages/home/home";
import CadastroTitular from "../pages/cadastroTitular/cadastroTitular"
import CadastroDependente from "../pages/cadastroDependente/cadastroDependente";
import ListarTitulares from "../pages/listarTitular/listarTitular";
import EditarTitular from "../pages/editarTitular/editarTitular";
import EditarDependente from "../pages/editarDependente/editarDependente";
import ListarDependentes from "../pages/listarDependente/listarDependente";
import ListarAcomodacao from "../pages/listarAcomodacao/listaracomodacao";
import ListarHospedagem from "../pages/listarHospedagem/listarHospedagem";
import RegistroHospedagem from "../pages/registroHospedagem/registroHospedagem";


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
},
{
    path: "/listarAcomodacao",
    element: <ListarAcomodacao/>
},
{
    path: "/listarHospedagem",
    element: <ListarHospedagem/>
},
{
    path: "/registrarHospedagem",
    element: <RegistroHospedagem/>
},
];
