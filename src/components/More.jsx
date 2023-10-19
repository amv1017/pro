import { useContext } from 'solid-js'
import { Context } from '~/context'

const More = () => {
  const { locale: l } = useContext(Context)

  return (
    <div className="more">
      <div className="education">
        <b>{l().dictionary.education}:</b> {l().mai}
      </div>
      <div className="languages">
        <b>{l().dictionary.languages}:</b>
        {l().langs.map((l) => (
          <p>- {l}</p>
        ))}
      </div>
      <div className="citizenship">
        <b>{l().dictionary.citizenship}:</b> {l().dictionary.russia}
      </div>
    </div>
  )
}

export default More
