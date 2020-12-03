import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../custom-components/CustomButton';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        borderRadius: '10px',
        border: 'none',
        maxWidth: 'calc(100% - 80px)',
        maxHeight: 'calc(100 % - 80px)',
        width: '600px'
    }
};

const theme = {
    bg: "#1abc9c"
}

const Alert = ({ alertMsg, closeModal }) => {
    return (
        <Modal
            isOpen={!!alertMsg}
            onRequestClose={closeModal}
            style={customStyles}
            overlayClassName="Overlay"
            ariaHideApp={false}
        >
            <h2>{alertMsg}</h2>
            <CustomButton theme={theme} onClick={closeModal}>Close</CustomButton>
        </Modal>
    )
}

export default Alert; 