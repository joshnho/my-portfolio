import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// CSS
import './static/css/app.css'

const App = () => {
  return (
      <Router>
        <div className='app'>
          <Navbar />
          
          <Route path='/' component={Home} />

          <Footer />
        </div>
      </Router>
  );
}

export default App;
