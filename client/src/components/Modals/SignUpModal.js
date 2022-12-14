import React from 'react';
import './Modal.css';
import Login from '../../pages/Signup/Signup';
import { Button } from '@chakra-ui/react';

const Modal = props => {
    // if (!props.show) {
    //     return null
    // };

    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className='modal-content' onClick={e => e.stopPropagation()}>
                <Login />
                <Button size='xs' className='close-btn' onClick={props.onClose}>Close</Button>
            </div>
        </div>
    )
}

export default Modal;