import Nav from './components/Nav'
import Hero from './components/Hero'
import LoadingSequence from './components/LoadingSequence'

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <LoadingSequence />
      </main>
    </div>
  )
}

export default App
