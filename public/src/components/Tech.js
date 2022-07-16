import ireact from '../../static/react.png'
import iredux from '../../static/redux.png'
import its from '../../static/typescript.png'
import icss from '../../static/css.png'
import ihtml from '../../static/html.png'
import ijs from '../../static/js.png'
import inode from '../../static/nodejs.png'
import itailwind from '../../static/tailwindcss.png'
import iwebpack from '../../static/webpack.png'
import ivite from '../../static/vite.png'
import ijest from '../../static/jest.png'
import imongodb from '../../static/mongodb.png'

const tech = [
  {
    title: 'JavaScript',
    src: ijs,
  },
  {
    title: 'TypeScript',
    src: its,
  },
  {
    title: 'React',
    src: ireact,
  },
  {
    title: 'Redux',
    src: iredux,
  },
  {
    title: 'HTML',
    src: ihtml,
  },
  {
    title: 'CSS',
    src: icss,
  },
  {
    title: 'TailwindCSS',
    src: itailwind,
  },
  {
    title: 'Webpack',
    src: iwebpack,
  },
  {
    title: 'Vite',
    src: ivite,
  },
  {
    title: 'Jest',
    src: ijest,
  },
  {
    title: 'Node.js',
    src: inode,
  },
  {
    title: 'MongoDB',
    src: imongodb,
  },
]

export default function Tech() {
  return (
    <div className="tech">
      {tech.map((t) =>
        <div class="info">
          <img className="icon" src={t.src} />
          <div className="title">{t.title}</div>
        </div>
      )}
    </div>
  )
}
