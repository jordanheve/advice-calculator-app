import { useEffect, useState } from 'react';
import './App.css'
function App() {

  const [advice, setAdvice] = useState({})
  const [fadeClass, setFadeClass] = useState(" fadeIn")

  let handleAdvice = ()=> {
    fetch('https://api.adviceslip.com/advice', {cache: 'no-cache'})
      .then(response => response.json())
      .then((data) =>
				setAdvice({ number: data.slip.id, advice: data.slip.advice })
			)
  }

  let handleClick = () => {
    setFadeClass(" fadeOut")
    setTimeout(() => {
      handleAdvice()
    }, 1000

    )
      setTimeout(()=> (setFadeClass(" fadeIn")),1500)
    }
  
    useEffect(() => {
      handleAdvice()
    }, [])

  return (
    <>
      <main className="main animated fadeIn">
        <div className="advice-container">
          <h5 className={'advice-container__number animated'+ fadeClass} >Advice #{advice.number}</h5>
          <q className={'advice-container__advice animated'+ fadeClass}>{advice.advice}</q>
        </div>
        <div className="line-divisor"></div>
        <button aria-label="Get a new advice" className="advice-btn" onClick={handleClick}>
          <i className="advice-btn__dice-icon"></i>
        </button>
      </main>
    </>
  )
}

export default App
