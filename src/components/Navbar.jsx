import React from 'react'
import { whitelogo } from '../assets'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={whitelogo} alt="slackmini" className='logo' />
            <div className="user">
                <img src="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="avatar" />
                <span>Jane Doe</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar