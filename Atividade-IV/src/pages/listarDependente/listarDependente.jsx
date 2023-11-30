import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';
import { Link } from 'react-router-dom';

const ListarDependentes = () => {
  const [dependentes, setDependentes] = useState([]);

  useEffect(() => {
    const listaDeDependentesDoBackend = [
      { id: 11, nome: 'João', cpf: '123.456.789-01', telefone: '(12) 99999999' },
      { id: 12, nome: 'Maria', cpf: '987.654.321-09', telefone: '(12) 88888888' },
      { id: 13, nome: 'Mario', cpf: '987.654.222-10', telefone: '(12) 77777777' },
      { id: 14, nome: 'José', cpf: '977.664.341-29', telefone: '(12) 66666666' },
      { id: 15, nome: 'Matheus', cpf: '999.555.333-09', telefone: '(12) 55555555' },
      { id: 16, nome: 'Aquiles', cpf: '222.333.444-09', telefone: '(12) 44444444' },
      { id: 17, nome: 'Eduardo', cpf: '111.222.444-09', telefone: '(12) 33333333' },
      { id: 18, nome: 'Rafael', cpf: '888.777.321-19', telefone: '(12) 22222222' },
      { id: 19, nome: 'Kiko', cpf: '987.664.351-09', telefone: '(12) 111111111' },
      { id: 20, nome: 'Andre', cpf: '789.456.123-09', telefone: '(12) 10101010' },
    ];

    setDependentes(listaDeDependentesDoBackend);
  }, []);

  const handleDelete = (id) => {
    alert(`Excluir dependente com ID ${id}`);
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="card mx-auto my-5 p-3" style={{maxHeight: '850px', overflowY: 'auto' }}>
          <h1 className="display-4 text-center">Listagem de Dependentes</h1>
          <table className="table table-striped mx-auto" style={{maxWidth: '1150px'}}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {dependentes.map((dependente) => (
                <tr key={dependente.id}>
                  <td>{dependente.id}</td>
                  <td>{dependente.nome}</td>
                  <td>{dependente.cpf}</td>
                  <td>{dependente.telefone}</td>
                  <td>
                  <Link
                      to={{
                        pathname: `/editar-dependente/${dependente.id}`,
                        state: { dependenteData: dependente },
                      }}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(dependente.id)}
                    >
                      Excluir
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

export default ListarDependentes;
