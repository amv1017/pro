import { createSignal, useContext } from 'solid-js'
import { Context } from '~/context'
import './Buttons.scss'

const RU = 'RU'
const EN = 'EN'

export default function Buttons() {
  const { setLocale, ru, en } = useContext(Context)
  const [toggle, setToggle] = createSignal(RU)

  return (
    <div className="btns">
      <button
        className="btnloc"
        onClick={() => {
          setLocale(ru)
          setToggle(RU)
        }}
        disabled={toggle() === RU}
      >
        {RU}
      </button>
      <button
        className="btnloc"
        onClick={() => {
          setLocale(en)
          setToggle(EN)
        }}
        disabled={toggle() === EN}
      >
        {EN}
      </button>
    </div>
  )
}
