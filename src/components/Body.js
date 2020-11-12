import React from 'react'
import "./Body.css"
import Restaurant from './Restaurant'
import Sidebar from './Sidebar'

function Body() {
    return (
        <div className="body">
            <Sidebar/>
            <Restaurant/>
            
        </div>
    )
}

export default Body
