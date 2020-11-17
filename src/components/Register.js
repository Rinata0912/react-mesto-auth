import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { Header } from './Header';

export function Register() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(userData);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="sign">
        <h2 className="sign__title">Регистрация</h2>
        <form className="sign__form" noValidate>
          <input
            type="email"
            className="sign__input"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
          />
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
            required
            name="password"
            onChange={handleChange}
          ></input>
          <button onSubmit={handleSubmit} className="sign__btn">
            Зарегистрироваться
          </button>
          <Link to="login" className="sign__login">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
    </>
  );
}
