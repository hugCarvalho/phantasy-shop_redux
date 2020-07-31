import React from 'react'
import Home from "../pages/Home"
import ItemList from '../pages/ItemList'
import Cart from "../pages/Cart"
import Login from "../pages/Login"
import Register from "../pages/Register"

function Nav() {
    return (
        <div>
            <ul>
                <li><Home/></li>
                <li><ItemList/></li>
                <li><Cart/></li>
                <li><Login/></li>
                
                <li><Register/></li>
            </ul>
            
        </div>
    )
}

export default Nav
