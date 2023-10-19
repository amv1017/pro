import { createRenderEffect, createSignal } from 'solid-js'
import Buttons from '~/components/Buttons'
import { Separator } from '~/components/Design'
import Personal from '~/components/Personal'
import Tech from '~/components/Tech'
import Workplace from '~/components/Workplace'
import { Context } from '~/context'
import all from '~/data/all.json'
import en from '~/data/en.json'
import ru from '~/data/ru.json'
import './style.scss'

export default function Home() {
  const [locale, setLocale] = createSignal()

  createRenderEffect(() => {
    setLocale(ru)
  })

  return (
    <div className="app">
      <Context.Provider value={{ locale, setLocale, ru, en, all }}>
        <Personal />
        <Tech />
        <Separator title={() => locale().dictionary.experience} />
        <Workplace org={all.bbs} />
        <Workplace org={all.iif} />
        <Buttons />
      </Context.Provider>
    </div>
  )
}
