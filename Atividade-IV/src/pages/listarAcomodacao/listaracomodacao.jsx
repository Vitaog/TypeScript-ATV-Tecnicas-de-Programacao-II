import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';
import { Link } from 'react-router-dom';

const ListarAcomodacao = () => {
  const [acomodacoes, setAcomodacoes] = useState([]);

  useEffect(() => {
    const listaDeAcomodacoesDoBackend = [
      { id: 1, nome: 'Casal Simples', camaSolteiro: 0, camaCasal: 1, suite: 1, climatizacao: true, garagem: 1 },
      { id: 2, nome: 'Família Simples', camaSolteiro: 2, camaCasal: 1, suite: 1, climatizacao: true, garagem: 1 },
      { id: 3, nome: 'Família Mais', camaSolteiro: 5, camaCasal: 1, suite: 2, climatizacao: true, garagem: 2 },
      { id: 4, nome: 'Família Super', camaSolteiro: 6, camaCasal: 2, suite: 3, climatizacao: true, garagem: 2 },
      { id: 5, nome: 'Solteiro Simples', camaSolteiro: 1, camaCasal: 0, suite: 1, climatizacao: true, garagem: 0 },
      { id: 6, nome: 'Solteiro Mais', camaSolteiro: 0, camaCasal: 1, suite: 1, climatizacao: true, garagem: 1 },
    ];

    setAcomodacoes(listaDeAcomodacoesDoBackend);
  }, []);

  const handleDelete = (id) => {
    alert(`Excluir acomodação com ID ${id}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card mx-auto my-5 p-3" style={{ maxHeight: '850px', overflowY: 'auto' }}>
          <h1 className="display-4 text-center">Listagem de Acomodações</h1>
          <div className="col-md-3">
            <div className="mb-3">
              <label htmlFor="IdAcomodacao" className="form-label">ID da Acomodação:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Pesquisar por ID Acomodação"
              />
            </div>
          </div>
          <table className="table table-striped mx-auto" style={{ maxWidth: '1150px' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Cama Solteiro</th>
                <th>Cama Casal</th>
                <th>Suíte</th>
                <th>Climatização</th>
                <th>Garagem</th>
              </tr>
            </thead>
            <tbody>
              {acomodacoes.map((acomodacao) => (
                <tr key={acomodacao.id}>
                  <td>{acomodacao.id}</td>
                  <td>{acomodacao.nome}</td>
                  <td>{acomodacao.camaSolteiro}</td>
                  <td>{acomodacao.camaCasal}</td>
                  <td>{acomodacao.suite}</td>
                  <td>{acomodacao.climatizacao ? 'Sim' : 'Não'}</td>
                  <td>{acomodacao.garagem}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListarAcomodacao;
