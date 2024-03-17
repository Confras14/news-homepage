import style from './asideNews.module.scss'

export function AsideNews() {
  return(
    <aside className={style.container}>
      <span>Novo</span>

      <div>
        <div>
          <h2>Hidrogênio VS Carrps Elétricos</h2>
          <p>Os carros movidos a hidrogênio alguma vez alcançarão os veículos elétricos?</p>
        </div>
        <hr />
        <div>
          <h2>A arte gerada por IA</h2>
          <p>Quais são os possíveis efeitos adversos da geração de imagens por IA sob demanda?</p>
        </div>
        <hr />
        <div>
          <h2>O VC Funding está esgotado?</h2>
          <p>O financiamento privado por empresas de capital de risco caiu 50%.</p>
        </div>
      </div>
    </aside>
  )
}