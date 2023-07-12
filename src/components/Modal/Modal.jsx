import { Link } from "react-router-dom"
import "./Modal.css"
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import { useEffect, useState } from "react";
import api from "../../services/api";


export function Modal({ id }) {
    const [projeto, setProjeto] = useState(null)
    const [images, setImages] = useState([])

    useEffect(() => {
        async function loadProject() {
            const { data } = await api.get(`/project/${id}`)
            const { data: images } = await api.get(`/file/${id}`)
            setProjeto(data || null)
            setImages(images)
        }
        loadProject()
    }, [id])

    if(!projeto) return null

    
    

    return (
        <div>
            <div className="modal-overlay">
                <div className="voltar">
                    <a href="/"><Icon path={mdiClose} size={1} /></a>
                </div>

                <div className="modal-content">
                    <div className="modal-info">
                        <h1 className="h1-title">{projeto.title}</h1>
                        <div className="hr"></div>
                        <span className="project-desc" >{projeto.description}</span>
                        <div className="div-tags">
                            {projeto.years.map((item) => <Link className="tags" to="/">{item}</Link>)}
                            {projeto.subjects.map((item) => <Link className="tags" to="/">{item}</Link>)}
                            {projeto.tools.map((item) => <Link className="tags" to="/">{item}</Link>)}
                            {projeto.creationFields.map((item) => <Link className="tags" to="/">{item}</Link>)}
                            {projeto.methodology.map((item) => <Link className="tags" to="/">{item}</Link>)}
                        </div>
                    </div>

                    <div className="modal-imagem">
                        {images.map(({ url }) => <img className="imagem" src={`${url}`} alt="" />)}
                    </div>
                </div>
            </div>
        </div>
    )
}