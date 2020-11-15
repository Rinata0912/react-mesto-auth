import React from 'react';
import { Header } from './Header';

export function Login() {
  return (
    <>
      <Header />
      <div className="sign">
        <h2 className="sign__title">Вход</h2>
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
          <button className="sign__btn">Войти</button>
        </form>
      </div>
    </>
  );
}
