import CodeBlock from '../components/CodeBlock'

export default function Patterns() {
  return (
    <>
      <h1 className="page-title">Patterns d'interaction</h1>
      <p className="page-subtitle">
        Les micro-interactions qui donnent au design system son caractere tactile et responsive.
      </p>

      {/* ── LIFT ── */}
      <section className="section">
        <h2 className="section-title">Effet Lift (hover)</h2>
        <p className="section-desc">
          Au survol, l'element se souleve de 2px dans chaque direction et l'ombre s'agrandit.
        </p>
        <div className="preview-box">
          <div
            className="card card-interactive"
            style={{ padding: 'var(--space-6)', width: 200, textAlign: 'center' }}
          >
            Survole-moi
          </div>
        </div>
        <CodeBlock code={`.interactive:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-border);
}`} />
      </section>

      {/* ── PRESS ── */}
      <section className="section">
        <h2 className="section-title">Effet Press (active)</h2>
        <p className="section-desc">
          Au clic, l'element s'enfonce : deplacement inverse et suppression de l'ombre.
        </p>
        <div className="preview-box">
          <button className="btn btn-primary btn-lg">Clique-moi</button>
        </div>
        <CodeBlock code={`.interactive:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}`} />
      </section>

      {/* ── FOCUS ── */}
      <section className="section">
        <h2 className="section-title">Focus visible</h2>
        <p className="section-desc">
          Outline d'accessibilite avec la couleur secondaire. Visible uniquement au clavier (Tab).
        </p>
        <div className="preview-box">
          <button className="btn btn-secondary btn-md">Tab vers moi</button>
          <input
            type="text"
            placeholder="Ou ici..."
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-base)',
              padding: 'var(--space-3) var(--space-4)',
              border: 'var(--border-brutal)',
              background: 'var(--color-white)',
            }}
          />
        </div>
        <CodeBlock code={`:focus-visible {
  outline: 2px solid var(--color-accent-secondary);
  outline-offset: 2px;
}`} />
      </section>

      {/* ── SELECTION ── */}
      <section className="section">
        <h2 className="section-title">Selection de texte</h2>
        <p className="section-desc">
          La selection utilise la couleur d'accent. Essaie de selectionner ce texte :
        </p>
        <div className="preview-box preview-box-col">
          <p style={{ margin: 0, fontSize: 'var(--text-lg)' }}>
            Le neo-brutalisme ouvre de nouvelles perspectives pour reinventer les interfaces utilisateur
            et encourager l'innovation en design interactif.
          </p>
        </div>
        <CodeBlock code={`::selection {
  background-color: var(--color-accent);
  color: var(--color-text);
}`} />
      </section>

      {/* ── UNDERLINE ANIMATION ── */}
      <section className="section">
        <h2 className="section-title">Soulignement anime</h2>
        <p className="section-desc">
          Barre de 3px qui s'etend de gauche a droite au survol via pseudo-element ::after.
        </p>
        <div className="preview-box" style={{ gap: 'var(--space-8)' }}>
          <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Documentation</a>
          <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Composants</a>
          <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Tokens</a>
        </div>
      </section>
    </>
  )
}
