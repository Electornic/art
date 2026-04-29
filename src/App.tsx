import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'
import Awards from './components/Awards'
import GalleryCTA from './components/GalleryCTA'
import UseCases from './components/UseCases'
import ExpertServices from './components/ExpertServices'
import Steps from './components/Steps'

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
        <Steps />
      </main>
    </div>
  )
}

export default App
