import './Footer.css'

const columns = [
  {
    title: 'Product',
    links: ['Home', 'Features', '3D Banners & Ads'],
  },
  {
    title: 'Resources',
    links: ['Marketplace', 'Tutorials', 'Blog', 'Discord', 'Contact Sales'],
  },
  {
    title: 'Use Cases',
    links: ['Ecommerce', 'Storytelling', 'Creative and Tech', 'Portfolio'],
  },
  {
    title: 'Plans',
    links: ['Pricing'],
  },
] as const

const socials = [
  {
    label: 'Discord',
    path: 'M19 5a17 17 0 0 0-4-1l-.2.4a14 14 0 0 0-7.6 0L7 4a17 17 0 0 0-4 1L1.2 14c1.6 1.2 3.5 1.9 5.5 2l.6-1c-1-.4-1.8-.9-2.6-1.5l.4-.3c3.6 1.6 7.5 1.6 11 0l.4.3c-.8.6-1.7 1.1-2.6 1.5l.6 1c2-.1 4-.8 5.5-2L19 5ZM7.7 11.5c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5Zm6.6 0c-.7 0-1.3-.7-1.3-1.5s.6-1.5 1.3-1.5 1.3.7 1.3 1.5-.6 1.5-1.3 1.5Z',
  },
  {
    label: 'YouTube',
    path: 'M21.6 7.2a2.5 2.5 0 0 0-1.7-1.7C18.3 5 12 5 12 5s-6.3 0-7.9.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.7 1.7C5.7 19 12 19 12 19s6.3 0 7.9-.4a2.5 2.5 0 0 0 1.7-1.7A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z',
  },
  {
    label: 'X',
    path: 'M18.2 3h3.3l-7.2 8.2L23 21h-6.6l-5.2-6.7L5.2 21H1.9l7.7-8.8L1 3h6.7l4.7 6.1L18.2 3Zm-1.2 16h1.8L7.1 5H5.2L17 19Z',
  },
  {
    label: 'LinkedIn',
    path: 'M4.5 4.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3 10h3v11H3V10Zm6 0h2.9v1.5h.05c.4-.75 1.4-1.55 2.9-1.55 3.1 0 3.65 2.05 3.65 4.7V21h-3v-5.5c0-1.3-.05-3-1.85-3-1.85 0-2.15 1.45-2.15 2.9V21H9V10Z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.5c2.6 0 2.9 0 4 .05 1 0 1.6.2 2 .35.5.2.85.45 1.25.85.4.4.65.75.85 1.25.15.4.3 1 .35 2 .05 1.1.05 1.4.05 4s0 2.9-.05 4c0 1-.2 1.6-.35 2-.2.5-.45.85-.85 1.25-.4.4-.75.65-1.25.85-.4.15-1 .3-2 .35-1.1.05-1.4.05-4 .05s-2.9 0-4-.05c-1 0-1.6-.2-2-.35a3.4 3.4 0 0 1-1.25-.85 3.4 3.4 0 0 1-.85-1.25c-.15-.4-.3-1-.35-2C2.5 14.9 2.5 14.6 2.5 12s0-2.9.05-4c0-1 .2-1.6.35-2 .2-.5.45-.85.85-1.25.4-.4.75-.65 1.25-.85.4-.15 1-.3 2-.35C9.1 2.5 9.4 2.5 12 2.5Zm0 1.8c-2.55 0-2.85 0-3.85.05-.95 0-1.45.2-1.8.3-.45.2-.75.4-1.1.7-.3.35-.55.65-.7 1.1-.1.35-.3.85-.3 1.8-.05 1-.05 1.3-.05 3.85s0 2.85.05 3.85c0 .95.2 1.45.3 1.8.15.45.4.75.7 1.1.35.3.65.55 1.1.7.35.1.85.3 1.8.3 1 .05 1.3.05 3.85.05s2.85 0 3.85-.05c.95 0 1.45-.2 1.8-.3.45-.2.75-.4 1.1-.7.3-.35.55-.65.7-1.1.1-.35.3-.85.3-1.8.05-1 .05-1.3.05-3.85s0-2.85-.05-3.85c0-.95-.2-1.45-.3-1.8a3 3 0 0 0-.7-1.1 3 3 0 0 0-1.1-.7c-.35-.1-.85-.3-1.8-.3-1-.05-1.3-.05-3.85-.05ZM12 7.4a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2Zm0 7.6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.85-7.8a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z',
  },
] as const

function Footer() {
  return (
    <footer className="footer">
      {/* Final CTA banner */}
      <div className="footer__cta">
        <div className="footer__cta-glow" aria-hidden="true" />
        <div className="container footer__cta-inner">
          <h2 className="footer__cta-title">
            Start building{' '}
            <span className="serif-italic footer__magic">magic</span> today.
          </h2>
          <div className="footer__cta-buttons">
            <a className="btn btn--ghost btn--lg" href="#talk">
              Talk to Us
            </a>
            <a className="btn btn--primary btn--lg" href="#start">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Sitemap */}
      <div className="container footer__main">
        <div className="footer__brand">
          <a className="footer__logo" href="#top">
            <span className="footer__logo-mark" aria-hidden="true" />
            <span>PeachWeb</span>
          </a>
          <p className="footer__tagline">
            No-Code 3D Websites Builder.{' '}
            <span className="serif-italic">Built for the wild ones.</span>
          </p>
          <div className="footer__socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={`#${s.label.toLowerCase()}`}
                aria-label={s.label}
                className="footer__social"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__columns">
          {columns.map((col) => (
            <div key={col.title} className="footer__column">
              <h4 className="footer__column-title">{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span>Peach Worlds Ltd © 2025</span>
          <div className="footer__legal">
            <a href="#privacy">Privacy</a>
            <a href="#terms">Terms</a>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>

      {/* Decorative giant brand wordmark */}
      <div className="footer__giant" aria-hidden="true">PeachWeb</div>
    </footer>
  )
}

export default Footer
