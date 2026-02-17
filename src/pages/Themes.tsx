import { useState } from 'react'

const palettes = [
  { name: 'Jaune (default)', accent: '#FFE600', hover: '#E6CF00', secondary: '#0066FF' },
  { name: 'Corail', accent: '#FF6B6B', hover: '#E65A5A', secondary: '#4ECDC4' },
  { name: 'Vert menthe', accent: '#00D9A5', hover: '#00C294', secondary: '#7C4DFF' },
  { name: 'Orange', accent: '#FF9500', hover: '#E68600', secondary: '#007AFF' },
  { name: 'Rose', accent: '#FF2D92', hover: '#E62983', secondary: '#00C7BE' },
]

export default function Themes() {
  const [selected, setSelected] = useState(0)

  const apply = (index: number) => {
    const p = palettes[index]
    const root = document.documentElement
    root.style.setProperty('--color-accent', p.accent)
    root.style.setProperty('--color-accent-hover', p.hover)
    root.style.setProperty('--color-accent-secondary', p.secondary)
    setSelected(index)
  }

  const reset = () => {
    const root = document.documentElement
    root.style.removeProperty('--color-accent')
    root.style.removeProperty('--color-accent-hover')
    root.style.removeProperty('--color-accent-secondary')
    setSelected(0)
  }

  return (
    <>
      <h1 className="page-title">Themes</h1>
      <p className="page-subtitle">
        Chaque projet a sa propre couleur d'accent. Clique sur une palette pour la tester en live sur tout le site.
      </p>

      {/* ── PALETTE SELECTOR ── */}
      <section className="section">
        <h2 className="section-title">Palettes pre-definies</h2>

        <div className="palette-grid">
          {palettes.map((p, i) => (
            <div
              key={p.name}
              className={`card palette-card ${selected === i ? 'selected' : ''}`}
              onClick={() => apply(i)}
            >
              <div className="palette-colors">
                <div style={{ backgroundColor: p.accent }} />
                <div style={{ backgroundColor: p.hover }} />
                <div style={{ backgroundColor: p.secondary }} />
              </div>
              <div className="card-body" style={{ padding: 'var(--space-3) var(--space-4)' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 'var(--text-sm)' }}>
                  {p.name}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  {p.accent}
                </div>
              </div>
            </div>
          ))}
        </div>

        {selected !== 0 && (
          <button className="btn btn-outline btn-sm" style={{ marginTop: 'var(--space-4)' }} onClick={reset}>
            Reset au theme par defaut
          </button>
        )}
      </section>

      {/* ── PREVIEW ── */}
      <section className="section">
        <h2 className="section-title">Apercu avec le theme actif</h2>

        <div className="preview-box preview-box-col" style={{ gap: 'var(--space-6)' }}>
          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-md">Primary Button</button>
            <button className="btn btn-secondary btn-md">Secondary</button>
            <button className="btn btn-outline btn-md">Outline</button>
          </div>

          <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
            <span className="badge">Badge</span>
            <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Nav Link</a>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 'var(--space-4)', width: '100%' }}>
            <div className="card">
              <div className="card-body">Default card</div>
            </div>
            <div className="card card-highlight">
              <div className="card-body">Highlight card</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CUSTOM COLOR ── */}
      <section className="section">
        <h2 className="section-title">Personnalisation</h2>
        <p className="section-desc">
          Pour un nouveau projet, il suffit de redefinir trois variables CSS :
        </p>
        <pre><code>{`:root {
  --color-accent: ${palettes[selected].accent};
  --color-accent-hover: ${palettes[selected].hover};
  --color-accent-secondary: ${palettes[selected].secondary};
}`}</code></pre>
        <p style={{ marginTop: 'var(--space-4)' }}>
          <strong>Conseil :</strong> choisir une couleur d'accent vive et saturee. Le hover doit etre ~10% plus sombre.
          La couleur secondaire sert aux liens et au focus — elle doit contraster avec l'accent.
        </p>
      </section>
    </>
  )
}
