import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';

const EditarDependente = () => {
    const [formData, setFormData] = useState({
        nome: 'Teste',
        nomeSocial: 'Teste',
        dataNascimento: '',
        telefone: '(11) 1111111111',
        rua: 'Teste',
        bairro: 'Teste',
        cidade: 'Teste',
        estado: 'Teste',
        pais: 'Teste',
        codigoPostal: 'Teste',
        cpf: '11111111111',
        dataExpedicaoCPF: '',
        rg: '11111111111',
        dataExpedicaoRg: '',
        passaporte: '11111111111',
        dataExpedicaoPassaporte: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {

        alert('Alterações salvas com sucesso!');
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="card mx-auto my-5 p-3" style={{ maxHeight: '850px', overflowY: 'auto' }}>
                    <h1 className="display-4 text-center">Edição do Dependente</h1>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Informações Pessoais</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="nome" className="form-label">
                                        Nome:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nome"
                                        name="nome"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        placeholder="Digite o nome"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="nomeSocial" className="form-label">
                                        Nome Social:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="nomeSocial"
                                        name="nomeSocial"
                                        value={formData.nomeSocial}
                                        onChange={handleChange}
                                        placeholder="Digite o nome social"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataNascimento" className="form-label">
                                        Data de Nascimento:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataNascimento"
                                        name="dataNascimento"
                                        value={formData.dataNascimento}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="telefone" className="form-label">
                                        Telefone:
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        id="telefone"
                                        name="telefone"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                        placeholder="(XX) XXXXXXXXX"
                                        readOnly
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Documentos</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="cpf" className="form-label">
                                        CPF:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cpf"
                                        name="cpf"
                                        value={formData.cpf}
                                        onChange={handleChange}
                                        placeholder="Digite o CPF"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataExpedicaoRg" className="form-label">
                                        Data de Expedição do CPF:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataExpedicaoCPF"
                                        name="dataExpedicaoCPF"
                                        value={formData.dataExpedicaoCPF}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="rg" className="form-label">
                                        RG:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rg"
                                        name="rg"
                                        value={formData.rg}
                                        onChange={handleChange}
                                        placeholder="Digite o RG"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataExpedicaoRg" className="form-label">
                                        Data de Expedição do RG:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataExpedicaoRg"
                                        name="dataExpedicaoRg"
                                        value={formData.dataExpedicaoRg}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="passaporte" className="form-label">
                                        Passaporte:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="passaporte"
                                        name="passaporte"
                                        value={formData.passaporte}
                                        onChange={handleChange}
                                        placeholder="Digite o número do Passaporte"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataExpedicaoPassaporte" className="form-label">
                                        Data de Expedição do Passaporte:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataExpedicaoPassaporte"
                                        name="dataExpedicaoPassaporte"
                                        value={formData.dataExpedicaoPassaporte}
                                        onChange={handleChange}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Endereço</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="rua" className="form-label">
                                        Rua:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="rua"
                                        name="rua"
                                        value={formData.rua}
                                        onChange={handleChange}
                                        placeholder="Digite a rua"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bairro" className="form-label">
                                        Bairro:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="bairro"
                                        name="bairro"
                                        value={formData.bairro}
                                        onChange={handleChange}
                                        placeholder="Digite o bairro"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="cidade" className="form-label">
                                        Cidade:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cidade"
                                        name="cidade"
                                        value={formData.cidade}
                                        onChange={handleChange}
                                        placeholder="Digite a cidade"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="estado" className="form-label">
                                        Estado:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="estado"
                                        name="estado"
                                        value={formData.estado}
                                        onChange={handleChange}
                                        placeholder="Digite o estado"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pais" className="form-label">
                                        País:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="pais"
                                        name="pais"
                                        value={formData.pais}
                                        onChange={handleChange}
                                        placeholder="Digite o país"
                                        readOnly
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="codigoPostal" className="form-label">
                                        Código Postal:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="codigoPostal"
                                        name="codigoPostal"
                                        value={formData.codigoPostal}
                                        onChange={handleChange}
                                        placeholder="Digite o código postal"
                                        readOnly
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="button" className="btn btn-primary" onClick={handleSave}>
                            Salvar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditarDependente;
