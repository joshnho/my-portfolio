import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/projects' component={Projects} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
        </div>
      </Router>
  );
}

export default App;
