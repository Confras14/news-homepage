import { useState } from 'react'

import style from './header.module.scss';

import logo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconMenuClose from '../assets/images/icon-menu-close.svg'


export function Header({menuO}) {
  const [menuOpen, setMenuOpen] = useState(true)

  let classMenuOpen = style.iconsMenuOpened
  let classMenuClose = style.iconsMenuClosed

  function handleClickIcon() {
    setMenuOpen(!menuOpen)
    menuO(menuOpen)
  }

  return (
    <header className={style.container}>
      <img
        src={logo}
        alt="Uma letra W preta com um ponto final, sendo a logo so site"
      />

      <img
          src={iconMenu}
          alt="Abrir o menu hamburguer"
          onClick={handleClickIcon}
          className={menuOpen ? classMenuOpen : classMenuClose}  
      />

      <nav className={!menuOpen ? style.navOpened : null}>
        <img
          src={iconMenuClose}
          alt="Fechar o menu hamburguer"
          onClick={handleClickIcon}
          className={!menuOpen ? classMenuOpen : classMenuClose}  
        />

        <ul className={!menuOpen ? classMenuOpen : classMenuClose}>
          <li><a href="#home">Home</a></li>
          <li><a href="#novo">Novo</a></li>
          <li><a href="#popular">Popular</a></li>
          <li><a href="#trending">Trending</a></li>
          <li><a href="#categorias">Categorias</a></li>
        </ul>
      </nav>
    </header>
  );
}