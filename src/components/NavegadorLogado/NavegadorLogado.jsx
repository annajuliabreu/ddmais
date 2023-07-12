import './NavegadorLogado.css'
import { Link, NavLink } from "react-router-dom"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import useAuth from '../../hooks/useAuth'
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';


function Admin() {
    const [age, setAge] = React.useState('');
    const { logout } = useAuth()

    const handleChange = (event) => {
        setAge(event.target.value);
    };


    return (
        <FormControl sx={{ height:'100%', borderRadius: '4px', minWidth: 72}} size="small">
            <InputLabel id="demo-select-small-label">
                <Icon path={mdiAccountCircle} 
                    size={1}
                    color="#B276FF"/>
            </InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <a href="/minhaconta">
                    <MenuItem value={10}>Minha conta</MenuItem>
                </a>
                <a href='/home'>
                    <MenuItem onClick={() => {
                        logout()
                    }} value={20}>Logout</MenuItem>
                </a>
            </Select>
        </FormControl>
    )
}

export default function NavegadorLogado() {
    return (
        <nav className="nav">
            <div className="div-right">
                <Link exact to="/logged"><img className="img" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="" /></Link>

                <div className="links">
                    <NavLink
                        exact
                        to="/logged"
                        className="botao-explorar">
                        Home
                    </NavLink>

                    <NavLink
                        to="/logged/explorar"  
                        className="botao-explorar">
                        Explorar
                    </NavLink>
                </div>

            </div>

            <div className="div-left">
                <Link className="botao-cadastrarProjeto" to="/cadastrarProjeto">Cadastrar projeto</Link>
                <Admin />
                {/* <Link className="botao-login" to="/login">Login</Link> */}
            </div>
        </nav>
    )
}