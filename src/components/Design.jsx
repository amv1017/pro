import './Design.scss'

const Separator = ({ title }) => (
  <div className="separator">
    <div>
      <hr />
    </div>
    <span>{title}</span>
    <div>
      <hr />
    </div>
  </div>
)

export { Separator }
