import React from 'react'
import { Link } from 'react-router-dom'
import './auth.css'

const Home = () => {
  return (
    <div>
        <img className="home-img" src="https://webla.in/wp-content/uploads/2022/07/full-stack-web-development.png" alt="MERN" /><br/><br/>
        <button className='logout'>
          <Link to='/' >Logout</Link>
        </button>
    </div>
  )
}

export default Home