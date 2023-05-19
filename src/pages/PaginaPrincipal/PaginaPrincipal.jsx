import { Fragment } from "react";
import { Navegador } from "../../components/Navegador/Navegador";
import { Galeria } from "../../components/Galeria/Galeria"

export function PaginaPrincipal() {
    return (
        <Fragment>
            <Navegador />
            <Galeria />
        </Fragment>
    )
}