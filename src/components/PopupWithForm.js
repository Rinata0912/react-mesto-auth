import React from 'react';
import popupCloseBtn from '../images/form_close-icon.svg';

export function PopupWithForm(props) {
    return (
        <div className={`popup js-popup-${props.name}`}>
          <div className="popup__container popup__container_size_m">
            <button className="popup__close-btn" type="button"><img src={popupCloseBtn} alt="закрыть форму" className="popup__close-icon" /></button>
            <form className="form" name={`${props.name}ProfileForm`} noValidate>
              <h3 className="form__title">{props.title}</h3>
              <fieldset className="form__input-container">
                <div className="form__control">
                  <input className="form__input js-input-name" type="text" placeholder="Имя" name="name" required minLength="2" maxLength="40" />
                  <span className="form__input-error js-input-name-error"></span>
                </div>
                <div className="form__control">
                  <input className="form__input js-input-job" type="text" placeholder="О себе" name="job" required minLength="2" maxLength="200" />
                  <span className="form__input-error js-input-job-error"></span>
                </div>
              </fieldset>
              <button className="form__submit-btn">Сохранить</button>
            </form>
          </div>
        </div>
    );
}