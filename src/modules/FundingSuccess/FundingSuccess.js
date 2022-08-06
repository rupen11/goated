import React from 'react'
import './FundingSuccess.css'
import zigzag from '../../assets/icons/Zigzag Vertical.svg'
import Slider from '../../components/Slider'
import { Link } from "react-router-dom";
import Success from '../../assets/icons/success.svg'

const FundingSuccess = () => {
    return (
        <div className='fundingsuccess_container'>
            <div className="fundingsuccess_inner_container">

                <Slider title={'Fund your account'} description={"Easily import your funds from FTX"} slide={'third'} />

                <div className="fundingsuccess_box">

                    <img src={Success} alt="success" />
                    <div className="fundingsuccess_currency">12,304 USDC</div>
                    <div className="fundingsuccess_status">Deposit Successful</div>

                    <Link to='/prefernces' className='fundingsuccess_btn_text'>
                        <button className='fundingsuccess_btn'>
                            Continue to Trade
                        </button>
                    </Link>
                </div>

            </div>
            <div className="zigzag_img">
                <img src={zigzag} alt="zig zag" />
            </div>
        </div>
    )
}

export default FundingSuccess

