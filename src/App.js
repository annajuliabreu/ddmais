import './App.css';
import * as React from 'react';
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal';
import { Routes, Route, BrowserRouter} from "react-router-dom"
// import { useParams } from "react-router-dom"
import Login from './pages/Login/Login';
import CriarConta from './pages/CriarConta/CriarConta';
import Explorar from './pages/Explorar/Explorar';
import PaginaErro404 from './pages/PaginaErro404/PaginaErro404';
import CadastrarProjeto from './pages/CadastrarProjeto/CadastrarProjeto';

import { Navegador } from './components/Navegador/Navegador';
import { Modal } from './components/Modal/Modal';
import { Galeria } from './components/Galeria/Galeria';

import Logged from './pages/Logged/Logged';
import MinhaConta from './pages/MinhaConta/MinhaConta';

export function Projeto(){
  // let { id } = useParams();
  // console.log("projectId: ", id);

  return(
    <div>
      <Navegador />
      <Modal />
      <Galeria />
    </div>
  )
}

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<PaginaPrincipal />} />
          <Route exac path="/ddmais" element={<PaginaPrincipal />} />
          <Route path="/home" element={<PaginaPrincipal />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastrarProjeto" element={<CadastrarProjeto />} />
          <Route path="/logged" element={<Logged />} />
          <Route path="/minhaconta" element={<MinhaConta />} />

          <Route exact path="/projeto" element={<Projeto />}/>
          <Route exact path="/projeto/:id" element={<Projeto />} ></Route>

          <Route path="*" element={<PaginaErro404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;