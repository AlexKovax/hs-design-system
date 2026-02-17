import CodeBlock from '../components/CodeBlock'

const colors = [
  { name: '--color-bg', value: '#FAFAFA', label: 'Fond principal' },
  { name: '--color-bg-alt', value: '#F5F5F0', label: 'Fond alternatif' },
  { name: '--color-white', value: '#FFFFFF', label: 'Blanc (cards)' },
  { name: '--color-text', value: '#1A1A1A', label: 'Texte principal' },
  { name: '--color-text-muted', value: '#666666', label: 'Texte secondaire' },
  { name: '--color-border', value: '#000000', label: 'Bordures' },
  { name: '--color-accent', value: '#FFE600', label: 'Accent' },
  { name: '--color-accent-hover', value: '#E6CF00', label: 'Accent hover' },
  { name: '--color-accent-secondary', value: '#0066FF', label: 'Secondaire' },
]

const typo = [
  { el: 'H1', font: 'Space Grotesk', size: '3rem (5xl)', weight: '700' },
  { el: 'H2', font: 'Space Grotesk', size: '1.875rem (3xl)', weight: '700' },
  { el: 'H3', font: 'Space Grotesk', size: '1.5rem (2xl)', weight: '700' },
  { el: 'H4', font: 'Space Grotesk', size: '1.25rem (xl)', weight: '700' },
  { el: 'Body', font: 'Inter', size: '1rem (base)', weight: '400' },
  { el: 'Small', font: 'Inter', size: '0.875rem (sm)', weight: '400' },
  { el: 'Code', font: 'JetBrains Mono', size: '0.9em', weight: '400' },
]

const spacings = [
  { name: '--space-1', value: '0.25rem', px: '4px' },
  { name: '--space-2', value: '0.5rem', px: '8px' },
  { name: '--space-3', value: '0.75rem', px: '12px' },
  { name: '--space-4', value: '1rem', px: '16px' },
  { name: '--space-6', value: '1.5rem', px: '24px' },
  { name: '--space-8', value: '2rem', px: '32px' },
  { name: '--space-12', value: '3rem', px: '48px' },
  { name: '--space-16', value: '4rem', px: '64px' },
  { name: '--space-24', value: '6rem', px: '96px' },
]

export default function Tokens() {
  return (
    <>
      <h1 className="page-title">Design Tokens</h1>
      <p className="page-subtitle">
        Les variables fondamentales du design system. Couleurs, typographie, espacements et effets brutalistes.
      </p>

      {/* ── COULEURS ── */}
      <section className="section">
        <h2 className="section-title">Couleurs</h2>
        <div className="swatch-grid">
          {colors.map(({ name, value, label }) => (
            <div key={name} className="swatch">
              <div className="swatch-color" style={{ backgroundColor: value }} />
              <div className="swatch-info">
                <div className="swatch-name">{label}</div>
                <div className="swatch-value">{name}: {value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TYPOGRAPHIE ── */}
      <section className="section">
        <h2 className="section-title">Typographie</h2>
        <p className="section-desc">
          Trois familles : <strong>Space Grotesk</strong> pour les titres,{' '}
          <strong>Inter</strong> pour le corps, <strong>JetBrains Mono</strong> pour le code.
        </p>

        <div className="preview-box preview-box-col" style={{ gap: 'var(--space-6)' }}>
          <h1>Heading 1 — Space Grotesk</h1>
          <h2>Heading 2 — Space Grotesk</h2>
          <h3>Heading 3 — Space Grotesk</h3>
          <h4>Heading 4 — Space Grotesk</h4>
          <p style={{ margin: 0 }}>Body text — Inter regular 16px</p>
          <p style={{ fontSize: 'var(--text-sm)', margin: 0 }}>Small text — Inter 14px</p>
          <code>code — JetBrains Mono</code>
        </div>

        <table className="token-table" style={{ marginTop: 'var(--space-6)' }}>
          <thead>
            <tr><th>Element</th><th>Font</th><th>Taille</th><th>Weight</th></tr>
          </thead>
          <tbody>
            {typo.map(({ el, font, size, weight }) => (
              <tr key={el}>
                <td><strong>{el}</strong></td>
                <td>{font}</td>
                <td><code>{size}</code></td>
                <td>{weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ── ESPACEMENTS ── */}
      <section className="section">
        <h2 className="section-title">Espacements</h2>
        <p className="section-desc">Echelle basée sur un multiple de 4px.</p>

        {spacings.map(({ name, px }) => (
          <div key={name} className="spacing-row">
            <span className="spacing-label"><code>{name}</code> ({px})</span>
            <div className="spacing-bar" style={{ width: px }} />
          </div>
        ))}
      </section>

      {/* ── EFFETS ── */}
      <section className="section">
        <h2 className="section-title">Effets brutalistes</h2>

        <div className="preview-box" style={{ gap: 'var(--space-8)' }}>
          <div style={{ width: 120, height: 80, background: 'var(--color-white)', border: 'var(--border-brutal)', boxShadow: 'var(--shadow-brutal-sm)' }}>
            <div style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>shadow-sm</div>
          </div>
          <div style={{ width: 120, height: 80, background: 'var(--color-white)', border: 'var(--border-brutal)', boxShadow: 'var(--shadow-brutal)' }}>
            <div style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>shadow</div>
          </div>
          <div style={{ width: 120, height: 80, background: 'var(--color-white)', border: 'var(--border-brutal)', boxShadow: 'var(--shadow-brutal-lg)' }}>
            <div style={{ padding: 'var(--space-3)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>shadow-lg</div>
          </div>
        </div>

        <CodeBlock code={`--shadow-brutal:    4px 4px 0 var(--color-border);
--shadow-brutal-sm: 2px 2px 0 var(--color-border);
--shadow-brutal-lg: 6px 6px 0 var(--color-border);

--border-brutal:       2px solid var(--color-border);
--border-brutal-thick: 3px solid var(--color-border);`} />
      </section>
    </>
  )
}
