import './ExpertServices.css'

const stack = [
  { label: 'UI Blocks', accent: 'cyan' },
  { label: 'Layouts', accent: 'violet' },
  { label: 'Animations', accent: 'peach' },
  { label: '3D Models', accent: 'lavender' },
  { label: 'WebGL Effects', accent: 'cyan' },
] as const

function ExpertServices() {
  return (
    <section className="experts">
      <div className="container">
        <header className="experts__head">
          <span className="experts__eyebrow">Done For You</span>
          <h2 className="experts__headline">
            Unlocking Award Winning Websites{' '}
            <span className="serif-italic">in Minutes.</span>
          </h2>
        </header>

        <div className="experts__panel">
          <div className="experts__visual" aria-hidden="true">
            <div className="experts__orb experts__orb--violet" />
            <div className="experts__orb experts__orb--cyan" />

            <div className="experts__stack">
              <div className="experts__stack-glow" />
              <div className="experts__stack-grid">
                {stack.map((item, i) => (
                  <div
                    key={item.label}
                    className={`experts__chip experts__chip--${item.accent}`}
                    style={{ '--i': i } as React.CSSProperties}
                  >
                    <span className="experts__chip-dot" />
                    {item.label}
                  </div>
                ))}
              </div>
              <div className="experts__hand">
                <svg viewBox="0 0 200 100" fill="none">
                  <path
                    d="M10 90 C40 30, 80 30, 100 60 S 160 90, 190 30"
                    stroke="url(#hand-grad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hand-grad" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#5328ff" />
                      <stop offset="100%" stopColor="#00f0ff" />
                    </linearGradient>
                  </defs>
                  <circle cx="190" cy="30" r="6" fill="#00f0ff" />
                </svg>
              </div>
            </div>

            <div className="experts__avatars">
              <span className="experts__avatar experts__avatar--1" aria-hidden="true">A</span>
              <span className="experts__avatar experts__avatar--2" aria-hidden="true">M</span>
              <span className="experts__avatar experts__avatar--3" aria-hidden="true">K</span>
              <span className="experts__avatar experts__avatar--4" aria-hidden="true">+</span>
            </div>
          </div>

          <div className="experts__copy">
            <h3 className="experts__title">
              Get your 3D Website{' '}
              <span className="serif-italic">with our Experts.</span>
            </h3>
            <p className="experts__body">
              Our experts create stunning 3D sites quickly using a library of UI
              blocks, layouts, animations, models and 3D WebGL effects.{' '}
              <span className="experts__body-strong">
                Go Live Fast and Stand Out.
              </span>
            </p>
            <div className="experts__cta">
              <a className="btn btn--primary btn--lg" href="#book">
                Book a Call
              </a>
              <a className="btn btn--ghost btn--lg" href="#pricing">
                See Pricing
              </a>
            </div>
            <ul className="experts__bullets">
              <li>Hand-picked design partners</li>
              <li>Launch-ready in days, not months</li>
              <li>Owned by you, edit anytime</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertServices
