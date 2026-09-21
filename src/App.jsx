import './App.css'
import MiddleBadge from './Badge/MiddleBadge'
import HeroSection from './HeroSection/HeroSection'
import Navbar from './Navbar/Navbar'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <MiddleBadge></MiddleBadge>
        </div>
      </section>
    </>
  )
}
export default App
