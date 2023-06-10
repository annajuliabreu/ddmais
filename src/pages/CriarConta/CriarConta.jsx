// import logo from '../assets/logo.png'
import cadastroImg from './CriarConta.png'
import { Button, TextField, Box } from '@mui/material';
import "./CriarConta.css"
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';
import {  } from 'react-hook-form';

function FormsCriarConta() {

  return (

    <form className="div-forms-input">
      <Box className="div-forms-input"
        sx={{
          width: 330,
          maxWidth: '100%',
        }}
      >

        <TextField name="nome" style={{ marginBottom: 8 } }
          required
          fullWidth
          id="standard-required"
          label="Nome completo"
          variant="standard"
        />

        <TextField name="email" style={{ marginBottom: 8 }}
          required
          fullWidth
          id="standard-required"
          label="E-mail institucional"
          variant="standard"
        />

        <TextField name="siape" style={{ marginBottom: 4 }}
          required
          fullWidth
          id="standard-required"
          label="Matricula SIAPE"
          helperText="A matrícula deve ser informada sem o dígito verificador"
          variant="standard"
        />

        <TextField name="username" style={{ marginBottom: 8 }}
          required
          fullWidth
          id="standard-required"
          label="Username"
          variant="standard"
        />

        <TextField name="senha" style={{ marginBottom: 36 }}
          required
          fullWidth
          id="standard-password-input"
          label="Senha"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />

      </Box>
      <div className="div-forms-botao">
        <a href="/">
          <Button size="large" style={{ textTransform: 'none', background: '#FFFF', fontFamily: 'Montserrat', color: '#B276FF', padding: '6px 22px' }}>Cancelar</Button>
        </a>
        <Button type="submit" size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily: 'Montserrat', color: '#FFF', padding: '6px 22px' }}>Continuar</Button>
      </div>
    </form>
  )
}

function CriarConta() {
  return (
    <div className="div-conteudo">
      <div className="div-img" style={{ background: `url(${cadastroImg}) fixed no-repeat` }}></div>

      <div className="div-voltar">
        <a href="/"><Icon path={mdiArrowLeft} size={1} /></a>
      </div>

      <div className="div-forms">
        <img className="div-forms-logo" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="logo dd+" />

        <h1 className="div-forms-text"> Criar uma conta</h1>

        <FormsCriarConta />
      </div>

    </div>

  );
}

export default CriarConta;


// // import logo from '../assets/logo.png'
// import cadastroImg from './CriarConta.png'
// import { Button, TextField, Box } from '@mui/material';
// import "./CriarConta.css"
// import Icon from '@mdi/react';
// import { mdiArrowLeft } from '@mdi/js';
// import { useForm } from 'react-hook-form'

// function FormsCriarConta() {
//   const {register, handleSubmit} = useForm(); 
//   const onSubmit = (data) => {console.log(data)}

//   return (

//     <form className="div-forms-input" onSubmit={handleSubmit(onSubmit)}>
//       <Box className="div-forms-input"
//         sx={{
//           width: 330,
//           maxWidth: '100%',
//         }}
//       >

//         <TextField ref={register} name="nome" style={{ marginBottom: 8 } }
//           required
//           fullWidth
//           id="standard-required"
//           label="Nome completo"
//           variant="standard"
//         />

//         <TextField ref={register} name="email" style={{ marginBottom: 8 }}
//           required
//           fullWidth
//           id="standard-required"
//           label="E-mail institucional"
//           variant="standard"
//         />

//         <TextField ref={register} name="siape" style={{ marginBottom: 4 }}
//           required
//           fullWidth
//           id="standard-required"
//           label="Matricula SIAPE"
//           helperText="A matrícula deve ser informada sem o dígito verificador"
//           variant="standard"
//         />

//         <TextField ref={register} name="username" style={{ marginBottom: 8 }}
//           required
//           fullWidth
//           id="standard-required"
//           label="Username"
//           variant="standard"
//         />

//         <TextField ref={register} name="senha" style={{ marginBottom: 36 }}
//           required
//           fullWidth
//           id="standard-password-input"
//           label="Senha"
//           type="password"
//           autoComplete="current-password"
//           variant="standard"
//         />

//       </Box>
//       <div className="div-forms-botao">
//         <a href="/">
//           <Button size="large" style={{ textTransform: 'none', background: '#FFFF', fontFamily: 'Montserrat', color: '#B276FF', padding: '6px 22px' }}>Cancelar</Button>
//         </a>
//         <Button type="submit" size="large" style={{ textTransform: 'none', background: '#B276FF', fontFamily: 'Montserrat', color: '#FFF', padding: '6px 22px' }}>Continuar</Button>
//       </div>
//     </form>
//   )
// }

// function CriarConta() {
//   return (
//     <div className="div-conteudo">
//       <div className="div-img" style={{ background: `url(${cadastroImg}) fixed no-repeat` }}></div>

//       <div className="div-voltar">
//         <a href="/"><Icon path={mdiArrowLeft} size={1} /></a>
//       </div>

//       <div className="div-forms">
//         <img className="div-forms-logo" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="logo dd+" />

//         <h1 className="div-forms-text"> Criar uma conta</h1>

//         <FormsCriarConta />
//       </div>

//     </div>

//   );
// }

// export default CriarConta;
