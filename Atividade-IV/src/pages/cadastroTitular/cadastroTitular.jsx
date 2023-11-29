import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';

const CadastroTitular = () => {
  const [formData, setFormData] = useState({
    nome: '',
    nomeSocial: '',
    dataNascimento: '',
    telefone: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
    pais: '',
    codigoPostal: '',
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
        <div className="card mx-auto my-5 p-3">
          <h1 className="display-4 text-center">Cadastro do Titular</h1>
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
                placeholder="Digite o telefone"
              />
            </div>
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
              />
            </div>
            <div className="text-center">
              <button type="button" className="btn btn-primary" onClick={handleSave}>
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroTitular;
