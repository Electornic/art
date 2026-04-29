import { Suspense } from 'react'
import HeroScene from './HeroScene'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow hero__glow--violet" />
        <div className="hero__glow hero__glow--cyan" />
        <div className="hero__glow hero__glow--peach" />
        <div className="hero__grid" />
      </div>

      <div className="hero__canvas" aria-hidden="true">
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </div>

      <div className="hero__inner">
        <span className="hero__badge">
          <span className="hero__badge-dot" aria-hidden="true" />
          No-Code 3D Websites Builder
        </span>

        <h1 className="hero__title">
          3D Websites in <span className="serif-italic">Minutes</span>
        </h1>

        <p className="hero__sub">No-Code Builder for WebGL 3D Websites.</p>

        <div className="hero__cta">
          <a className="btn btn--ghost btn--lg" href="#talk">
            Talk to Us
          </a>
          <a className="btn btn--primary btn--lg" href="#start">
            Get Started
          </a>
        </div>

        <p className="hero__caption">
          Powering award winners <span className="hero__amp">&amp;</span>{' '}
          nominees
        </p>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll down &amp; dive in</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none">
          <rect
            x="0.5"
            y="0.5"
            width="13"
            height="21"
            rx="6.5"
            stroke="currentColor"
            opacity="0.4"
          />
          <circle className="hero__scroll-dot" cx="7" cy="6" r="1.5" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
