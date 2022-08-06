import React, { useState } from 'react'
import './NavbarMain.css'
import logo from '../../assets/logos/logomain.svg'
import avatar from '../../assets/avatar/avatarJ.svg'
import Arrowdown from '../../assets/icons/arrowdown.svg'
import Group2 from '../../assets/icons/Group2.svg'

const NavbarMain = () => {

    const [show, setShow] = useState(false);

    return (
        <div className={`navbarmain_container ${show && 'activehum'}`}>
            <div className="navbarmain_left">
                <div className={`navbarmain_menubar ${show && 'activehum'}`} onClick={() => setShow(!show)}>
                    <div className="navbarmain_humberger">
                        <div className="navbarmain_bar"></div>
                    </div>
                </div>
                <div className="navbarmain_img">
                    <img src={logo} alt="logo" />
                </div>
            </div>
            <div className="navbarmain_right">
                <ul className="navbarmain_list">
                    <li className="navbarmain_list_item activepage">Home</li>
                    <li className="navbarmain_list_item">Account</li>
                    <li className="navbarmain_list_item">My Bets</li>
                    <li className="navbarmain_list_item">FAQ</li>
                </ul>
                <div className="navbarmain_over">
                    <div className="navbarmain_over_out">
                        <div className="navbarmain_out_img">
                            <img src={Group2} alt="signup" />
                        </div>
                        <div className="navbarmain_out_text">
                            Sign in with FTX
                        </div>
                    </div>
                    {/* <div className="navbarmain_over_in">
                        <div className="navbarmain_over_left">
                            <img src={avatar} alt="avatar" className='navbarmain_avatar' />
                            <p className="navbarmain_over_name">Jonathan Smith</p>
                        </div>
                        <div className="navbarmain_over_right">
                            <img src={Arrowdown} alt="arrowdown" className='navbarmain_arrowdown' />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default NavbarMain