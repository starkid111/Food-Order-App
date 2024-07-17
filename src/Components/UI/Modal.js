import classes from './Modal.module.css';



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



const Modal = () => {
    return ( 
        <>
        </>
     );
}
 
export default Modal;