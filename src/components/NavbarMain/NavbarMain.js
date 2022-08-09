import React, { useState } from 'react'
import './NavbarMain.css'
import logo from '../../assets/logos/logomain.svg'
import avatar from '../../assets/avatar/avatarJ.svg'
import { SignupDeposit, ArrowDown1 } from '../../assets/icons'
import { Link, useLocation } from 'react-router-dom'

const NavbarMain = () => {

    const [show, setShow] = useState(false);

    const location = useLocation();

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
                    <li className={`navbarmain_list_item ${location.pathname === '/' && 'activepage'}`} onClick={() => setShow(false)}><Link to='/'>Home</Link></li>
                    <li className={`navbarmain_list_item ${location.pathname === '/account' && 'activepage'}`} onClick={() => setShow(false)}><Link to='/account'>Account</Link></li>
                    <li className={`navbarmain_list_item ${location.pathname === '/bets' && 'activepage'}`} onClick={() => setShow(false)}><Link to='/'>My Bets</Link></li>
                    <li className={`navbarmain_list_item ${location.pathname === '/faq' && 'activepage'}`} onClick={() => setShow(false)}><Link to='/'>FAQ</Link></li>
                </ul>
                <div className="navbarmain_over">
                    <div className="navbarmain_over_out">
                        <div className="navbarmain_out_img">
                            <SignupDeposit className='navbarmain_out_img_container' />
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
                            <ArrowDown1 className="navbarmain_over_right_img" fill='#39495A' />
                        </div>
                    </div> */}
                </div>
            </div >
        </div >
    )
}

export default NavbarMain