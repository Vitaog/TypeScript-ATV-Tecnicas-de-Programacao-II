import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';

const RegistroHospedagem = () => {
    const [formData, setFormData] = useState({
        clienteId: '',
        tipoHospedagem: '',
        tipoAcomodacao: '',
        dataInicio: '',
        dataFinal: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = () => {
        alert('Registro de Hospedagem realizado com sucesso!');
    };

    return (
        <div>
            <NavBar />
            <div className="container">
                <div className="card mx-auto my-5 p-3" style={{ maxHeight: '850px', overflowY: 'auto' }}>
                    <h1 className="display-4 text-center">Registro de Hospedagem</h1>
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Informações do Cliente</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="clienteId" className="form-label">
                                        ID do Cliente:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="clienteId"
                                        name="clienteId"
                                        value={formData.clienteId}
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
                            <h5 className="card-title">Detalhes da Hospedagem</h5>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="tipoHospedagem" className="form-label">
                                        Tipo de Hospedagem:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="tipoHospedagem"
                                        name="tipoHospedagem"
                                        value={formData.tipoHospedagem}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione o tipo de hospedagem</option>
                                        <option value="Hotel">Hotel</option>
                                        <option value="Pousada">Pousada</option>
                                        <option value="Resort">Resort</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="tipoAcomodacao" className="form-label">
                                        Tipo de Acomodação:
                                    </label>
                                    <select
                                        className="form-control"
                                        id="tipoAcomodacao"
                                        name="tipoAcomodacao"
                                        value={formData.tipoAcomodacao}
                                        onChange={handleChange}
                                    >
                                        <option value="">Selecione o tipo de acomodação</option>
                                        <option value="Casal Simples">Casal Simples</option>
                                        <option value="Familia Simples">Familia Simples</option>
                                        <option value="Solteiro Simples">Solteiro Simples</option>
                                        <option value="Familia Mais">Familia Mais</option>
                                        <option value="Solteiro Mais">Solteiro Mais</option>
                                        <option value="Familia Super">Familia Super</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataInicio" className="form-label">
                                        Data de Início:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataInicio"
                                        name="dataInicio"
                                        value={formData.dataInicio}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="dataFinal" className="form-label">
                                        Data Final:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="dataFinal"
                                        name="dataFinal"
                                        value={formData.dataFinal}
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

export default RegistroHospedagem;
