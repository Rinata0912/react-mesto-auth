import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import logo from '../images/logo.svg';

export function Header() {
  const location = useLocation();
  let btnText = 'Выйти';
  let path = '/';

  if (location.pathname === '/signup') {
    btnText = 'Войти';
    path = '/signin';
  } else if (location.pathname === '/signin') {
    btnText = 'Зарегистрироваться';
    path = '/signup';
  }

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="логотип" className="logo__img" />
      </a>

      <Link to={path} className="header__sign">
        {btnText}
      </Link>
    </header>
  );
}
