import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';

const CadastroDependente = () => {
    const [formData, setFormData] = useState({
        cliente: '',
        nome: '',
        nomeSocial: '',
        dataNascimento: '',
        cpf: '',
        dataExpedicaoCPF: '',
        rg: '',
        dataExpedicaoRg: '',
        passaporte: '',
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
        alert('Cadastro realizado com sucesso!');
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="card mx-auto my-5 p-3" style={{ maxHeight: '850px', overflowY: 'auto' }}>
                    <h1 className="display-4 text-center">Cadastro do Dependente</h1>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Cliente Titular</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="cliente" className="form-label">
                                        Cliente ID:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="cliente"
                                        name="cliente"
                                        value={formData.cliente}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione um cliente</option>
                                        <option value="cliente1">Cliente 1</option>
                                        <option value="cliente2">Cliente 2</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>

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

export default CadastroDependente;
