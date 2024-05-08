import { useState, Fragment } from 'react'
import { articles } from './assets/articles'
import './zerocss.css'
import './App.css'
import NavButton from './NavButton/NavButton'
import Line from './Line/Line'

function App() {
  const [artcl, setArtcl] = useState(0)
  
  function click(n) {
    setArtcl(n)
  }

  return (
    <div className="container">
      <nav className="navigation">
        <NavButton active={artcl===0} onClick={() => click(0)} >Главная</NavButton><Line />
        <NavButton active={artcl===1} onClick={() => click(1)} >Опыт работы</NavButton><Line />
        <NavButton active={artcl===2} onClick={() => click(2)} >Навыки</NavButton><Line />
        <NavButton active={artcl===3} onClick={() => click(3)} >Портфолио</NavButton><Line />
        <NavButton active={artcl===4} onClick={() => click(4)} >Образование</NavButton><Line />
        <NavButton active={artcl===5} onClick={() => click(5)} >Контакты</NavButton>
      </nav>
      <section className="content" dangerouslySetInnerHTML={{__html: (articles[artcl].text)}}>
      </section>
    </div>
  )
}

export default App
