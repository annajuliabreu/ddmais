import './ModalCadastrarProjeto.css'
import Icon from '@mdi/react';
import { mdiClose } from '@mdi/js';

export default function ModalCadastrarProjeto(){
    return(
        <div>
            <div>
            <div className="modal-overlay">
                <div className="voltar">
                    <a href="/"><Icon path={mdiClose} size={1} /></a>
                </div>

                <div className="modal-content">
                    
                </div>
            </div>
        </div>
        </div>
    )
}