import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

const Backdrop= (props)=>{
    return<div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlays=(props)=>{
    return<div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

export default function Modal(props){

    const portalElement=document.getElementById('overlays');

    return(
        <>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
        {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>, portalElement)}
        </>
    )
}