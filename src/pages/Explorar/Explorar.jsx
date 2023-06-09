import { useState } from "react"
import Filtro from "../../components/Filtro/Filtro"
import { Galeria } from "../../components/Galeria/Galeria"
import { Navegador } from "../../components/Navegador/Navegador"
import Pesquisa from "../../components/Pesquisa/Pesquisa"
import api from "../../services/api"
import "./Explorar.css"

export default function Explorar(){
    const [term, setTerm] = useState()
    const [property, setProperty] = useState()
    
    return(
        <div className="explorar">
            <Navegador />

            <div className="pesquisa">
                <Filtro value={property} onChange={(value) => setProperty(value)} />
                <Pesquisa value={term} onChange={(value) => setTerm(value)} />
            </div>

            <div className="galeria-explorar">
                <Galeria params={{ term, property }} />
            </div>
        </div>
    )
}