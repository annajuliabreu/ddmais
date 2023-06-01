import "./Navegador.css"
import "./logo.svg"
import { Link, NavLink } from "react-router-dom"

export function Navegador(){
    // let Botao = (props) => (<a className="link-navegador" href="https://instagram.com/ddmais.ufc">{props.linkTexto}</a>);

    return(
        <nav className="nav">
            <div className="div-right">
                <Link exact to="/home"><img className="img" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="" /></Link>

                <div className="links">
                    <NavLink 
                        exact 
                        to="/home" 
                        className="botao-explorar">
                            Home
                    </NavLink>

                    <NavLink 
                        to="/explorar" 
                        className="botao-explorar">
                            Explorar
                    </NavLink>
                </div>

                {/* <a className="botao-home" href="/ddmais">Home</a> */}
                {/* <a className="botao-explorar" href="https://instagram.com/ddmais.ufc">Explorar</a> */}
            </div>
           
           <div className="div-left">
                <Link className="botao-cadastrar" to="/criarconta">Criar conta</Link>
                <Link className="botao-login" to="/login">Login</Link>
           </div>
        </nav>
    )
}