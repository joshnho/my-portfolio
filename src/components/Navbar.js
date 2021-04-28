import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import homeButton from '../static/media/home-button.png'
import aboutButton from '../static/media/about-button.png'
import projectsButton from '../static/media/projects-button.png'

// CSS
import '../static/css/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-buttons-container'>
                    <Link to='/'>
                        <button type='button' className='navbar-button'>
                            <img src={homeButton} alt='Home' />
                        </button>
                    </Link>
                
                    <Link to='/about'>
                        <button type='button' className='navbar-button'>
                            <img src={aboutButton} alt='About' />
                        </button>
                    </Link>
                
                    <Link to='/projects'>
                        <button type='button' className='navbar-button'>
                            <img src={projectsButton} alt='Projects' />
                        </button>
                    </Link>
                
                    <Link to='/contact'>
                        <button type='button' className='navbar-button'>
                            Contact
                        </button>
                    </Link>
            </div>
        </div>
    )
}

export default Navbar