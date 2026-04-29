import './Steps.css'

type Step = {
  num: string
  title: string
  body: string
  visual: 'form' | 'theme' | 'editor'
}

const steps: Step[] = [
  {
    num: '01',
    title: 'Tell us About Yourself',
    body: 'Share your brand, audience, and goals. We map your vision to the right 3D vocabulary.',
    visual: 'form',
  },
  {
    num: '02',
    title: 'Pick Your Theme',
    body: 'Browse hundreds of award-winning starting points or get a custom layout from our design team.',
    visual: 'theme',
  },
  {
    num: '03',
    title: 'Edit & Launch',
    body: 'Tweak copy, swap models, ship in minutes. Your site stays editable forever.',
    visual: 'editor',
  },
]

function Visual({ kind }: { kind: Step['visual'] }) {
  if (kind === 'form') {
    return (
      <svg viewBox="0 0 320 200" className="step__svg">
        <rect x="40" y="30" width="240" height="140" rx="12" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
        <rect x="58" y="50" width="84" height="10" rx="3" fill="rgba(255,255,255,0.55)" />
        <rect x="58" y="68" width="180" height="22" rx="6" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.18)" />
        <rect x="58" y="100" width="120" height="10" rx="3" fill="rgba(255,255,255,0.45)" />
        <rect x="58" y="118" width="180" height="22" rx="6" fill="rgba(0,240,255,0.12)" stroke="rgba(0,240,255,0.5)" />
        <rect x="58" y="145" width="56" height="14" rx="7" fill="#00f0ff" />
        <text x="86" y="155" textAnchor="middle" fill="#001014" fontSize="9" fontWeight="700">
          NEXT
        </text>
        <circle cx="252" cy="42" r="4" fill="#ff8b6b" />
        <circle cx="240" cy="42" r="4" fill="#ffd97a" />
        <circle cx="228" cy="42" r="4" fill="#4ee2c2" />
      </svg>
    )
  }
  if (kind === 'theme') {
    return (
      <svg viewBox="0 0 320 200" className="step__svg">
        <defs>
          <linearGradient id="theme-a" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#5328ff" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
          <linearGradient id="theme-b" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff5f6d" />
            <stop offset="100%" stopColor="#ffd97a" />
          </linearGradient>
          <linearGradient id="theme-c" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0c0428" />
            <stop offset="100%" stopColor="#5328ff" />
          </linearGradient>
        </defs>
        <rect x="22" y="40" width="84" height="120" rx="10" fill="url(#theme-a)" />
        <rect x="118" y="20" width="84" height="160" rx="10" fill="url(#theme-c)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
        <rect x="214" y="40" width="84" height="120" rx="10" fill="url(#theme-b)" opacity="0.85" />
        <circle cx="160" cy="80" r="20" fill="rgba(255,255,255,0.12)" />
        <circle cx="160" cy="80" r="10" fill="#c3b3ff" />
        <rect x="138" y="110" width="44" height="6" rx="3" fill="rgba(255,255,255,0.5)" />
        <rect x="146" y="124" width="28" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <circle cx="160" cy="160" r="3" fill="#fff" />
        <circle cx="148" cy="160" r="3" fill="rgba(255,255,255,0.4)" />
        <circle cx="172" cy="160" r="3" fill="rgba(255,255,255,0.4)" />
      </svg>
    )
  }
  // editor
  return (
    <svg viewBox="0 0 320 200" className="step__svg">
      <rect x="20" y="22" width="280" height="156" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.18)" />
      <line x1="20" y1="48" x2="300" y2="48" stroke="rgba(255,255,255,0.18)" />
      <circle cx="36" cy="35" r="3" fill="#ff5f6d" />
      <circle cx="48" cy="35" r="3" fill="#ffd97a" />
      <circle cx="60" cy="35" r="3" fill="#4ee2c2" />

      {/* Left panel */}
      <rect x="34" y="62" width="64" height="100" rx="6" fill="rgba(255,255,255,0.04)" />
      <rect x="42" y="72" width="48" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
      <rect x="42" y="84" width="36" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="42" y="96" width="48" height="6" rx="3" fill="rgba(0,240,255,0.6)" />
      <rect x="42" y="108" width="40" height="6" rx="3" fill="rgba(255,255,255,0.25)" />

      {/* Canvas */}
      <rect x="108" y="62" width="120" height="100" rx="6" fill="url(#editor-canvas)" />
      <defs>
        <radialGradient id="editor-canvas" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#5328ff" />
          <stop offset="100%" stopColor="#0a0420" />
        </radialGradient>
      </defs>
      <circle cx="168" cy="105" r="22" fill="#c3b3ff" opacity="0.85" />
      <circle cx="158" cy="100" r="6" fill="#fff" opacity="0.6" />

      {/* Right panel */}
      <rect x="238" y="62" width="48" height="48" rx="6" fill="rgba(255,255,255,0.04)" />
      <rect x="246" y="72" width="32" height="6" rx="3" fill="rgba(255,255,255,0.45)" />
      <rect x="246" y="84" width="24" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
      <rect x="246" y="96" width="14" height="6" rx="3" fill="rgba(255,255,255,0.45)" />

      <rect x="238" y="116" width="48" height="46" rx="6" fill="rgba(0,240,255,0.08)" stroke="rgba(0,240,255,0.4)" />
      <rect x="246" y="126" width="32" height="6" rx="3" fill="rgba(0,240,255,0.7)" />
      <rect x="246" y="138" width="20" height="6" rx="3" fill="rgba(0,240,255,0.4)" />
      <rect x="246" y="150" width="28" height="6" rx="3" fill="rgba(0,240,255,0.55)" />
    </svg>
  )
}

function Steps() {
  return (
    <section className="steps">
      <div className="container">
        <header className="steps__head">
          <span className="steps__eyebrow">Three steps</span>
          <h2 className="steps__title">
            From idea to{' '}
            <span className="serif-italic">live site</span> in minutes.
          </h2>
        </header>

        <div className="steps__grid">
          {steps.map((step, i) => (
            <article className="step" key={step.num}>
              <div className="step__visual">
                <Visual kind={step.visual} />
              </div>
              <div className="step__meta">
                <span className="step__num">Step {step.num}</span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__body">{step.body}</p>
              </div>
              {i < steps.length - 1 && (
                <span className="step__connector" aria-hidden="true">
                  <svg width="32" height="20" viewBox="0 0 32 20" fill="none">
                    <path
                      d="M2 10 H26 M22 5 L28 10 L22 15"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Steps
