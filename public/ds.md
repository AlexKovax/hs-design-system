# Hosakka Design System (HDS)

> Design system néo-brutaliste, minimal et personnalisable. Ce fichier contient l'intégralité des tokens, composants et patterns. Conçu pour être lu par des humains ET des agents IA.

## Fichiers CSS à télécharger

Les 3 fichiers CSS du design system sont disponibles directement :

| Fichier | URL | Contenu |
|---------|-----|---------|
| tokens.css | `https://designsystem.hosakka.studio/css/tokens.css` | Variables CSS (couleurs, typo, espacements, effets) |
| base.css | `https://designsystem.hosakka.studio/css/base.css` | Reset, styles globaux, responsive |
| components.css | `https://designsystem.hosakka.studio/css/components.css` | Composants (.btn, .card, .nav-link, .badge) |

Pour intégrer dans un projet :
```html
<link rel="stylesheet" href="https://designsystem.hosakka.studio/css/tokens.css">
<link rel="stylesheet" href="https://designsystem.hosakka.studio/css/base.css">
<link rel="stylesheet" href="https://designsystem.hosakka.studio/css/components.css">
```

Ou télécharger et copier localement :
```bash
curl -O https://designsystem.hosakka.studio/css/tokens.css
curl -O https://designsystem.hosakka.studio/css/base.css
curl -O https://designsystem.hosakka.studio/css/components.css
```

---

## Principes de design

- **Bordures épaisses** : 2-3px, toujours noires
- **Ombres portées décalées** : profondeur sans dégradé (offset shadows)
- **Formes géométriques** : angles droits, rayons de bordure minimaux
- **Contrastes forts** : texte noir sur fond clair
- **Typographie affirmée** : titres en gras, hiérarchie claire
- **Interactions tactiles** : hover = lift, active = press
- **Accessibilité** : focus visible, contrastes suffisants, navigation clavier

---

## Design Tokens

### Couleurs

```css
:root {
  /* Fond */
  --color-bg: #FAFAFA;
  --color-bg-alt: #F5F5F0;
  --color-white: #FFFFFF;

  /* Texte */
  --color-text: #1A1A1A;
  --color-text-muted: #666666;
  --color-border: #000000;

  /* Accent — PERSONNALISER CES 3 VALEURS PAR PROJET */
  --color-accent: #FFE600;
  --color-accent-hover: #E6CF00;
  --color-accent-secondary: #0066FF;
}
```

#### Palettes d'accent pré-définies

| Nom | --color-accent | --color-accent-hover | --color-accent-secondary |
|-----|---------------|---------------------|------------------------|
| Jaune (défaut) | `#FFE600` | `#E6CF00` | `#0066FF` |
| Corail | `#FF6B6B` | `#E65A5A` | `#4ECDC4` |
| Vert menthe | `#00D9A5` | `#00C294` | `#7C4DFF` |
| Orange | `#FF9500` | `#E68600` | `#007AFF` |
| Rose | `#FF2D92` | `#E62983` | `#00C7BE` |

