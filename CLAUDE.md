# Hosakka Design System (HDS)

Ce projet est le site de documentation du design system néo-brutaliste HDS.

## Stack
- **Vite + React + TypeScript**
- CSS pur (pas de Tailwind, pas de CSS-in-JS)
- React Router pour la navigation

## Structure
- `src/styles/tokens.css` — Variables CSS (le cœur du DS)
- `src/styles/base.css` — Reset et styles de base
- `src/styles/components.css` — Composants du DS (.btn, .card, .nav-link, .badge)
- `src/styles/app.css` — Styles spécifiques au site de doc
- `src/pages/` — Pages du site (Home, Tokens, Components, Patterns, Themes, Usage)
- `src/components/` — Composants React du site
- `public/ds.md` — Fichier markdown complet du DS pour les LLMs
- `public/css/` — Fichiers CSS téléchargeables (tokens, base, components)

## Conventions
- Les composants du DS utilisent des classes CSS pures (`.btn`, `.card`, etc.)
- Les variables CSS suivent le pattern `--category-name` (ex: `--color-accent`, `--space-4`)
- Les 3 variables à personnaliser par projet : `--color-accent`, `--color-accent-hover`, `--color-accent-secondary`

## Commandes
- `npm run dev` — Serveur de dev (port 5173)
- `npm run build` — Build de production
- `npm run preview` — Preview du build

## Endpoint LLM
Le fichier `/ds.md` est servi statiquement et contient l'intégralité du design system en markdown. Un agent IA peut le fetch pour obtenir tous les tokens, composants et patterns.
URL de production : `https://designsystem.hosakka.studio/ds.md`

## Fichiers CSS téléchargeables
- `https://designsystem.hosakka.studio/css/tokens.css`
- `https://designsystem.hosakka.studio/css/base.css`
- `https://designsystem.hosakka.studio/css/components.css`
