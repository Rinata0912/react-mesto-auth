import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { authApi } from '../utils/api';
// import { Header } from './Header';

export function Register() {
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
      .signUp(userData)
      .then(() => history.push('/sign-in'))
      .catch((res) => console.log(res));
    setUserData({
      email: '',
      password: '',
    });
  };

  return (
    <>
      {/* <Header /> */}
      <div className="sign">
        <h2 className="sign__title">Регистрация</h2>
        <form onSubmit={handleSubmit} className="sign__form" noValidate>
          <input
            type="email"
            className="sign__input"
            placeholder="Email"
            required
            name="email"
            onChange={handleChange}
            value={userData.email}
          />
          <input
            type="password"
            className="sign__input"
            placeholder="Пароль"
            required
            name="password"
            onChange={handleChange}
            value={userData.password}
          ></input>
          <button className="sign__btn">Зарегистрироваться</button>
          <Link to="login" className="sign__login">
            Уже зарегистрированы? Войти
          </Link>
        </form>
      </div>
    </>
  );
}
