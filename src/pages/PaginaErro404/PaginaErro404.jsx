import "./PaginaErro404.css"
import { Link } from "react-router-dom"
import { Navegador } from "../../components/Navegador/Navegador"

export default function PaginaErro404(){
    return(
        <div className="conteudo">
            <Navegador />
            <div className="conteudo mensagem-erro404">
                <h1 className="h1">
                    Ops! Não encontramos essa página
                </h1>
                <span>
                    Parece que a página está faltando. Verifique o link ou volte para a home.
                </span>
                <Link className="botao-voltar" to="/home">Voltar para a home</Link>
            </div>
            <img className="img-erro404" src="https://raw.githubusercontent.com/annajuliabreu/ddmais/d15b23c6948a6bd3edec927aa9c7ad58095fd040/src/pages/PaginaErro404/ImgErro404.svg" alt="erro404" />
        </div>
    )
}