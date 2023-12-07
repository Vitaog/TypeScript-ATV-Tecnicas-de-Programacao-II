import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';
import { Link } from 'react-router-dom';

const ListarHospedagem = () => {
  const [hospedagens, setHospedagens] = useState([]);

  useEffect(() => {
    const listaDeHospedagensDoBackend = [
      { id: 1, tipoHospedagem: 'Hotel', tipoAcomodacao: 'Casal Simples', cpf: '987.654.333-09', dataInicio:'01/02/2024', dataFinal: '10/02/2024' },
      { id: 2, tipoHospedagem: 'Pousada', tipoAcomodacao: 'Familia Simples', cpf: '987.654.321-09', dataInicio:'02/02/2024', dataFinal: '11/02/2024' },
      { id: 3, tipoHospedagem: 'Resort', tipoAcomodacao: 'Solteiro Simples', cpf: '987.654.222-10', dataInicio:'03/02/2024', dataFinal: '12/02/2024' },
      { id: 4, tipoHospedagem: 'Hotel', tipoAcomodacao: 'Casal Simples', cpf: '977.664.341-29', dataInicio:'03/02/2024', dataFinal: '13/02/2024' },
      { id: 5, tipoHospedagem: 'Pousada', tipoAcomodacao: 'Familia Simples', cpf: '999.555.333-09', dataInicio:'04/02/2024', dataFinal: '14/02/2024' },
      { id: 6, tipoHospedagem: 'Resort', tipoAcomodacao: 'Solteiro Simples', cpf: '222.333.444-09', dataInicio:'05/02/2024', dataFinal: '15/02/2024' },
      { id: 7, tipoHospedagem: 'Hotel', tipoAcomodacao: 'Casal Simples', cpf: '111.222.444-09', dataInicio:'06/02/2024', dataFinal: '16/02/2024' },
      { id: 8, tipoHospedagem: 'Pousada', tipoAcomodacao: 'Familia Simples', cpf: '888.777.321-19', dataInicio:'07/02/2024', dataFinal: '17/02/2024' },
      { id: 9, tipoHospedagem: 'Resort', tipoAcomodacao: 'Solteiro Simples', cpf: '987.664.351-09', dataInicio:'08/02/2024', dataFinal: '18/02/2024' },
      { id: 10, tipoHospedagem: 'Hotel', tipoAcomodacao: 'Casal Simples', cpf: '789.456.123-09', dataInicio:'09/02/2024', dataFinal: '19/02/2024' },
    ];

    setHospedagens(listaDeHospedagensDoBackend);
  }, []);

  const handleDelete = (id) => {
    alert(`Hospedagem com ID ${id} finalizada`);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card mx-auto my-5 p-3" style={{ maxHeight: '850px', overflowY: 'auto' }}>
          <h1 className="display-4 text-center">Listagem de Hospedagens</h1>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="IdTitular" className="form-label">ID das Hospedagens:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar por ID Hospedagem"
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="IdTitular" className="form-label">ID do Titular:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar por ID Titular"
              />
            </div>
          </div>
          <table className="table table-striped mx-auto" style={{ maxWidth: '1150px' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo de Hospedagem</th>
                <th>Tipo de Acomodação</th>
                <th>CPF Cliente</th>
                <th>Data Inicio</th>
                <th>Data Final</th>
              </tr>
            </thead>
            <tbody>
              {hospedagens.map((hospedagem) => (
                <tr key={hospedagem.id}>
                  <td>{hospedagem.id}</td>
                  <td>{hospedagem.tipoHospedagem}</td>
                  <td>{hospedagem.tipoAcomodacao}</td>
                  <td>{hospedagem.cpf}</td>
                  <td>{hospedagem.dataInicio}</td>
                  <td>{hospedagem.dataFinal}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(hospedagem.id)}
                    >
                      Finalizar Hospedagem
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListarHospedagem;
