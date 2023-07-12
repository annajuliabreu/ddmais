import './App.css';
import * as React from 'react';
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal';
import { Routes, Route, BrowserRouter, Navigate, useParams, useNavigate } from "react-router-dom"
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

import { AuthProvider } from './contexts/auth';
import useAuth from './hooks/useAuth';
import { useEffect } from 'react';
import ExplorarLogado from './pages/ExplorarLogado/Explorar';
// import useAuth from './hooks/useAuth'

export function Projeto() {
  let { id } = useParams();

  return (
    <div>
      <Navegador />
      <Modal id={id} />
      <Galeria />
    </div>
  )
}

const Private = ({ children }) => {
  const { logged } = useAuth();

  if (!logged) {
    return <Navigate to="/ddmais" replace />
  }
  return children
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exac path="/" element={<PaginaPrincipal />} />
          <Route exac path="/ddmais" element={<PaginaPrincipal />} />
          <Route path="/home" element={<PaginaPrincipal />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logged" element={<Private><Logged /></Private>} />
          <Route path="/logged/explorar" element={<Private><ExplorarLogado /></Private>} />
          <Route path="/cadastrarProjeto" element={<Private><CadastrarProjeto /></Private>} />
          <Route path="/editarProjeto/:id" element={<Private><CadastrarProjeto /></Private>} />

          <Route path="/minhaconta" element={<Private><MinhaConta /></Private>} />

          <Route exact path="/projeto" element={<Private><Projeto /></Private>} />
          <Route exact path="/projeto/:id" element={<Private><Projeto /></Private>} />

          <Route path="*" element={<PaginaErro404 />} />
        </Routes>
      </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;