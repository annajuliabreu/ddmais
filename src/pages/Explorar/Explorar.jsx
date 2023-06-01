import Filtro from "../../components/Filtro/Filtro"
import { Galeria } from "../../components/Galeria/Galeria"
import { Navegador } from "../../components/Navegador/Navegador"
import Pesquisa from "../../components/Pesquisa/Pesquisa"
import "./Explorar.css"

export default function Explorar(){
    return(
        <div className="explorar">
            <Navegador />

            <div className="pesquisa">
                <Filtro />
                <Pesquisa />
            </div>

            <div className="galeria-explorar">
                <Galeria />
            </div>
        </div>
    )
}