import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { authApi } from '../utils/api';

export function Login({ onLogin, setCurrentUserEmail }) {
  const [userData, setUserData] = useState({
    password: '',
    email: '',
  });
  const history = useHistory();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    authApi
      .signIn(userData)
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        authApi
          .checkToken(res.token)
          .then((res) => {
            onLogin();
            setCurrentUserEmail(res.data.email);
            history.push('/');
          })
          .catch((err) => err);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="sign">
        <h2 className="sign__title">Вход</h2>
        <form onSubmit={handleSubmit} className="sign__form">
          <input
            type="email"
            className="sign__input"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
            value={userData.email}
          ></input>
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
            required
            name="password"
            onChange={handleChange}
            value={userData.password}
          ></input>
          <button className="sign__btn">Войти</button>
        </form>
      </div>
    </>
  );
}
