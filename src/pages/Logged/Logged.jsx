import "./Logged.css"
import NavegadorLogado from "../../components/NavegadorLogado/NavegadorLogado"
import { GaleriaLogado } from "../../components/GaleriaLogado/GaleriaLogado"

export default function Logged(){
    return(
        <div>
            <NavegadorLogado />
            <GaleriaLogado />
        </div>
    )
}