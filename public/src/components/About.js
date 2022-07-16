import React, { useContext } from 'react'
import { Context } from '../context'
import { printAge } from '../calc'
import a from '../../data/all.json'
import profile from '../../static/profile_photo.jpg'

export default function About() {
  const { locale: l } = useContext(Context)

  return (
    <div className="about">
      <div className="fio">{l.name}</div>
      <div className="info">
        <div className="general">
          <div className="job-n-age">
            <p>{l.job}</p>
            <p>{printAge(a.birthday, l.lang, l.year)}</p>
          </div>
          <div className="contacts">
            <div>{l.w.email}: <a href={`mailto:${a.email}`}>{a.email}</a></div>
            <div>{l.w.phone}: {a.phone}</div>
            <div>{l.w.github}: <a href={`${a.github}`} target="_blank">{a.github}</a></div>
          </div>
        </div>
        <div className="card">
          <img className="photo" src={profile}/>
        </div>
      </div>
    </div>    
  )
}
