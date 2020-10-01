import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupWithForm } from './PopupWithForm';
import { ImagePopup } from './ImagePopup';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { api } from '../utils/api';
import { EditProfilePopup } from './EditProfilePopup';
import { EditAvatarPopup } from './EditAvatarPopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState();
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api.getUserInfo()
      .then(value => {
        setCurrentUser(value);
      })
  }, []);


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onCardClick={handleCardClick} 
          onEditProfile={handleEditProfileClick} 
          onAddPlace={handleAddPlaceClick} 
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />

        <EditProfilePopup onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser}/>

        <PopupWithForm 
          title="Новое место" 
          name="add" 
          isOpen={isAddPlacePopupOpen} 
          onClose={closeAllPopups}>
          <fieldset className="form__input-container">
            <div className="form__control">
              <input 
                className="form__input js-input-place" 
                type="text" placeholder="Название" 
                name="place" 
                required 
                minLength="2" 
                maxLength="30" />
              <span className="form__input-error js-input-place-error" />
            </div>
            <div className="form__control">
              <input 
                className="form__input js-input-img" 
                type="URL" 
                placeholder="Ссылка на картинку" 
                name="image" 
                required />
              <span className="form__input-error js-input-img-error" />
            </div>
          </fieldset>
          <button className="form__submit-btn">Создать</button>
        </PopupWithForm>

        <PopupWithForm title="Вы уверены?" name="confirm" onClose={closeAllPopups}>
          <button className="form__submit-btn">Да</button>
        </PopupWithForm>

        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar}/>

        <ImagePopup card={selectedCard} isOpen={!!selectedCard} onClose={closeAllPopups}/>
      </div>
    </ CurrentUserContext.Provider>
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
    setSelectedCard('');
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleUpdateUser({name, about}) {
    api.editProfileInfo(name, about).then((newUserInfo) => {
      setCurrentUser(newUserInfo);
      closeAllPopups();
    })
  }

  function handleUpdateAvatar({avatar}) {
    api.updateAvatar(avatar).then((newAvatar) => {
      setCurrentUser(newAvatar);
      closeAllPopups();
    })
  }
}

export default App;
