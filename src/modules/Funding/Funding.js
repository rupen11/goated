import React from 'react'
import './Funding.css'
import zigzag from '../../assets/Zigzag Vertical.svg'
import Slider from '../../components/Slider'
import { Link } from "react-router-dom";
import DepositIcon from '../../assets/icons/Group2.svg'
import USDcoin from '../../assets/icons/usdcoin.svg'
import Loading from '../../assets/loading/loader.gif'
import CopyIcon from '../../assets/icons/copy.svg'
import Unfold from '../../assets/icons/unfold.svg'

const Funding = () => {
    return (
        <div className='funding_container'>
            <div className="funding_inner_container">

                <Slider title={'Fund your account'} description={"Easily import your funds from FTX"} slide={'third'} />

                <div className="funding_box">

                    <h5 className="funding_heading">Deposit from Wallet</h5>

                    <div className="funding_input_container">
                        <input type="text" className='funding_input' placeholder='0x7hufkh732Dhfa3Dlkjdshuw389dsfsdh' />
                        <img src={CopyIcon} alt="copy" />
                    </div>

                    <div className="funding_heading_container">
                        <img src={DepositIcon} alt="deposit icon" />
                        <h5 className="funding_heading">Deposit from Wallet</h5>
                    </div>

                    <div className="funding_input_container">
                        <input type="number" className='funding_input' placeholder='Enter an amount' />
                        <img src={Unfold} alt="unfold" />
                    </div>

                    <div className="funding_flex">
                        <p className="funding_balane_heading">FTX Balance</p>
                        <div className="funding_flex_right">
                            <img src={USDcoin} alt="usdcoin" />
                            <p className="funding_balance">3455.39 <span>USDC</span></p>
                        </div>
                    </div>

                    <Link to='/prefernces' className='funding_btn_text'>
                        <button className='funding_btn'>
                            Deposit Funds
                        </button>
                    </Link>
                </div>

                <div className="funding_status_container">
                    <img src={Loading} alt="loading" />
                    <p className="funding_status">
                        It takes about 3-4 minutes for the transaction to be confirmed
                    </p>
                </div>


                <div className="funding_skip_container">
                    <p className="funding_skip">
                        skip for now
                    </p>
                </div>
            </div>
            <div className="zigzag_img">
                <img src={zigzag} alt="zig zag" />
            </div>
        </div >
    )
}

export default Funding