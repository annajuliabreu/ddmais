import { useState } from "react"
import Filtro from "../../components/Filtro/Filtro"
import { Galeria } from "../../components/Galeria/Galeria"
import Pesquisa from "../../components/Pesquisa/Pesquisa"
import "./Explorar.css"
import NavegadorLogado from "../../components/NavegadorLogado/NavegadorLogado"

export default function ExplorarLogado(){
    const [term, setTerm] = useState()
    const [property, setProperty] = useState()
    
    return(
        <div className="explorar">
            <NavegadorLogado />

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