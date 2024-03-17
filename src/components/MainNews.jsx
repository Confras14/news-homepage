import style from  './mainNews.module.scss'

import imgMobile from '../assets/images/image-web-3-mobile.jpg'
import imgDesktop from '../assets/images/image-web-3-desktop.jpg'

export function MainNews() {
  return(
    <article className={style.container}>
      <img
        src={imgMobile}
        className={style.imgMobile}
        alt="Varias formas geometricas coloridas."
      />
      <img
        src={imgDesktop}
        className={style.imgDesktop}
        alt="Varias formas geometricas coloridas."
      />

      <div>
        <h2>O futuro brilhante da Web 3.0?</h2>
        <div>
          <p>Nós mergulhamos na próxima evolução da web que afirma devolver o poder das plataformas para as mãos das pessoas. Mas será que ela realmente está cumprindo sua promessa?</p>
          <button>Ler Mais</button>
        </div>
      </div>
    </article>
  )
}