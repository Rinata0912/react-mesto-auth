import React from 'react';
import logo from '../images/logo.svg';

export function Header({ isLogin, setIsLogin }) {
  const handleExitClick = (evt) => {
    evt.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <header className="header">
      <a href="/" className="logo">
        <img src={logo} alt="логотип" className="logo__img" />
      </a>

      <a onClick={handleExitClick} href="/" className="header__sign">
        {isLogin ? 'Выйти' : 'Войти'}
      </a>
    </header>
  );
}
