import { TipoDocumento } from "../enumeracoes/tipoDocumento";
import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Entrada from "../teste/entrada";

export default class ClienteController {
    private entrada: Entrada;
    private clientes: Cliente[];

    constructor() {
        this.entrada = new Entrada();
        this.clientes = [];
    }

    cadastrarCliente() {
        console.log("Cadastrar Cliente");
        const cliente = new Cliente();
    
        cliente.id = this.clientes.length + 1;
        cliente.nome = this.entrada.receberTexto("Digite o nome do cliente");
        cliente.dataCadastro = new Date();
        cliente.dataNascimento = this.entrada.receberData("Digite a data de nascimento do cliente");
    
        console.log("Documento: ");
        const documento = new Documento();
        documento.numero = this.entrada.receberTexto("Digite o número do documento");
    
        let tipoDocumento: string | TipoDocumento;
        do {
            const tipoDocumentoInput = this.entrada.receberTexto("Digite o tipo de documento (CPF, RG, Passaporte)");
            tipoDocumento = TipoDocumento[tipoDocumentoInput as keyof typeof TipoDocumento];
        } while (tipoDocumento === undefined);
    
        documento.tipo = tipoDocumento as TipoDocumento;
        documento.dataExpedicao = this.entrada.receberData("Digite a data de expedição do documento");
    
        cliente.documentos.push(documento);
    
        console.log("Endereço");
        const endereco = new Endereco();
        endereco.rua = this.entrada.receberTexto("Digite a rua");
        endereco.bairro = this.entrada.receberTexto("Digite o bairro");
        endereco.cidade = this.entrada.receberTexto("Digite a cidade");
        endereco.estado = this.entrada.receberTexto("Digite o estado");
        endereco.pais = this.entrada.receberTexto("Digite o país");
        endereco.codigoPostal = this.entrada.receberTexto("Digite o código postal");
    
        cliente.endereco = endereco;
    
        this.clientes.push(cliente);
    
        console.log("Cliente cadastrado com sucesso!");
    }
    
    cadastrarDependentes() {
        console.log("Cadastrar Dependentes");
        const clienteId = this.entrada.receberNumero("Digite o ID do cliente que deseja adicionar dependente");
        const cliente = this.clientes.find((c) => c.titular === null && c.id === clienteId);

        if (!cliente) {
            console.log("Cliente não encontrado ou não é um titular.");
            return;
        }

        const dependente = new Cliente();

        dependente.nome = this.entrada.receberTexto("Digite o nome do dependente");
        dependente.dataCadastro = new Date();
        dependente.dataNascimento = this.entrada.receberData("Digite a data de nascimento do dependente");

        dependente.endereco = cliente.endereco;
        dependente.titular = cliente;

        cliente.dependentes.push(dependente);

        console.log("Dependente cadastrado com sucesso!");
    }

    listarClientes() {
        console.log("Lista de Clientes");
        this.clientes.forEach((cliente) => {
            console.log(`ID: ${cliente.id}`);
            console.log(`Nome: ${cliente.nome}`);
            console.log(`Data de Nascimento: ${cliente.dataNascimento.toLocaleDateString()}`);
            
            if (cliente.titular) {
                console.log("Tipo: Titular");
            } else {
                console.log("Tipo: Dependente");
                console.log(`Titular: ${cliente.titular?.nome}`);
            }
    
            if (cliente.documentos.length > 0) {
                console.log("Documentos:");
                cliente.documentos.forEach((documento) => {
                    console.log(`- Tipo de Documento: ${documento.tipo}`);
                    console.log(`- Número do Documento: ${documento.numero}`);
                    console.log(`- Data de Expedição: ${documento.dataExpedicao.toLocaleDateString()}`);
                });
            }
    
            console.log("Endereço:");
            console.log(`Rua: ${cliente.endereco.rua}`);
            console.log(`Bairro: ${cliente.endereco.bairro}`);
            console.log(`Cidade: ${cliente.endereco.cidade}`);
            console.log(`Estado: ${cliente.endereco.estado}`);
            console.log(`País: ${cliente.endereco.pais}`);
            console.log(`Código Postal: ${cliente.endereco.codigoPostal}`);
    
            if (cliente.dependentes.length > 0) {
                console.log("Dependentes:");
                cliente.dependentes.forEach((dependente) => {
                    console.log(`- Nome do Dependente: ${dependente.nome}`);
                    console.log(`- ID do Titular: ${dependente.titular?.id}`);
                });
            }
            console.log("\n");
        });
    }  
}
