import React from 'react';
import popupCloseBtn from '../images/form_close-icon.svg';

export function ImagePopup() {
    return (
        <div className="popup js-popup-show-card">
            <div className="popup__container">
            <button className="popup__close-btn" type="button"><img src={popupCloseBtn} alt="закрыть форму" className="popup__close-icon" /></button>
            <img className="card__img-full" src="#" alt="" />
            <p className="card__img-caption"></p>
            </div>
        </div>
    );
}