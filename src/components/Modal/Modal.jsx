import { Link } from "react-router-dom"
import "./Modal.css"
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';
import img1 from "./img1.png";

export function Modal(){
    return (
        <div>
            <div className="modal-overlay">
                <div className="voltar">
                    <a href="/home"><Icon path={mdiClose} size={1} /></a>
                </div>

                <div className="modal-content">
                    <div className="modal-info">
                        <h1 className="h1-title">DD+</h1>
                        <div className="hr"></div>
                        <span>O DD+ surge com o objetivo de levar o Design Digital para o público universitário e popular, comunicando-o através das experiências geradas pelo estudo no curso de Design Digital. <br /> <br />
                            O propósito do projeto consiste em gerar uma conexão entre os alunos da Universidade Federal do Ceará - Campus Quixadá, professores e o público em geral interessado, através da disseminação do que o Design significa e o que representa mediante as criações que o curso de Design Digital promove por meio dos estudantes. Sendo dessa forma, uma ponte comunicacional com o objetivo de desmistificar e compartilhar o design e suas possibilidades criativas através das exposições de projetos pessoais e acadêmicos dos alunos do curso de Design Digital, buscando facilitar e descomplicar o design e torná-lo mais popular e acessível para todos através da plataforma. <br /> <br />
                            Esse projeto foi desenvolvido para a disciplina de Direção de Arte do curso de Design Digital, UFC - Quixadá. <br /> <br />
                            Alunos autores do projeto: Ana Carolina Oliveira, Anna Julia Abreu, Guilherme Mendes, Ariadna Cavalcante, João Pedro Moraes</span>
                        <div className="div-tags">
                            <Link className="tags" to="/">2021</Link>
                            <Link className="tags" to="/">Direção de Arte</Link>
                            <Link className="tags" to="/">Identidade Visual</Link>
                        </div>
                    </div>

                    <div className="modal-imagem">
                        <img className="imagem" src={img1} alt="" />
                        <img className="imagem" src={img1} alt="" />
                        <img className="imagem" src={img1} alt="" />
                        <img className="imagem" src={img1} alt="" />
                        <img className="imagem" src={img1} alt="" />
                        <img className="imagem" src={img1} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}