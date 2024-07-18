import classes from './Modal.module.css';
import { createPortal } from 'react-dom';



const Backdrop  = () => {
    return (
        <div className={classes.backdrop} />
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
        {createPortal(<Backdrop />, portalElement)}
        {createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </>
     );
}

 
export default Modal;