import styles from './header.module.scss';

import logo from '../assets/images/logo.svg'
import iconMenu from '../assets/images/icon-menu.svg'
import iconMenuClose from '../assets/images/icon-menu-close.svg'


export function Header(){
  return(
    <header>
      <div></div>
       <img
        src={logo}
        alt="Uma letra W preta com um ponto final, sendo a logo so site"
      />

      <nav>
        <img src={iconMenu} alt="Abrir o menu hamburguer" />
        <img src={iconMenuClose} alt="Fechar o menu hamburguer" />

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#novo">Novo</a></li>
          <li><a href="#popular">Popular</a></li>
          <li><a href="#trending">Trending</a></li>
          <li><a href="#categorias">Categorias</a></li>
        </ul>
      </nav>
    </header>
  )
}