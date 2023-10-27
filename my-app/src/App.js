import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Plans from './pages/plans/Plans'
import Trainers from './pages/trainers/Trainers'
import Notfound from './pages/notfound/Notfound'


const App = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Gallery />
      <Plans />
      <Trainers />
      <Notfound />
    </div>
  )
}

export default App