import './Nav.css'

const navItems = ['Product', 'Use Cases', 'Resources', 'Pricing'] as const

function Nav() {
  return (
    <header className="nav">
      <div className="nav__inner">
        <a className="nav__logo" href="#top" aria-label="PeachWeb home">
          <span className="nav__logo-mark" aria-hidden="true" />
          <span className="nav__logo-text">PeachWeb</span>
        </a>

        <nav className="nav__menu" aria-label="Primary">
          {navItems.map((label) => (
            <button key={label} className="nav__menu-item" type="button">
              {label}
              {label !== 'Pricing' && (
                <svg
                  className="nav__chevron"
                  width="10"
                  height="10"
                  viewBox="0 0 10 10"
                  aria-hidden="true"
                >
                  <path
                    d="M2 3.5L5 6.5L8 3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </nav>

        <div className="nav__actions">
          <a className="nav__login" href="#login">
            Login
          </a>
          <a className="btn btn--ghost" href="#talk">
            Talk to Us
          </a>
          <a className="btn btn--primary" href="#start">
            Get Started
          </a>
        </div>
      </div>
    </header>
  )
}

export default Nav
