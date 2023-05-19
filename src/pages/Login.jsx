// import logo from '../assets/logo.png'
import login from '../assets/login.png'
import { Button, TextField } from '@mui/material';

function Login() {
  return (
    <div style={{ display: 'flex', height:"100vh" }}>
      <div style={{ background: `url(${login}) fixed no-repeat`, width: "calc(50% + 99px)", height: "100vh" }}>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
        <img src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" style={{ marginBottom: 29 }} />
        <h1 style={{ fontFamily: 'Montserrat', margin: '16px 0px' }}> Olá! Entre no DD+</h1>
        <form style={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <TextField style={{ marginBottom: 8 }} id="standard-basic" label="Username" variant="standard" />
          <TextField style={{ marginBottom: 48 }} id="standard-basic" label="Senha" variant="standard" />
          <Button size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily: 'Montserrat', color: '#FFF', padding: '6px 22px' }}>Continuar</Button>
        </form>
        <span style={{ color: '#757575', fontSize: 14, margin: '24px 0px' }}> Esqueceu sua senha? </span>
        <a style={{ color: '#757575', fontSize: 14, textAlign: 'center' }} href="/ddmais/cadastro">
          Não tem uma conta ainda?
          <br />
          <span style={{ fontWeight: 'bolder', cor: '#757575' }}>Criar conta</span>
        </a>
      </div>

    </div>

  );
}

export default Login;
