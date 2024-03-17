import style from  './topNews.module.scss'

import imgOldPCs from '../assets/images/image-retro-pcs.jpg'
import imgTop10 from '../assets/images/image-top-laptops.jpg'
import imgGames from '../assets/images/image-gaming-growth.jpg'

export function TopNews() {
  return(
    <article className={style.container}>
      <div className={style.news}>
        <img src={imgOldPCs} alt="Imagem de um computador antigo." />
        <div>
          <span>01</span>
          <p><strong>Revivendo PCs antigos</strong></p>
          <p>E se PCs antigos pudessem receber peças modernas?</p>
        </div>
      </div>
      <div className={style.news}>
        <img src={imgTop10} alt="Um teclado de notebook." />
        <div>
          <span>02</span>
          <p><strong>Top 10 Laptops de 2022</strong></p>
          <p>Nossas melhores escolhas<br/>para diversas necessidades.</p>
        </div>
      </div>
      <div className={style.news}>
        <img src={imgGames} alt="Um controle de vidiogame sendo jogado para cima por uma mão masculina." />
        <div>
          <span>03</span>
          <p><strong>O Crescimento dos Jogos</strong></p>
          <p>Como a pandemia tem gerado novas opotunidades.</p>
        </div>
      </div>
    </article>
  )
}