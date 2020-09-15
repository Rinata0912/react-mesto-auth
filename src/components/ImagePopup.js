import React, {useCallback, useEffect} from 'react';
import popupCloseBtn from '../images/form_close-icon.svg';

export function ImagePopup({card, onClose, isOpen}) {
  const handleOnClose = useCallback((evt) => {
    if(evt.target === evt.currentTarget || evt.key === 'Escape') {
      onClose();
    }
  },[onClose]);

  useEffect(() => {
    if(isOpen) {
      document.addEventListener('keydown', handleOnClose);
    }

    return () => { 
      document.removeEventListener('keydown', handleOnClose); 
    }

  }, [isOpen, handleOnClose]);

  
  return (
    <div className={`popup js-popup-show-card ${isOpen && `popup_opened`}`} onClick={handleOnClose}>
      {card && (
        <div className="popup__container">
          <button className="popup__close-btn" type="button"><img src={popupCloseBtn} alt="закрыть форму" className="popup__close-icon" onClick={handleOnClose}/></button>
          <img className="card__img-full" src={card.link} alt="" />
          <p className="card__img-caption">{card.name}</p>
        </div>
      )}
    </div>
  );
}