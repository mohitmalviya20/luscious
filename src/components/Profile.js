import { Avatar } from '@material-ui/core'
import { AccountBalance, Email, Home, MonetizationOn, Payment, Phone, Work , LocationCity} from '@material-ui/icons'
import React from 'react'
import {  useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import "./Profile.css"

function Profile() {
    const user= useSelector(selectUser)
    
    
    return (
        <div className="profile">
            <Avatar className="avatar" src={user.photo}/>
            <h2>{user.displayName}</h2>
            <h3>@{user.email.substring(0, user.email.lastIndexOf("@"))}</h3>
            <div className="profile_inc">
                <div>
                    <h3>Address</h3>
                    <div className="card_info">
                        <div className="card_container">
                        <Home/>
                        <p>Flat 788/93 first floor, block 98 near dockyard 87</p>

                        </div>
                        <div className="card_container">
                        <Work/>
                        <p>Flat 788/93 first floor, block 98 near dockyard 87</p>

                        </div>
                       
                       
                    </div>

                </div>
                <div>
                <h3>Payments</h3>
                <div className="card_info">
                        <div className="card_container">
                        <Payment/>
                        <p>123XXXXXXXXX5634</p>

                        </div>
                        <div className="card_container">
                        <AccountBalance/>
                        <p>Zaytm Wallet : 5633 Rupees</p>

                        </div>
                        <div className="card_container">
                        <MonetizationOn/>
                        <p>Luscious Wallet : 965 Rupees </p>

                        </div>
                       
                       
                    </div>


                </div>
                <div>
                <h3>Contact</h3>
                <div className="card_info">
                        <div className="card_container">
                        <Phone/>
                        <p>9876543210</p>

                        </div>
                        <div className="card_container">
                        <Email/>
                        <p>{user.email}</p>

                        </div>
                        <div className="card_container">
                        <LocationCity/>
                        <p>Punjab, India</p>

                        </div>
                       
                       
                    </div>


                </div>
            </div>
            
            
        </div>
    )
}

export default Profile
