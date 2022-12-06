import * as React from 'react';
import './SignUp.css';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import google from '../../assets/img/icons8-logo-de-google.svg';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <AccountCircleIcon/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Typography>

        <h2>¡Bienvenido!</h2>

        <div className='container-Campus'>

            <div  className="Campus-Email go">
                <label htmlFor="correo" className='title-campus'>Email</label>
                <input type="email" className="campus pe" name="" id="correo" placeholder='Ingresa tú correo'/>
            </div>

            <div className="Campus-Password go">
                <label htmlFor="contraseña" className='title-campus'>Constraseña</label>
                <input type="password" name=""  className="campus pe" id="contraseña" placeholder='Ingresa tú contraseña' />
            </div>

            <div className='recupertation'>
                <div className="recupertion-checkbox">
                    <input type="checkbox" name="" id="remember" />
                    <label htmlFor="remember" className='rem'>Recordarme</label>
                </div>

                <div className="revovery-password">
                    <a href='Hola' className='rem'>Recuperar Contraseña</a>
                </div>
            </div>
            
            <div className='btn-signup go'>
                <a className="btn pe" id="iniciar" href="Hola">Iniciar Sesión</a>
                <a className="btn pe" id="iniciar-google" href="Hola"><img  className="icon-google" src={google} alt="google"/>Google</a>
            </div>

            <div>
              <a className="btn-regist pe" id="iniciar" href='Hola'>Registrarse</a>
            </div>
                
        </div>
        </Typography>
  
        </Box>
      </Modal>
    </div>
  );
}