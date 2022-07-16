import React, { useState } from 'react'
import { Context } from '../context'
import About from './About'
import Tech from './Tech'
import Buttons from './Buttons'
import Workplace from './Workplace'
import ru from '../../data/ru.json'

export default function App() {
  const [locale, setLocale] = useState(ru)

  const [w, setW] = useState(window.innerWidth)
  window.addEventListener('resize', () => {
    setW(window.innerWidth)
  })

  return (
    <Context.Provider value={{locale, setLocale}}>
      <div className="app">
        <Buttons />
        <div className="personal">
          <About />
          <Tech />
        </div>
        <Workplace org={locale.bbs} />
        <Workplace org={locale.iif} />
        {process.env.NODE_ENV === 'development' && <div className="note">{w}px</div>}
      </div>
    </Context.Provider>
  )
}
