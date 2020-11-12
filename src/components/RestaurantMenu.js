import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { ChannelInformation } from '../features/appSlice'
import db from './firebase'
import FoodCards from './FoodCards'
import "./RestaurantMenu.css"
function RestaurantMenu() {
    const channelInfo= useSelector(ChannelInformation)
    const [dishes, setDishes]= useState([])
    useEffect(()=>{
        db.collection("restaurants").doc(channelInfo.channelId).collection("dishes").onSnapshot(snapshot=>setDishes(snapshot.docs.map(doc=>doc.data())))

    },[channelInfo.channelId]

    )
    return (
        <div className="restaurantMenu">
            <h1>{channelInfo.channelName}</h1>
            <p>{channelInfo.channelDesc}</p>
         
            <div className="restaurantMenu_body">
                {
                    dishes.map(dish=>(
                        <FoodCards logo={dish.image} name={dish.name} rating={dish.rating} time={dish.time} price={dish.price} desc={dish.desc} active={true}/>
                    ))
                }



            </div>

            
        </div>
    )
}

export default RestaurantMenu
