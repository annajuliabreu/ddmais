import './App.css';
import { PaginaPrincipal } from './pages/PaginaPrincipal/PaginaPrincipal';
import { BrowserRouter, Routes, Route  } from "react-router-dom"
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route exac path="/ddmais" element={<PaginaPrincipal />} />
            <Route path="/ddmais/login" element={<Login />} />
            <Route path="/ddmais/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
