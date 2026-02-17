import CodeBlock from '../components/CodeBlock'

export default function Usage() {
  return (
    <>
      <h1 className="page-title">Guide d'utilisation</h1>
      <p className="page-subtitle">
        Comment integrer le design system dans un nouveau projet en quelques minutes.
      </p>

      {/* ── CHECKLIST ── */}
      <section className="section">
        <h2 className="section-title">Checklist nouveau projet</h2>
        <div className="card">
          <div className="card-body">
            <ol style={{ paddingLeft: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>Copier <code>tokens.css</code> et ajuster les 3 couleurs d'accent</li>
              <li>Copier <code>base.css</code> pour le reset et les styles globaux</li>
              <li>Copier <code>components.css</code> pour les composants prets a l'emploi</li>
              <li>Importer les Google Fonts dans le HTML</li>
              <li>Appliquer les classes de composants (<code>btn</code>, <code>card</code>, <code>nav-link</code>)</li>
              <li><em>(Optionnel)</em> Activer le dark mode via <code>data-theme="dark"</code></li>
            </ol>
          </div>
        </div>
      </section>

      {/* ── FONTS ── */}
      <section className="section">
        <h2 className="section-title">Google Fonts</h2>
        <p className="section-desc">A placer dans le <code>&lt;head&gt;</code> du HTML :</p>
        <CodeBlock lang="html" code={`<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">`} />
      </section>

      {/* ── MINIMAL SETUP ── */}
      <section className="section">
        <h2 className="section-title">Setup minimal</h2>
        <p className="section-desc">
          Trois variables a redefinir pour personnaliser un projet :
        </p>
        <CodeBlock code={`:root {
  /* Changer ces 3 valeurs par projet */
  --color-accent: #FF6B6B;
  --color-accent-hover: #E65A5A;
  --color-accent-secondary: #4ECDC4;
}`} />
      </section>

      {/* ── DARK MODE ── */}
      <section className="section">
        <h2 className="section-title">Dark mode</h2>
        <p className="section-desc">
          Deux options : automatique via media query ou manuel via attribut <code>data-theme</code>.
        </p>

        <h3 style={{ marginBottom: 'var(--space-4)' }}>Automatique</h3>
        <CodeBlock code={`@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #1A1A1A;
    --color-bg-alt: #2D2D2D;
    --color-text: #FAFAFA;
    --color-text-muted: #A0A0A0;
    --color-border: #FAFAFA;
    --color-white: #2D2D2D;
  }
}`} />

        <h3 style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-6)' }}>Manuel (toggle)</h3>
        <CodeBlock lang="js" code={`function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
}`} />
      </section>

      {/* ── LLM ENDPOINT ── */}
      <section className="section">
        <h2 className="section-title">Endpoint pour LLMs</h2>
        <p className="section-desc">
          Un fichier markdown contenant l'integralite du design system est disponible a :
        </p>
        <div className="card card-highlight">
          <div className="card-body">
            <code style={{ fontSize: 'var(--text-lg)', background: 'none', border: 'none', padding: 0 }}>
              https://designsystem.hosakka.studio/ds.md
            </code>
          </div>
        </div>
        <p style={{ marginTop: 'var(--space-4)' }}>
          Un agent IA (Claude Code, Cursor, etc.) peut fetch cette URL pour obtenir tous les tokens, composants et patterns en un seul fichier markdown structure.
        </p>

        <h3 style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-6)' }}>Fichiers CSS</h3>
        <p className="section-desc">Les 3 fichiers CSS sont aussi telechargeables directement :</p>
        <CodeBlock lang="bash" code={`curl -O https://designsystem.hosakka.studio/css/tokens.css
curl -O https://designsystem.hosakka.studio/css/base.css
curl -O https://designsystem.hosakka.studio/css/components.css`} />
      </section>

      {/* ── INTEGRATION FRAMEWORKS ── */}
      <section className="section">
        <h2 className="section-title">Integration frameworks</h2>
        <p className="section-desc">
          Le design system est framework-agnostique — il repose sur du CSS pur avec des classes utilitaires.
        </p>

        <h3 style={{ marginBottom: 'var(--space-4)' }}>React / Vue / Svelte</h3>
        <CodeBlock lang="js" code={`// Importer les fichiers CSS dans votre entry point
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'

// Utiliser les classes directement
<button className="btn btn-primary btn-md">Action</button>`} />

        <h3 style={{ marginBottom: 'var(--space-4)', marginTop: 'var(--space-6)' }}>HTML pur</h3>
        <CodeBlock lang="html" code={`<link rel="stylesheet" href="tokens.css">
<link rel="stylesheet" href="base.css">
<link rel="stylesheet" href="components.css">

<button class="btn btn-primary btn-md">Action</button>`} />
      </section>
    </>
  )
}