### Typographie

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1rem;     /* 16px */
  --text-lg: 1.125rem;   /* 18px */
  --text-xl: 1.25rem;    /* 20px */
  --text-2xl: 1.5rem;    /* 24px */
  --text-3xl: 1.875rem;  /* 30px */
  --text-4xl: 2.25rem;   /* 36px */
  --text-5xl: 3rem;      /* 48px */
}
```

| Élément | Font | Taille | Weight |
|---------|------|--------|--------|
| H1 | Space Grotesk | 3rem (5xl) | 700 |
| H2 | Space Grotesk | 1.875rem (3xl) | 700 |
| H3 | Space Grotesk | 1.5rem (2xl) | 700 |
| H4 | Space Grotesk | 1.25rem (xl) | 700 |
| Body | Inter | 1rem (base) | 400 |
| Small | Inter | 0.875rem (sm) | 400 |
| Code | JetBrains Mono | 0.9em | 400 |

### Espacements

```css
:root {
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-5: 1.25rem;   /* 20px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-10: 2.5rem;   /* 40px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
}
```

### Effets brutalistes

```css
:root {
  --shadow-brutal: 4px 4px 0 var(--color-border);
  --shadow-brutal-sm: 2px 2px 0 var(--color-border);
  --shadow-brutal-lg: 6px 6px 0 var(--color-border);

  --border-brutal: 2px solid var(--color-border);
  --border-brutal-thick: 3px solid var(--color-border);

  --radius-sm: 2px;
  --radius-md: 4px;

  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
}
```

### Conteneurs

```css
:root {
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;
}
```

---

## Composants

### Button

Trois variantes, trois tailles. Effet lift au survol, press au clic.

```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  font-family: var(--font-heading);
  font-weight: 600;
  border: var(--border-brutal);
  box-shadow: var(--shadow-brutal);
  cursor: pointer;
  transition: transform var(--transition-fast), box-shadow var(--transition-fast);
}

.btn:hover {
  transform: translate(-2px, -2px);
  box-shadow: var(--shadow-brutal-lg);
}

.btn:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}
```

| Variante | Classe | Background | Usage |
|----------|--------|------------|-------|
| Primary | `.btn-primary` | `--color-accent` | Action principale |
| Secondary | `.btn-secondary` | `--color-white` | Action secondaire |
| Outline | `.btn-outline` | transparent | Action tertiaire |

| Taille | Classe | Padding | Font size |
|--------|--------|---------|-----------|
| Small | `.btn-sm` | `--space-2` / `--space-4` | `--text-sm` |
| Medium | `.btn-md` | `--space-3` / `--space-6` | `--text-base` |
| Large | `.btn-lg` | `--space-4` / `--space-8` | `--text-lg` |

```html
<button class="btn btn-primary btn-md">Action</button>
```

### Card

Container brutaliste avec bordure et ombre décalée.

```css
.card {
  background-color: var(--color-white);
  border: var(--border-brutal);
  box-shadow: var(--shadow-brutal);
}
```

| Variante | Classe | Background | Shadow |
|----------|--------|------------|--------|
| Default | `.card` | blanc | `--shadow-brutal` |
| Highlight | `.card-highlight` | `--color-accent` | `--shadow-brutal` |
| Subtle | `.card-subtle` | `--color-bg-alt` | `--shadow-brutal-sm` |
| Interactive | `.card-interactive` | blanc | lift/press au hover/click |

Zones : `.card-header`, `.card-body`, `.card-footer` avec bordures internes.

### Navigation Link

Lien avec soulignement animé (barre de 3px qui s'étend de gauche à droite).

```css
.nav-link {
  font-family: var(--font-heading);
  font-weight: 500;
  text-decoration: none;
  color: var(--color-text);
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 3px;
  background-color: var(--color-accent);
  transition: width var(--transition-base);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}
```

### Badge

```css
.badge {
  font-family: var(--font-mono);
  font-size: var(--text-xs);
  padding: var(--space-1) var(--space-3);
  border: var(--border-brutal);
  background-color: var(--color-accent);
  font-weight: 600;
}
```

---

## Patterns d'interaction

### Effet Lift (hover)
```css
.interactive:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 var(--color-border);
}
```

### Effet Press (active)
```css
.interactive:active {
  transform: translate(2px, 2px);
  box-shadow: none;
}
```

### Focus visible
```css
:focus-visible {
  outline: 2px solid var(--color-accent-secondary);
  outline-offset: 2px;
}
```

### Sélection de texte
```css
::selection {
  background-color: var(--color-accent);
  color: var(--color-text);
}
```

---

## Dark mode

```css
[data-theme="dark"] {
  --color-bg: #1A1A1A;
  --color-bg-alt: #2D2D2D;
  --color-text: #FAFAFA;
  --color-text-muted: #A0A0A0;
  --color-border: #FAFAFA;
  --color-white: #2D2D2D;
  --color-accent-hover: #FFF033;
}
```

Toggle JS :
```js
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
}
```

---

## Responsive

Breakpoint mobile : `max-width: 768px`

```css
@media (max-width: 768px) {
  html { font-size: 15px; }
  h1 { font-size: var(--text-4xl); }
  h2 { font-size: var(--text-2xl); }
  .container { padding: 0 var(--space-4); }
}
```

---

## Google Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
```

---

## Checklist nouveau projet

1. Copier `tokens.css`, `base.css`, `components.css`
2. Ajuster les 3 variables d'accent (`--color-accent`, `--color-accent-hover`, `--color-accent-secondary`)
3. Importer les Google Fonts dans le `<head>`
4. Utiliser les classes : `.btn`, `.card`, `.nav-link`, `.badge`
5. Appliquer les patterns d'interaction (lift, press)
6. (Optionnel) Activer le dark mode via `[data-theme="dark"]`
