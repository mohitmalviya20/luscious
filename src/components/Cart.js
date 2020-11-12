import { Button } from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyBasket, selectBasked, SetBasket } from '../features/basketSlice'
import "./Cart.css"
import FoodCards from './FoodCards'

function Cart() {
    const basket = useSelector(selectBasked)
    const dispatch = useDispatch()
    
    var i;
    var amount=0;
    for(i=0;i<basket.length;++i){
        amount+=Number(basket[i].price)
    }
    const handleClick=()=>{
        alert(`Rupees ${amount} paid Successfuly`)
        dispatch(emptyBasket())

    }
    return (
        <div className="cart">
            <div className="cart_bill">
                    <h2>You Bill:₹{amount}</h2>
                    <Button onClick={handleClick}>PAY NOW</Button>
            </div>
            
            <div className="cart_items">
            {
                 basket.map( basket =>(
                    <FoodCards logo={basket.logo} name={basket.name} price={basket.price} rating={basket.rating} desc={basket.desc} remove={true} active={true}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Cart
