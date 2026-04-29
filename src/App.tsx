import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'
import Awards from './components/Awards'
import GalleryCTA from './components/GalleryCTA'
import UseCases from './components/UseCases'
import ExpertServices from './components/ExpertServices'

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
        <ExpertServices />
      </main>
    </div>
  )
}

export default App
