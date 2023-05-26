import "./PaginaErro404.css"
import "./erro404.svg"
import { Link } from "react-router-dom"

export default function PaginaErro404(){
    return(
        <div className="conteudo">
            <img src="./erro404.svg" alt="erro404" />
            <h1 className="h1">
                Ops! Não encontramos essa página
            </h1>
            <span>
                Parece que a página está faltando! Verifique o link ou volte para a home.
            </span>
            <Link className="botao-voltar" to="/home">Voltar para a home</Link>
        </div>
    )
}