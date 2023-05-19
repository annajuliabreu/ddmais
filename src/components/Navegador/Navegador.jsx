import "./Navegador.css"
import "./logo.svg"

export function Navegador(){
    // let Botao = (props) => (<a className="link-navegador" href="https://instagram.com/ddmais.ufc">{props.linkTexto}</a>);

    return(
        <nav className="nav">
            <div className="div-right">
                <a href="https://instagram.com/ddmais.ufc"><img className="img" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/b82e1d124f0e3bbc205bb84a12b1b6d3342a9b91/public/logo.svg" alt="" /></a>
                <a className="botao-home" href="https://instagram.com/ddmais.ufc">Home</a>
                <a className="botao-explorar" href="https://instagram.com/ddmais.ufc">Explorar</a>
            </div>
           
           <div className="div-left">
                <a className="botao-login" href="/ddmais/login">Login</a>
                <a className="botao-cadastrar" href="ddmais/cadastro">Criar conta</a>
           </div>
        </nav>
    )
}