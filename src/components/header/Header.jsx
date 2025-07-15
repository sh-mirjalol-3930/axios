import React from 'react'
import "./header.scss"
import logo from "../header/logo.svg"
import user from "../header/user.svg"
import cart from "../header/Cart.svg"

const Header = () => {
  return (
    <header>
        <div className="container">
            <div className="row">
                <img src={logo} alt="" />
                <nav>
                    <ul className='row'>
                        <li><select name="" id="">
                            <option value="Discovery">Discovery</option>
                            <option value="bir nima">bir nima</option>
                            <option value="nimadur">nimadur</option>
                        </select></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact us</a></li>
                    </ul>
                </nav>
                <div className="row">
                    <img src={user} alt="" />
                    <img src={cart} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header