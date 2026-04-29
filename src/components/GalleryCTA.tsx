import './GalleryCTA.css'

type Tile = {
  label: string
  tag: string
  variant: 'aurora' | 'sunset' | 'reef' | 'noir' | 'mint' | 'peach'
}

const tiles: Tile[] = [
  { label: 'Lumen Studio', tag: 'Creative', variant: 'aurora' },
  { label: 'Solace Beauty', tag: 'Ecommerce', variant: 'sunset' },
  { label: 'Drift Travel', tag: 'Storytelling', variant: 'reef' },
  { label: 'Nova Labs', tag: 'Tech', variant: 'noir' },
  { label: 'Verde Goods', tag: 'Ecommerce', variant: 'mint' },
  { label: 'Hana Atelier', tag: 'Portfolio', variant: 'peach' },
]

function GalleryCTA() {
  return (
    <section className="gallery">
      <div className="container">
        <header className="gallery__head">
          <span className="gallery__eyebrow">Showcase</span>
          <h2 className="gallery__title">
            Launch your Visually Stunning{' '}
            <span className="serif-italic">Interactive 3D</span> Website.
          </h2>
          <div className="gallery__cta">
            <a className="btn btn--ghost btn--lg" href="#book">
              Book a Call
            </a>
            <a className="btn btn--primary btn--lg" href="#gallery">
              Browse Gallery
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
          </div>
        </header>

        <div className="gallery__grid">
          {tiles.map((tile) => (
            <article
              key={tile.label}
              className={`tile tile--${tile.variant}`}
            >
              <div className="tile__art" aria-hidden="true">
                <div className="tile__orb tile__orb--a" />
                <div className="tile__orb tile__orb--b" />
                <div className="tile__shine" />
              </div>
              <div className="tile__meta">
                <span className="tile__tag">{tile.tag}</span>
                <span className="tile__name">{tile.label}</span>
              </div>
              <div className="tile__hover" aria-hidden="true">
                <span>View</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 10.5L10.5 3.5M5 3.5h5.5V9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryCTA
