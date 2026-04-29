import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'
import Awards from './components/Awards'
import GalleryCTA from './components/GalleryCTA'
import UseCases from './components/UseCases'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <LoadingSequence />
        <Awards />
        <GalleryCTA />
        <UseCases />
      </main>
    </div>
  )
}

export default App
