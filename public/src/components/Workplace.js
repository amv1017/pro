import React, { useContext } from 'react'
import { Context } from '../context'
import { printPeriod } from '../calc'
import a from '../../data/all.json'

const datetimeOptions = {
  month: 'long',
  year: 'numeric',
}

export default function Workplace({ org: r }) {
  const { locale: l } = useContext(Context)
  const s = a[`${r.key}`].period.start
  const start = (new Date(s)).toLocaleString(l.lang, datetimeOptions)
  const f = a[`${r.key}`].period.finish
  const finish = f ? (new Date(f)).toLocaleString(l.lang, datetimeOptions) : l.w.tillnow

  return (
    <div className="workplace">
      <div className="title">{r.title}</div>
      <div className="position">{r.position}</div>
      <div className="period">
        <div>{start} - {finish}</div>
        <div className="print">{printPeriod(s, f, l.w.and, l.year, l.month)}</div>
      </div>
      <ul>{r.details?.split('\n').map(d => <li>{d}</li>)}</ul>
      <div className="tech">
        <b>{l.w.technologies}: </b>
        <span>{a[`${r.key}`].tech}</span>
      </div>
    </div>
  )
}
