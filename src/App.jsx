import { Package } from 'lucide-react'
import './App.css'
import MiddleBadge from './Badge/MiddleBadge'
import HeroSection from './HeroSection/HeroSection'
import Navbar from './Navbar/Navbar'
import Packages from './Packages/Packages'

function App() {

  return (
    <>
      <section id="center">
        <div>
          <Navbar></Navbar>
          <HeroSection></HeroSection>
          <MiddleBadge></MiddleBadge>
          <Packages></Packages>
        </div>
      </section>
    </>
  )
}
export default App
