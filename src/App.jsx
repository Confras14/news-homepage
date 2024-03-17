import { useState } from 'react'

import { Header } from "./components/Header";
import { MainNews } from "./components/MainNews";
import { AsideNews } from "./components/AsideNews";
import { TopNews } from "./components/TopNews";

import './global.scss'

import style from './app.module.scss'

export function App(){
  const [menuOpen, setMenuOpen] = useState(false)
  
  function handleMenu(a) {
    setMenuOpen(a)
    console.log(a)
  }

  return(
    <body className={`${style.app} ${menuOpen ? style.colorFilterBody : ``}`}>
      <Header menuO={handleMenu} />
      <main>
        <div>
          <MainNews />
          <AsideNews />
        </div>
        <TopNews />
      </main>
    </body>
  );
}