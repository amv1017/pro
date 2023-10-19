import { createRenderEffect, createSignal, useContext } from 'solid-js'
import { printAge } from '~/calc'
import { Context } from '~/context'

const Main = () => {
  const { locale: l, all: a } = useContext(Context)

  const [calc, setCalc] = createSignal(false)

  createRenderEffect(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
    setCalc(true)
  })

  const printCalc = () => printAge(a.birthday, l().lang, l().year)

  return (
    <div className="main">
      <div className="fio">{l().name}</div>
      <div className="info">
        <div className="general">
          <div className="job-n-age">
            <p>{l().job}</p>
            <p>{calc() ? printCalc() : printCalc()}</p>
          </div>
          <div className="contacts">
            <p>
              <span>{l().dictionary.email}: </span>
              <a href={`mailto:${a.email}`}>{a.email}</a>
            </p>
            <p>
              <span>{l().dictionary.phone}: </span>
              {a.phone}
            </p>
            <p>
              <span>{l().dictionary.github}: </span>
              <a href={`${a.github}`} target="_blank">
                {a.github}
              </a>
            </p>
          </div>
        </div>
        <img className="photo" src={a.photo} alt={l().firstlastname} />
      </div>
    </div>
  )
}

export default Main
