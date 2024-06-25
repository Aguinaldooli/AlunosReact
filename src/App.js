import './App.css';
import axios from 'axios';
import cadastro from './assets/cadastro.png'
import { Modal, ModalBody, ModalFooter, ModalHeader, } from "reactstrap";
import { useState, useEffect } from 'react';


function App() {

  const baseUrl = "https://localhost:44374/api/alunos"

  const [data, setData] = useState([]);

  const pedidosGet = async () => {
    await axios.get(baseUrl)
      .then(Response => {
        setData(Response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <div className="App">
      <br />
      <h3>Cadastro de Alunos</h3>
      <header>
        <img src={cadastro} alt='Cadastro' />
        <button className='btn btn-success'>Incluir novo Aluno</button>
      </header>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Idade</th>
            <th>Operação</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>
  );
}

export default App;
