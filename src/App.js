import './App.css';
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from './pages/Login/Login';
import CriarConta from './pages/CriarConta/CriarConta';
import Explorar from './pages/Explorar/Explorar';
import Projeto from './pages/Projeto/Projeto';
import PaginaErro404 from './pages/PaginaErro404/PaginaErro404';
// import history from './history'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exac path="/" element={<PaginaPrincipal />} />
          <Route path="/home" element={<PaginaPrincipal />} />
          <Route path="/explorar" element={<Explorar />} />
          <Route path="/criarconta" element={<CriarConta />} />
          <Route path="/login" element={<Login />} />

          <Route exact path="/projeto" element={<Projeto />}/>
          {/* <Route path="/projeto/:id" element={<Projeto />}></Route> */}

          {/* Na configuração da rota, coloca o nome do 
          parâmetro no final do path junto com dois pontos(:). 
          Ex.: path="/:id" */}
          <Route exact path="/projeto/:id" component={Projeto}></Route>

          <Route path="*" element={<PaginaErro404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;