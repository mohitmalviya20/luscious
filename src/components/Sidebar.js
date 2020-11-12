import React from 'react'
import "./Sidebar.css"
import pizza from "./assets/pizza.svg"
import burger from "./assets/burger.svg"
import cocktail from "./assets/cocktail.svg"
import dessert from "./assets/dessert.svg"
import mexican from "./assets/mexican.svg"
import salad from "./assets/salad.svg"
import chinese from "./assets/chinese.svg"

function Sidebar() {
    return (
        <div className="sidebar">
            <h1>RECIPIES</h1>
            <div className="sidebar_menu">
                <div>
                    <img src={pizza} alt=""/>
                    <h2>Pizza</h2>

                </div>
                <div>
                    <img src={burger} alt=""/>
                    <h2>Burger</h2>

                </div>
                <div>
                    <img src={cocktail} alt=""/>
                    <h2>Cocktail</h2>

                </div>
                <div>
                    <img src={dessert} alt=""/>
                    <h2>Dessert</h2>

                </div>
                <div>
                    <img src={mexican} alt=""/>
                    <h2>Mexican</h2>

                </div>
                <div>
                    <img src={salad} alt=""/>
                    <h2>Salad</h2>

                </div>
                <div>
                    <img src={chinese} alt=""/>
                    <h2>Chinese</h2>

                </div>
            </div>
        </div>
    )
}

export default Sidebar
