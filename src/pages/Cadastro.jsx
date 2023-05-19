import logo from '../assets/logo.png'
import cadastroImg from '../assets/cadastro.png'
import { Button, TextField } from '@mui/material';
function Cadastro() {
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ background: `url(${cadastroImg}) fixed no-repeat`, width: "calc(50% + 99px)", height: "100vh"}}>
      </div>
      <div style={{ display:'flex', flexDirection:'column', flex:1, alignItems:'center', height:'100vh', justifyContent:'center'}}>
        <img src={logo} style={{marginBottom: 29}} />
        <h1 style={{fontFamily:'Montserrat', margin: '16px 0px'}}> Criar uma conta</h1>
          <form style={{ marginTop: 12, display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
            <TextField style={{ marginBottom:8}} id="standard-basic" label="Nome Completo" variant="standard" />
            <TextField style={{marginBottom:8}} id="standard-basic" label="E-mail Institucional" variant="standard" />
            <TextField style={{ marginBottom:8}} id="standard-basic" label="Matrícula SIAPE" variant="standard" />
            <TextField style={{ marginBottom:8}} id="standard-basic" label="Username" variant="standard" />
            <TextField style={{ marginBottom:36}} id="standard-basic" label="Senha" variant="standard" />
            <div style={{display:'flex'}}>
            <Button size="large" style={{ textTransform: 'none', background: '#FFFF', fontFamily:'Montserrat', color: '#B276FF', padding: '6px 22px'}}>Cancelar</Button>
            <Button size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily:'Montserrat', color: '#FFF', padding: '6px 22px'}}>Continuar</Button>
            </div>
          </form>
       
      </div>
       
    </div>

  );
}

export default Cadastro;
