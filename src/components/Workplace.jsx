import { createRenderEffect, createSignal, useContext } from 'solid-js'
import { dateInWords, printPeriod } from '~/calc'
import { Context } from '~/context'
import './Workplace.scss'

export default function Workplace({ org: w }) {
  const { locale: l } = useContext(Context)

  const start = () => dateInWords(w.period.start, l().lang)
  const finish = () =>
    w.period.finish
      ? dateInWords(w.period.finish, l().lang)
      : l().dictionary.tillnow

  const p = () => l()[w.key]

  const [calc, setCalc] = createSignal(false)

  createRenderEffect(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0))
    setCalc(true)
  })

  const printCalc = () =>
    printPeriod(
      w.period.start,
      w.period.finish,
      l().dictionary.and,
      l().year,
      l().month
    )

  return (
    <div className="workplace">
      <span>
        <a href={w.link} target="_blank">
          {p().title}
        </a>
      </span>
      <div className="position">{p().position}</div>
      <span>
        <hr />
      </span>
      <div className="period">
        <div>{`${start()} - ${finish()}`}</div>
        <div className="print">{calc() ? printCalc() : printCalc()}</div>
      </div>
      <div className="paragraph">{l().dictionary.r_a}:</div>
      <ul>
        {p().details.map((d) => (
          <li>{d}</li>
        ))}
      </ul>
      <div className="technologies">
        <b>{l().dictionary.technologies}: </b>
        {w.tech}
      </div>
    </div>
  )
}
