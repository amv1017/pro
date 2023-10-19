import { useContext } from 'solid-js'
import { Context } from '~/context'
import './Tech.scss'

export default function Tech() {
  const { all: a } = useContext(Context)

  return (
    <div className="tech">
      {a.tech.map(([t, s]) => (
        <div class="info">
          <div className="icon">
            <img className="icon-img" src={s} alt={t} />
          </div>
          <div className="title">{t}</div>
        </div>
      ))}
    </div>
  )
}
