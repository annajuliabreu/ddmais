import "./Galeria.css"

export function Galeria() {
    // let Legenda = (props) => ({props.legendaTexto});
    return (
        <div className="galeria">
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/19/b2/f8/19b2f8c6d6f2fd1f30a6d95e90530945.jpg" alt="" />
                <div><span className="legenda">Plantita: sua horta divertida</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/564x/2d/39/12/2d391261f1bde79cee30c7570daa283d.jpg" alt="" />
                <div><span className="legenda">DD+: de alunos para alunos</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/87/af/91/87af913639f05e5e74037450b8c1d5ed.jpg" alt="" />
                <div><span className="legenda">Pega!</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/c6/6d/41/c66d4165221abd4555a27ab76ba343a9.jpg" alt="" />
                <div><span className="legenda">À dorê</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/564x/01/02/a1/0102a10107f3f20fb526a708f1e9b5bb.jpg" alt="" />
                <div><span className="legenda">Aqui e acolá arte em todo lugar</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/37/26/18/3726181e4e587dabdbfb56b362d3cfd4.jpg" alt="" />
                <div><span className="legenda">Linkou</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/5e/92/98/5e9298e138770877a29d069a13747436.jpg" alt="" />
                <div><span className="legenda">Redesign: Disneyplus</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/70/e6/fd/70e6fddb1ed5cece8b7aa7efc94afc6f.jpg" alt="" />
                <div><span className="legenda">Ariel</span></div>
            </div>
            <div className="box">
                <img className="img" src="https://i.pinimg.com/474x/85/62/31/856231ca7e5a389411ae0160ed74aa46.jpg" alt="" />
                <div><span className="legenda">Mural</span></div>
            </div>
        </div>
    )
}