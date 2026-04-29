import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'
import Awards from './components/Awards'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <LoadingSequence />
        <Awards />
      </main>
    </div>
  )
}

export default App
