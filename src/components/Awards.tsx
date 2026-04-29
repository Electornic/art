import './Awards.css'

type Card = {
  tag: string
  title: string
  highlight?: string
  body: string
  cta: string
  glyph: 'trophy' | 'spark' | 'orbit'
  accent: 'cyan' | 'violet' | 'peach'
}

const cards: Card[] = [
  {
    tag: 'Award Winning',
    title: '4x No-Code Site',
    highlight: 'of the Month',
    body: 'Beating Wix, Webflow and Wordpress at their own game.',
    cta: 'Get Started',
    glyph: 'trophy',
    accent: 'peach',
  },
  {
    tag: 'Trend Setting',
    title: 'Top Web Design',
    highlight: 'Trend 2025',
    body: 'Muzli claims interactive 3D elements are transforming web design.',
    cta: 'Explore Now',
    glyph: 'spark',
    accent: 'cyan',
  },
  {
    tag: 'Scalable',
    title: 'Trusted by',
    highlight: 'the Best',
    body: 'Designers and agencies behind The Simpsons, Futurama and Humanity Protocol.',
    cta: 'Explore Features',
    glyph: 'orbit',
    accent: 'violet',
  },
]

function Glyph({ kind }: { kind: Card['glyph'] }) {
  if (kind === 'trophy') {
    return (
      <svg viewBox="0 0 32 32" fill="none">
        <path
          d="M9 6h14v6a7 7 0 0 1-14 0V6Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9 9H5v2a4 4 0 0 0 4 4M23 9h4v2a4 4 0 0 1-4 4M13 22h6M16 19v3M11 26h10"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  if (kind === 'spark') {
    return (
      <svg viewBox="0 0 32 32" fill="none">
        <path
          d="M16 4l2.4 7.2L26 14l-7.6 2.8L16 24l-2.4-7.2L6 14l7.6-2.8L16 4Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M24 22l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3Z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.4" />
      <ellipse
        cx="16"
        cy="16"
        rx="12"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.4"
        opacity="0.7"
      />
      <ellipse
        cx="16"
        cy="16"
        rx="12"
        ry="5"
        stroke="currentColor"
        strokeWidth="1.4"
        transform="rotate(60 16 16)"
        opacity="0.5"
      />
    </svg>
  )
}

function Awards() {
  return (
    <section className="awards">
      <div className="container">
        <header className="awards__head">
          <span className="awards__eyebrow">Experience</span>
          <h2 className="awards__title">
            The world is watching{' '}
            <span className="serif-italic">PeachWeb.</span>
          </h2>
        </header>

        <div className="awards__grid">
          {cards.map((card) => (
            <article
              key={card.tag}
              className={`award award--${card.accent}`}
            >
              <div className="award__glow" aria-hidden="true" />
              <div className="award__icon" aria-hidden="true">
                <Glyph kind={card.glyph} />
              </div>
              <span className="award__tag">{card.tag}</span>
              <h3 className="award__heading">
                {card.title}
                {card.highlight && (
                  <>
                    <br />
                    <span className="serif-italic award__highlight">
                      {card.highlight}
                    </span>
                  </>
                )}
              </h3>
              <p className="award__body">{card.body}</p>
              <a className="award__cta" href="#more">
                {card.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3 7h8M7.5 3.5L11 7l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Awards
