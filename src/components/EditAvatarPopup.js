import React, { useContext, useEffect, useRef, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { PopupWithForm } from './PopupWithForm';

export function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const [ avatar, setAvatar ] = useState('');
  const currentUser = useContext(CurrentUserContext);
  const avatarInputRef = useRef();

  useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarInputRef.current.value,
    });

  }

  return(
    <PopupWithForm 
      title="Обновить аватар" 
      name="updateAvatar" 
      isOpen={isOpen} 
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__input-container">
        <div className="form__control">
          <input 
            className="form__input js-input-avatar" 
            type="URL" 
            placeholder="Ссылка на картинку" 
            name="avatar" 
            required 
            ref={avatarInputRef}
            value={avatar}
          />
          <span className="form__input-error js-input-img-error" />
        </div>
      </fieldset>
      <button className="form__submit-btn">Сохранить</button>
    </PopupWithForm>
  )
}