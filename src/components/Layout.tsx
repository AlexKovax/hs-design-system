import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'

const navItems = [
  { to: '/tokens', label: 'Tokens' },
  { to: '/components', label: 'Composants' },
  { to: '/patterns', label: 'Patterns' },
  { to: '/themes', label: 'Themes' },
  { to: '/usage', label: 'Usage' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="site-logo">
            <span className="site-logo-mark" />
            HDS
          </Link>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>

          <nav className={`site-nav ${menuOpen ? 'open' : ''}`}>
            {navItems.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </NavLink>
            ))}
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Toggle dark mode"
            >
              {dark ? '☀' : '☾'}
            </button>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Outlet />
      </main>

      <footer className="site-footer">
        Hosakka Design System — Neo-brutalist, minimal, yours.
      </footer>
    </>
  )
}
