import React, { useState } from 'react';
// import popupCloseBtn from '../images/form_close-icon.svg';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  return (
    <>
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
        <Footer />

        <PopupWithForm title="Редактировать профиль" name="edit" isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
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
        </PopupWithForm>

        <PopupWithForm title="Новое место" name="add" isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
          <fieldset className="form__input-container">
            <div className="form__control">
              <input className="form__input js-input-place" type="text" placeholder="Название" name="place" required minLength="2" maxLength="30" />
              <span className="form__input-error js-input-place-error"></span>
            </div>
            <div className="form__control">
              <input className="form__input js-input-img" type="URL" placeholder="Ссылка на картинку" name="image" required />
              <span className="form__input-error js-input-img-error"></span>
            </div>
          </fieldset>
          <button className="form__submit-btn">Создать</button>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups}>
          <button className="form__submit-btn">Да</button>
        </PopupWithForm>

        <PopupWithForm title="Обновить аватар" name="updateAvatar" isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
          <fieldset className="form__input-container">
            <div className="form__control">
              <input className="form__input js-input-avatar" type="URL" placeholder="Ссылка на картинку" name="avatar" required />
              <span className="form__input-error js-input-img-error"></span>
            </div>
          </fieldset>
          <button className="form__submit-btn">Сохранить</button>
        </PopupWithForm>

        <ImagePopup />
      </div>
      <template className="card-template">
        <article className="card">
          <button className="card__delete-btn" type="button">
            <svg className="card__delete-icon" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs/>
              <path d="M2.458 18.142c.06.67.61 1.158 1.28 1.158H14.26c.67 0 1.22-.508 1.28-1.158L16.72 5.79H1.28l1.179 12.352zM16.72 1.93h-5.14v-.65C11.58.569 11.011 0 10.3 0H7.72C7.01 0 6.44.569 6.44 1.28v.65H1.28C.569 1.93 0 2.499 0 3.21c0 .711.569 1.28 1.28 1.28h15.44c.711 0 1.28-.569 1.28-1.28 0-.711-.569-1.28-1.28-1.28z" fill="#fff"/>
            </svg>
          </button>
          <a className="card__show-image" href="#"><img src="#" alt="" className="card__image" /></a>
          <div className="card__content">
            <p className="card__title"></p>
            <div className="card__like">
              <button className="card__btn">
                <svg className="card__btn-icon" width="21" height="19" viewBox="0 0 21 19" fill="currentcolor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.8 1.959l.002.001c1.942 1.923 1.944 5.079-.002 7.024l-8.439 8.44-8.414-8.415-.002-.002A5.013 5.013 0 01.5 5.482v-.004a4.93 4.93 0 011.443-3.52h0l.001-.001C3.866.016 7.022.013 8.968 1.977l.001.002 1.038 1.04.358.357.353-.361 1.036-1.058a4.986 4.986 0 017.047.002z" stroke="#000"  />
                </svg>
              </button>
              <span className="card__like-counter">1</span>
            </div>
          </div>
        </article>
      </template>
    </>
  );

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }
}

export default App;
