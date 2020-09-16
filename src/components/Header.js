import React from 'react';
import logo from '../images/logo.svg';

export function Header() {
  return(
    <header className="header">
      <a href="/" className="logo"><img src={logo} alt="логотип" className="logo__img" /></a>
    </header>
  );
}