import React, { useContext } from 'react'
import { whitelogo } from '../assets'
import { signOut } from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
    const { currentUser } = useContext(AuthContext)
    return (
        <div className='navbar'>
            <img src={whitelogo} alt="slackmini" className='logo' />
            <div className="user">
                <img src={currentUser.photoURL} alt="avatar" />
                <span>{currentUser.displayName}</span>
                <button onClick={() => signOut(auth)}>Logout</button>
            </div>
        </div>
    )
}

export default Navbar