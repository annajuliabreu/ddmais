// import { PaginaPrincipal } from "../PaginaPrincipal/PaginaPrincipal";

export default function Projeto(props){
    console.log(props);
    return(
        <div>
            <h2>Página de ver detalhes do projeto</h2>
            {/* <p>Aqui mostra as infos do projetos {props.match.params.id}</p> */}
        </div>
    )
}

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// // import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: '90%',
//     height: '90%',
//     bgcolor: 'background.paper',
//     boxShadow: 24,
//     p: 4,
// };

// export function BasicModal() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             {/* <PaginaPrincipal /> */}
//             <Button onClick={handleOpen}>Open modal</Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     {/* <Typography id="modal-modal-title" variant="h6" component="h2">
//               Text in a modal
//             </Typography>
//             <Typography id="modal-modal-description" sx={{ mt: 2 }}>
//               Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//             </Typography> */}
//                 </Box>
//             </Modal>
//         </div>
//     );
// }
