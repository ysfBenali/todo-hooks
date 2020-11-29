import React from 'react';
import Modal from 'react-modal';
import CustomButton from '../custom-components/CustomButton';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '3rem 8rem',
        borderRadius: '10px',
        border: 'none',
        textAlign: 'center'
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