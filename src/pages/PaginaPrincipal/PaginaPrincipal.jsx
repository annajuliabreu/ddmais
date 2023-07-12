import { Fragment, useEffect } from "react";
import { Navegador } from "../../components/Navegador/Navegador";
import { Galeria } from "../../components/Galeria/Galeria";
import { useNavigate } from "react-router-dom";

export function PaginaPrincipal() {
    const navigate = useNavigate()
    useEffect(() => {
        if (localStorage.getItem('user_token')) navigate('/logged')
    }, [])
    return (
        <Fragment>
            <Navegador />
            <Galeria />
        </Fragment>
    )
}