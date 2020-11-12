import { Avatar, IconButton } from '@material-ui/core'
import { Add, Clear, Star } from '@material-ui/icons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SetChannelInfo } from '../features/appSlice'
import { removeFromBasket, SetBasket } from '../features/basketSlice'
import "./FoodCard.css"
function FoodCards({id, logo, name, price, rating, time, desc,metaData, active, remove}) {
    const dispatch = useDispatch()
    const handleClick= ()=>{
        dispatch(
            SetChannelInfo(
                {
                    channelId:id,
                    channelName:name,
                    channelDesc:metaData
                }
            )
        )
    }
    const preventClick =(e)=>{
        e.preventDefault()

    }
    const addToBasket=()=>{
        dispatch(
            SetBasket(
              {
                    logo:logo, 
                    name:name, 
                    rating:rating,
                    time:time,
                    price:price,
                    desc:desc
                }
            )
        )
    }
    const removeBasket=()=>{
        dispatch(
            removeFromBasket({
                id:id
            })
        )
    }
        return (
            <Link to={`/restaurant`}>
            <div className="foodCard" onClick={active?preventClick:handleClick}>
                <Avatar src={logo} className="avatar"/>
                <div className="card">
                    <h2>{name}</h2>
                    <p>{desc}</p>
                    <div className="food_rating">
                        <div className="rating">
                        <Star/>
                        <p>{rating}/5</p>
                        </div>
                        <p>{time} MINS</p>
                        {
                            active?(
                            <div className="rating_active">
                            <p>₹{price}</p>
                            {
                                remove?(
                                    <IconButton onClick={removeBasket}>
                                        <Clear/>
                                    </IconButton>

                                ):(

                                     <IconButton onClick={addToBasket}>
                                        <Add/>
                                     </IconButton>
                                )
                            }
                            
                            </div>)
                            :(<p>₹{price} For Two</p>)
                        }
                       
    
                    </div>
                </div>
            </div>
            </Link>
              
   
        )
    
}

export default FoodCards
