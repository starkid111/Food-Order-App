import classes from './Modal.module.css';
import { createPortal } from 'react-dom';



const Backdrop  = (props) => {
    return (
        <div className={classes.backdrop}  onClick={props.onClose}/>
    )
}


const ModalOverlays = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}


const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    return ( 
        <>
        {createPortal(<Backdrop  onClose = {props.onClose}/>, portalElement)}
        {createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </>
     );
}

 
export default Modal;