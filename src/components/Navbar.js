import { Avatar, Badge } from '@material-ui/core'
import { Person } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectBasked } from '../features/basketSlice'
import { selectUser } from '../features/userSlice'
import { auth } from './firebase'
import "./Navbar.css"

function Navbar() {
    const user= useSelector(selectUser)
    const basket = useSelector(selectBasked)

    return (
        <div className="navbar">
            <Link to="/">  
             <div className="navbar_icon">
            <Avatar className="avatar" src="https://www.clipartmax.com/png/middle/293-2935006_icon-design-icon-set-utensils-clip-art-household-cooking-utensils-icon.png"/>
            <h2>LUSCIOUS</h2>


            </div>
            </Link>

            <div className="navbar_links">
                <Link to="/profile">
                    <div className="navbar_profile">
                        <Avatar src={user.photo}/>
                        <h2>{user.displayName.substring(0, user.displayName.lastIndexOf(" "))}</h2>
                    </div>
                </Link>
                <Link to="/"> 
                <h2>Home</h2>
                </Link>
                <Link to="/cart"> 
                <Badge badgeContent={basket?.length} color="primary" className="badge">
                <h2>Cart</h2>
                </Badge>
                </Link>
               
                <h2 onClick={()=>auth.signOut()}>Logout</h2>
            </div>
        </div>
    )
}

export default Navbar
