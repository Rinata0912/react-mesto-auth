import React, { useState } from 'react';
// import { Header } from './Header';

export function Login() {
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
        <h2 className="sign__title">Вход</h2>
        <form className="sign__form">
          <input
            type="email"
            className="sign__input"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
          ></input>
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
            required
            name="password"
            onChange={handleChange}
          ></input>
          <button onSubmit={handleSubmit} className="sign__btn">
            Войти
          </button>
        </form>
      </div>
    </>
  );
}
