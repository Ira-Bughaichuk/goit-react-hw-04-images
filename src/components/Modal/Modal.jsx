import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalDiv } from './Modal.styled';

export const Modal = ({ onCloseModal, currentImg }) => {
  useEffect(() => {
    const handleCloseEsc = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleCloseEsc);
    return () => {
      window.removeEventListener('keydown', handleCloseEsc);
    };
  }, [onCloseModal]);

  const handleCloseBackdrop = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onCloseModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleCloseBackdrop} className="overlay">
      <ModalDiv className="modal">
        <img src={currentImg} alt="" width="800" height="600" />
      </ModalDiv>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
Modal.propTypes = {
  currentImg: PropTypes.string.isRequired,
};
