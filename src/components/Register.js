import React from 'react';
import { Header } from './Header';

export function Register() {
  return (
    <>
      <Header />
      <div className="sign">
        <h2 className="sign__title">Регистрация</h2>
        <form className="sign__form">
          <input
            type="email"
            className="sign__input"
            placeholder="Email"
          ></input>
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
          ></input>
          <button className="sign__btn">Зарегистрироваться</button>
          <a href="/" className="sign__login">
            Уже зарегистрированы? Войти
          </a>
        </form>
      </div>
    </>
  );
}
