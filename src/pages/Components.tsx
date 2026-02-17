import CodeBlock from '../components/CodeBlock'

export default function Components() {
  return (
    <>
      <h1 className="page-title">Composants</h1>
      <p className="page-subtitle">
        Les composants UI du design system. Bordures épaisses, ombres décalées, interactions tactiles.
      </p>

      {/* ── BUTTONS ── */}
      <section className="section">
        <h2 className="section-title">Button</h2>
        <p className="section-desc">
          Trois variantes (primary, secondary, outline) et trois tailles (sm, md, lg).
          Effet <strong>lift</strong> au survol, <strong>press</strong> au clic.
        </p>

        <h3 style={{ marginBottom: 'var(--space-4)' }}>Variantes</h3>
        <div className="preview-box">
          <button className="btn btn-primary btn-md">Primary</button>
          <button className="btn btn-secondary btn-md">Secondary</button>
          <button className="btn btn-outline btn-md">Outline</button>
        </div>

        <h3 style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-6)' }}>Tailles</h3>
        <div className="preview-box">
          <button className="btn btn-primary btn-sm">Small</button>
          <button className="btn btn-primary btn-md">Medium</button>
          <button className="btn btn-primary btn-lg">Large</button>
        </div>

        <div style={{ marginTop: 'var(--space-6)' }}>
          <CodeBlock code={`<!-- HTML -->
<button class="btn btn-primary btn-md">Action</button>
<button class="btn btn-secondary btn-md">Secondaire</button>
<button class="btn btn-outline btn-md">Tertiaire</button>`} lang="html" />
        </div>
      </section>

      {/* ── CARDS ── */}
      <section className="section">
        <h2 className="section-title">Card</h2>
        <p className="section-desc">
          Container brutaliste avec ombre portée. Trois variantes : default, highlight, subtle.
        </p>

        <div className="preview-box preview-box-col" style={{ gap: 'var(--space-6)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 'var(--space-6)', width: '100%' }}>
            <div className="card">
              <div className="card-header"><strong>Default Card</strong></div>
              <div className="card-body">Fond blanc, bordure noire, ombre standard.</div>
              <div className="card-footer" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>Footer</div>
            </div>

            <div className="card card-highlight">
              <div className="card-header"><strong>Highlight Card</strong></div>
              <div className="card-body">Fond accent pour attirer l'attention.</div>
            </div>

            <div className="card card-subtle">
              <div className="card-header"><strong>Subtle Card</strong></div>
              <div className="card-body">Fond alternatif, ombre réduite.</div>
            </div>
          </div>

          <h4>Interactive</h4>
          <div className="card card-interactive" style={{ maxWidth: 300 }}>
            <div className="card-body">
              Survole-moi ! Effet lift au hover, press au clic.
            </div>
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-6)' }}>
          <CodeBlock code={`<div class="card">
  <div class="card-header">Titre</div>
  <div class="card-body">Contenu</div>
  <div class="card-footer">Pied</div>
</div>

<!-- Variantes -->
<div class="card card-highlight">...</div>
<div class="card card-subtle">...</div>
<div class="card card-interactive">...</div>`} lang="html" />
        </div>
      </section>

      {/* ── NAV LINK ── */}
      <section className="section">
        <h2 className="section-title">Navigation Link</h2>
        <p className="section-desc">
          Lien avec soulignement animé. La barre apparait au survol et reste visible sur l'état actif.
        </p>

        <div className="preview-box" style={{ gap: 'var(--space-8)' }}>
          <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Hover me</a>
          <a href="#" className="nav-link active" onClick={e => e.preventDefault()}>Active</a>
          <a href="#" className="nav-link" onClick={e => e.preventDefault()}>Another link</a>
        </div>

        <div style={{ marginTop: 'var(--space-6)' }}>
          <CodeBlock code={`.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--color-accent);
  transition: width var(--transition-base);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}`} />
        </div>
      </section>

      {/* ── BADGE ── */}
      <section className="section">
        <h2 className="section-title">Badge</h2>
        <div className="preview-box">
          <span className="badge">NEW</span>
          <span className="badge" style={{ backgroundColor: 'var(--color-white)' }}>v1.0</span>
          <span className="badge" style={{ backgroundColor: 'var(--color-bg-alt)' }}>beta</span>
        </div>
      </section>
    </>
  )
}
