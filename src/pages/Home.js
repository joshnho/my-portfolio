import React from 'react'
import headshot from '../static/media/head-shot.png'

// CSS
import '../static/css/home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className='profile-picture'>
                <img src={headshot} alt='head shot' className='profile-picture'/>
            </div>
        </div>
    )
}

export default Home