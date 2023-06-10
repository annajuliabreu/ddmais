import './MinhaConta.css'
import NavegadorLogado from "../../components/NavegadorLogado/NavegadorLogado"
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
// import React, { useState } from 'react';


export default function MinhaConta() {
    function Conta({ conta }){
        return (
            <div className="box-minhaconta">
                <div className="infos">
                    <Icon path={mdiAccountCircle} size={5} color="#B276FF"/>
                    <h3 className="info-h3">{conta.nome}</h3>
                    <span className="info">@{conta.username}</span>
                    <span className="info">{conta.email}</span>
                    <span className="info">{conta.siape}</span>
                </div>
            </div>
        )
    }

    let conta = [
        {
            id: "1",
            nome: "Paulo Ricardo da Silva",
            username: "pauloricardo",
            email: "pauloricardo@ufc.br",
            siape: "123456",

        },
    ];

    let contas = conta.map((conta) =>(
                                <Conta 
                                    conta={conta}>
                                </Conta>
                            )
                        )
    
    console.log(contas)

    return (
        <div>
            <NavegadorLogado />
            <div className="conteudo-minhaconta">
                {contas}
            </div>
        </div>
    )
}


    // botao feito só para estudar o useState, não apagar
    // function Botao() {
    //     const [count, setCount] = useState(0);
    //     const [clicked, setClicked] = useState(false);
    //     console.log(count, clicked);

    //     const handleClick = () => {
    //         setCount(count + 1);
    //         setClicked(true);
    //     }

    //     let style = {};
    //     if (clicked === true) {
    //         style["backgroundColor"] = "#B276FF";
    //     }else{
    //         style["backgroundColor"] = "#D9BBFF";
    //     }
    //     console.log(style);

    //     return <button onClick={handleClick} style={style}>
    //         Pressed {count} times
    //     </button>
    // }