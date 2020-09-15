import React from 'react';
import popupCloseBtn from '../images/form_close-icon.svg';

export function PopupWithForm(props) {
  
  const handleOnClose = React.useCallback((evt) => {
    if(evt.target === evt.currentTarget || evt.key === 'Escape') {
      props.onClose();
    }
  }, [props.onClose]);

  React.useEffect(() => {
    if(props.isOpen) {
      document.addEventListener('keydown', handleOnClose);
    }

    return () => { 
      document.removeEventListener('keydown', handleOnClose); 
    }

  }, [props.isOpen, handleOnClose]);

    return (
      <div className={`popup js-popup-${props.name} ${props.isOpen && 'popup_opened'}`} onClick={handleOnClose}>
        <div className="popup__container popup__container_size_m">
          <button className="popup__close-btn" type="button"><img src={popupCloseBtn} alt="закрыть форму" className="popup__close-icon" onClick={handleOnClose}/></button>
          <form className="form" name={`${props.name}ProfileForm`} noValidate>
            <h3 className="form__title">{props.title}</h3>
            {props.children}
          </form>
        </div>
      </div>
    );
}