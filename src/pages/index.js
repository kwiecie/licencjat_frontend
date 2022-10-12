import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"
import Head from "../components/Head"
import * as indexStyles from "../components/index.module.scss"
import index_illustration from "../images/index_illustration.svg"


const IndexPage = () => {
  return (
    <>
      <Head title="Strona główna"/>
      <Layout>
        <div className={indexStyles.content}>
          <div className={indexStyles.wrapper}>
            <h1>
              Historia polskiej mody kobiecej XX w.
            </h1>
            
            <p>
              Poznaj historię ubioru, dzięki zakładce Linia czasu. Znajdziesz w niej XX w. podzielony na dekady. Każde dziesięciolecie posiada ilustracje i opisy dotyczące najważnieszych zagadnień z danego okresu.
              W zakładce Postacie możesz przeczytać o polskich ikonach stylu.
              Po zapoznaniu się z treścią strony, możesz sprawdzić zobytą wiedzę wypełniając Quiz.
            </p>
            <button className={indexStyles.button}>
              <Link to="/timeline">
                <h2>
                  Linia czasu
                </h2>
              </Link>
            </button>
          </div>
          <img src={index_illustration} className={indexStyles.illustration}/>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
