import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Achievements from './pages/Achievements'
import Certificates from './pages/Certificates'
import CompleteProjects from './pages/CompleteProjects'
import CurrentProjects from './pages/CurrentProjects'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/complete-projects" element={<CompleteProjects />} />
            <Route path="/current-projects" element={<CurrentProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
