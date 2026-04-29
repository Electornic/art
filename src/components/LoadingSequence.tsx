import './LoadingSequence.css'

const phrases = [
  'Loading Experience',
  'Adding Animations',
  'Adding Effects',
  'Adding Lights',
  'Animating Jellyfish',
  'Creating Sea World',
] as const

function LoadingSequence() {
  // Duplicate the phrases so the marquee loops seamlessly.
  const track = [...phrases, ...phrases]

  return (
    <section className="loading">
      <div className="loading__edge loading__edge--left" aria-hidden="true" />
      <div className="loading__edge loading__edge--right" aria-hidden="true" />

      <div className="loading__track" aria-hidden="true">
        {track.map((phrase, i) => (
          <span key={`${phrase}-${i}`} className="loading__chip">
            <span className="loading__dot" />
            <span className="loading__text">{phrase}</span>
            <span className="loading__ellipsis">...</span>
          </span>
        ))}
      </div>

      <p className="loading__caption">
        Every PeachWeb site spins up a custom WebGL world.{' '}
        <span className="serif-italic">Watch it bloom.</span>
      </p>
    </section>
  )
}

export default LoadingSequence
