import Navigation from './components/Navigation'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Classes from './components/Classes'
import Schedule from './components/Schedule'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WhyUs />
      <Classes />
      <Schedule />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
