import './CadastrarProjeto.css'
import { Galeria } from '../../components/Galeria/Galeria'
import NavegadorLogado from '../../components/NavegadorLogado/NavegadorLogado'
import ModalCadastrarProjeto from '../../components/ModalCadastrarProjeto/ModalCadastrarProjeto'

export default function CadastrarProjeto(){
    return(
        <div>
            <NavegadorLogado />
            <ModalCadastrarProjeto />
            <Galeria />
        </div>
    )
}