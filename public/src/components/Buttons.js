import React, { useContext, useState } from 'react'
import { Context } from '../context'
import ru from '../../data/ru.json'
import en from '../../data/en.json'

export default function Buttons() {
  const { setLocale } = useContext(Context)
  const [toggle, setToggle] = useState(0)

  return (
    <div className="btns">
      <button className="btnloc" onClick={() => {
        setLocale(ru)
        setToggle(0)
      }} disabled={toggle === 0}>RU</button>
      <button className="btnloc" onClick={() => {
        setLocale(en)
        setToggle(1)
      }} disabled={toggle === 1}>EN</button>
    </div>
  )
}
