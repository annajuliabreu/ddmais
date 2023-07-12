import "./Galeria.css"
import React, { useCallback, useEffect, useState } from 'react';
// import BotaoEditar from '../BotaoEditar/BotaoEditar'

// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import BotaoEditar from "../BotaoEditar/BotaoEditar";
import Icon from '@mdi/react';
import { mdiPencilOutline, mdiTrashCanOutline } from '@mdi/js';
import api from "../../services/api";


export function Card({ projeto, loadProjects }) {
    const navigate = useNavigate();
    const [isShown, setIsShown] = useState(false);
    const [cover, setCover] = useState()
    useEffect(() => {
        async function getCover() {
            const { data } = await api.get(`/file/cover/${projeto._id}`)
            setCover(data)
        }
        getCover()
    }, [])

    function handleClick(e) {
        e.preventDefault();
        navigate("/projeto/" + projeto._id);
    }

    async function handleDelete() {
        await api.delete(`/project/${projeto._id}`)
        await loadProjects()

    }

    return (
        <div className="box">
                <div className="overlay-image"
                    onClick={handleClick}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                {isShown && ( 
                    <div>
                        <button type='button' className="botao-excluir" onClick={(e) => {
                            e.stopPropagation()
                            handleDelete()
                        }}> 
                            <Icon path={mdiTrashCanOutline} size={1} />
                        </button>
                        <button type='button' className="botao-editar" onClick={(e) => {
                            e.stopPropagation()
                            navigate(`/editarProjeto/${projeto._id}`)
                        }}> 
                            <Icon path={mdiPencilOutline} size={1} />
                        </button>
                    </div>
                )}
                <img className="img" src={cover?.url} alt="" />
                <div className="overlay"></div>
            </div>
            <div><span className="legenda">{projeto.title}</span></div>
        </div>
    )
}

export function GaleriaLogado({ params }) {
    const [projetos, setProjetos] = useState([])

    const loadProjects = useCallback(async () => {
        const { data } = await api.get('/projects', { params })
        setProjetos(data)
    }, [params])

    useEffect(() => {
       loadProjects()
    }, [loadProjects])

    let cards = projetos.map((projeto) => (
        <Card
            projeto={projeto} loadProjects={loadProjects} >
        </Card>
    )
    )
    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
    )
}