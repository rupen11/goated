import React from 'react'
import './Navbar.css'
import logo from '../../assets/logos/logotext.svg'
import avatar from '../../assets/avatar/avatar.svg'
import { ArrowDown1 } from '../../assets/icons'

const Navbar = () => {
    return (
        <div className='navbar_container'>
            <div className="navbar_img">
                <img src={logo} alt="logo" />
            </div>
            <div className="navbar_over">
                <div className="navbar_over_left">
                    <img src={avatar} alt="avatar" className='navbar_avatar' />
                    <p className="navbar_over_name">Jonathan Smith</p>
                </div>
                <div className="navbar_over_right">
                    <ArrowDown1 className='navbar_arrowdown' fill='#39495A' />
                </div>
            </div>
        </div>
    )
}

export default Navbar