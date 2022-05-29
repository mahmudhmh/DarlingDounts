import React from 'react'
import { Link } from 'react-router-dom'

import './App.css'
//import wel from '../../components/assets/images\wel.jpg'

export default function LandingPage() {
    return (
        <header className='all' style={ HeaderStyle }>
            
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register" >
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url('../images/wel.png')`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
   
    
    
}



