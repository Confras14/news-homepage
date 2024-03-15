import { Header } from "./components/Header";
import { MainNews } from "./components/MainNews";
import { TopNews } from "./components/TopNews";

import './global.scss'

import style from './app.module.scss'
import styleHeader from './components/header.module.scss'

export function App(){
  return(
    <body className={style.app + ' ' + styleHeader.bodyForMenuOpen}>
      <Header />
      <main>
        <MainNews />
        <TopNews />
      </main>
    </body>
  );
}