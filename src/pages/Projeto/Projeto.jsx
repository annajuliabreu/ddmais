import { PaginaPrincipal } from "../PaginaPrincipal/PaginaPrincipal";
import { Modal } from "../../components/Modal/Modal";
import { Fragment } from "react";
import "./Projeto.css"

export default function Projeto() {

    // console.log(props);
    // let { id } = useParams();
    // console.log('id', id);

    return (
        <Fragment>
            <Modal />
            <PaginaPrincipal />
            {/* <h2>Página de ver detalhes do projeto</h2> */}
            {/* <p>Aqui mostra as infos do projetos {props.match.params.id}</p> */}
        </Fragment>
    )
}