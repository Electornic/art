import './UseCases.css'

type UseCase = {
  title: string
  body: string
  variant: 'ecom' | 'tech' | 'creative' | 'story'
  visual: 'product' | 'orbit' | 'keyframes' | 'scroll'
}

const useCases: UseCase[] = [
  {
    title: 'Ecommerce',
    body:
      'Launch high-performance interactive 3D product landing pages that boost engagement and conversions—no code required.',
    variant: 'ecom',
    visual: 'product',
  },
  {
    title: 'Tech',
    body:
      'Leverage WebGL visuals and best-in-class 3D websites to elevate your online presence—no code required.',
    variant: 'tech',
    visual: 'orbit',
  },
  {
    title: 'Creative',
    body:
      'Craft creative, captivating 3D websites with drag-and-drop tools and keyframe animations to wow every visitor.',
    variant: 'creative',
    visual: 'keyframes',
  },
  {
    title: 'Storytelling',
    body:
      'Bring your vision to life with scroll-triggered 3D scenes and interactive animations that keep users engaged.',
    variant: 'story',
    visual: 'scroll',
  },
]

function Visual({ kind }: { kind: UseCase['visual'] }) {
  if (kind === 'product') {
    return (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="usecase__svg">
        <defs>
          <radialGradient id="product-bottle" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#ffd6a8" />
            <stop offset="55%" stopColor="#ff8b6b" />
            <stop offset="100%" stopColor="#5328ff" />
          </radialGradient>
        </defs>
        <ellipse cx="160" cy="180" rx="90" ry="10" fill="rgba(255,255,255,0.08)" />
        <path
          d="M140 60h40v15c12 6 18 18 18 35v55c0 8-6 14-14 14h-48c-8 0-14-6-14-14V110c0-17 6-29 18-35V60Z"
          fill="url(#product-bottle)"
        />
        <rect x="148" y="50" width="24" height="14" rx="3" fill="#0c0418" />
        <rect x="138" y="118" width="44" height="32" rx="4" fill="rgba(0,0,0,0.35)" />
        <text x="160" y="138" textAnchor="middle" fill="#ffd6a8" fontSize="9" fontWeight="600" letterSpacing="2">
          PEACH
        </text>
      </svg>
    )
  }
  if (kind === 'orbit') {
    return (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="usecase__svg">
        <defs>
          <radialGradient id="orbit-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#0a0a2e" />
          </radialGradient>
        </defs>
        <circle cx="160" cy="100" r="36" fill="url(#orbit-core)" />
        <ellipse cx="160" cy="100" rx="100" ry="22" stroke="rgba(0,240,255,0.5)" strokeWidth="1" fill="none" />
        <ellipse
          cx="160"
          cy="100"
          rx="100"
          ry="22"
          stroke="rgba(195,179,255,0.45)"
          strokeWidth="1"
          fill="none"
          transform="rotate(35 160 100)"
        />
        <ellipse
          cx="160"
          cy="100"
          rx="100"
          ry="22"
          stroke="rgba(83,40,255,0.55)"
          strokeWidth="1"
          fill="none"
          transform="rotate(-35 160 100)"
        />
        <circle cx="248" cy="92" r="5" fill="#c3b3ff" />
        <circle cx="80" cy="118" r="4" fill="#00f0ff" />
        <circle cx="200" cy="60" r="3" fill="#5328ff" />
      </svg>
    )
  }
  if (kind === 'keyframes') {
    return (
      <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="usecase__svg">
        <path
          d="M20 130 C 80 30, 140 200, 200 80 S 300 130, 320 50"
          fill="none"
          stroke="url(#kf-grad)"
          strokeWidth="2"
        />
        <defs>
          <linearGradient id="kf-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ff8b6b" />
            <stop offset="100%" stopColor="#c3b3ff" />
          </linearGradient>
        </defs>
        {[40, 100, 160, 220, 280].map((x, i) => (
          <g key={x}>
            <rect x={x - 10} y="140" width="20" height="20" rx="3" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.2)" />
            <circle cx={x} cy={[100, 60, 140, 80, 110][i]} r="6" fill="#ffd6a8" />
            <line x1={x} y1={[106, 66, 146, 86, 116][i]} x2={x} y2="140" stroke="rgba(255,214,168,0.4)" strokeDasharray="2 3" />
          </g>
        ))}
      </svg>
    )
  }
  // scroll
  return (
    <svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" className="usecase__svg">
      <defs>
        <linearGradient id="scroll-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5328ff" />
          <stop offset="100%" stopColor="#00f0ff" />
        </linearGradient>
      </defs>
      <rect x="120" y="20" width="80" height="160" rx="14" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.18)" />
      <rect x="132" y="36" width="56" height="40" rx="6" fill="url(#scroll-grad)" opacity="0.8" />
      <rect x="132" y="84" width="56" height="6" rx="3" fill="rgba(255,255,255,0.4)" />
      <rect x="132" y="96" width="40" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="132" y="116" width="56" height="48" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" />
      <circle cx="160" cy="140" r="14" fill="#ff8b6b" />
      <path d="M260 30 v140" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeDasharray="2 4" />
      <circle cx="260" cy="100" r="6" fill="#00f0ff" />
      <path
        d="M254 90 l6 6 l6 -6"
        stroke="#00f0ff"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UseCases() {
  return (
    <section className="usecases">
      <div className="container">
        <header className="usecases__head">
          <span className="usecases__eyebrow">Use Cases</span>
          <h2 className="usecases__title">
            One builder.{' '}
            <span className="serif-italic">Every</span> story.
          </h2>
        </header>

        <div className="usecases__grid">
          {useCases.map((uc) => (
            <article
              key={uc.title}
              className={`usecase usecase--${uc.variant}`}
            >
              <div className="usecase__visual">
                <Visual kind={uc.visual} />
                <div className="usecase__visual-overlay" aria-hidden="true" />
              </div>
              <div className="usecase__body">
                <span className="usecase__label">USE CASE</span>
                <h3 className="usecase__heading">{uc.title}</h3>
                <p className="usecase__copy">{uc.body}</p>
                <a className="usecase__cta" href="#more">
                  Explore Now
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
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UseCases
