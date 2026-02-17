import { Link } from 'react-router-dom'

const sections = [
  {
    to: '/tokens',
    title: 'Design Tokens',
    desc: 'Couleurs, typographie, espacements et effets brutalistes.',
  },
  {
    to: '/components',
    title: 'Composants',
    desc: 'Buttons, Cards, Navigation Links — prêts à copier.',
  },
  {
    to: '/patterns',
    title: 'Patterns',
    desc: 'Interactions : lift, press, focus, sélection, dark mode.',
  },
  {
    to: '/themes',
    title: 'Themes',
    desc: 'Personnalise la couleur d\'accent en live. 5 palettes incluses.',
  },
  {
    to: '/usage',
    title: 'Usage',
    desc: 'Checklist, snippets CSS et guide d\'intégration rapide.',
  },
]

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1 className="hero-title">
          Un design system <span className="hero-accent">néo-brutaliste</span> minimal
        </h1>
        <p className="hero-desc">
          Bordures épaisses, ombres décalées, typographie affirmée.
          Personnalisable par projet, lisible par les humains et les machines.
        </p>
        <div className="hero-actions">
          <Link to="/tokens" className="btn btn-primary btn-lg">
            Explorer les tokens
          </Link>
          <Link to="/usage" className="btn btn-outline btn-lg">
            Guide d'utilisation
          </Link>
        </div>
      </div>

      <div className="home-grid">
        {sections.map(({ to, title, desc }) => (
          <Link key={to} to={to} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card card-interactive">
              <div className="card-body">
                <div className="home-card-title">{title}</div>
                <p className="home-card-desc">{desc}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
