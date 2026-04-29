import { Suspense } from 'react'
import BackgroundScene from './components/BackgroundScene'
import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'
import Awards from './components/Awards'
import GalleryCTA from './components/GalleryCTA'
import UseCases from './components/UseCases'
import ExpertServices from './components/ExpertServices'
import Steps from './components/Steps'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="bg-scene" aria-hidden="true">
        <Suspense fallback={null}>
          <BackgroundScene />
        </Suspense>
      </div>

      <Nav />
      <main className="app__main">
        <Hero />
        <LoadingSequence />
        <Awards />
        <GalleryCTA />
        <UseCases />
        <ExpertServices />
        <Steps />
      </main>
      <Footer />
    </div>
  )
}

export default App
