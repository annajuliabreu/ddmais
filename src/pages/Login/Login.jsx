// import logo from '../assets/logo.png'
import login from './login.png'
import { Button, TextField, Box } from '@mui/material';
import "./Login.css"
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import React, { useState } from 'react';

function Botao(){
    const [count, setCount] = useState(0);
    console.log(count)
    function incrementCount(){
      setCount(count + 1);
    }
    return(
      <Button onClick={incrementCount} size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily: 'Montserrat', color: '#FFF', padding: '6px 22px' }}>Continuar</Button>
    )
}

function Login() {
  return (
    <div className="div-conteudo">
      <div className="div-img" style={{ background: `url(${login}) fixed no-repeat` }}></div>

      <div className="div-voltar">
        <a href="/"><Icon path={mdiArrowLeft} size={1} /></a>
      </div>
      
      <div className="div-forms">

        <img className="div-forms-logo" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="logo dd+" />

        <h1 className="div-forms-text"> Olá! Entre no DD+</h1>

        <form className="div-forms-input">
          <Box className="div-forms-input"
            sx={{
              width: 330,
              maxWidth: '100%',
            }}
          >

            <TextField style={{ marginBottom: 8 }}
              required
              fullWidth
              id="standard-required"
              label="Username"
              variant="standard"
            />

            <TextField style={{ marginBottom: 36 }}
              required
              fullWidth
              id="standard-password-input"
              label="Senha"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />

          </Box>
          <a href="/logged">
            <Botao />
          </a>
          {/* <Button size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily: 'Montserrat', color: '#FFF', padding: '6px 22px' }}>Continuar</Button> */}
        </form>

        <span className="div-forms-span"> Esqueceu sua senha? </span>

        <a className="div-forms-a" href="/ddmais/cadastro">
          Não tem uma conta ainda?
          <br />
          <span style={{ fontWeight: 'bolder', cor: '#757575' }}>Criar conta</span>
        </a>
      </div>
    </div>

  );
}

export default Login;
