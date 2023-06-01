import { Link } from "react-router-dom"
import "./Modal.css"
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';


export function Modal() {
    return (
        <div>
            <div className="modal-overlay">
                <div className="voltar">
                    <a href="/"><Icon path={mdiClose} size={1} /></a>
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
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1d473a140334577.623ff4e98fed6.gif" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/dd76ef140334577.623ff4e992744.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/65118c140334577.623ff4e9911dd.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1fde38140334577.623ff4e993459.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/1cb233140334577.623ff4e990c45.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/689052140334577.623ff4e992e9b.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/687c7f140334577.623ff4e9906bb.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/705479140334577.623ff4e994f8e.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/14d3dc140334577.623ff4e98f8a7.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/25994e140334577.623ff4e996d77.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d1e505140334577.623ff4e992032.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/e64eef140334577.623ff4e9972f3.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/8df50e140334577.623ff4e9954fc.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0a3525140334577.623ff4e996813.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/eb0500140334577.623ff4e993969.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a73584140334577.623ff4e995bba.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/6e82fb140334577.623ff4e994830.png" alt="" />
                        <img className="imagem" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/bf1227140334577.623ff4e996123.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}