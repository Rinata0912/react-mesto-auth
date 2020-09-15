import React, {useCallback, useEffect} from 'react';
import popupCloseBtn from '../images/form_close-icon.svg';

export function PopupWithForm({title, name, isOpen, onClose, children}) {
  
  const handleOnClose = useCallback((evt) => {
    onClose(evt);
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
      <div className={`popup js-popup-${name} ${isOpen && 'popup_opened'}`} onClick={handleOnClose}>
        <div className="popup__container popup__container_size_m">
          <button className="popup__close-btn" type="button"><img src={popupCloseBtn} alt="закрыть форму" className="popup__close-icon" onClick={handleOnClose}/></button>
          <form className="form" name={`${name}ProfileForm`} noValidate>
            <h3 className="form__title">{title}</h3>
            {children}
          </form>
        </div>
      </div>
    );
}