import React from 'react'
import './Deposit.css'
import DepositIcon from '../../assets/icons/Group2.svg'
import USDcoin from '../../assets/icons/usdcoin.svg'
import CopyIcon from '../../assets/icons/copy.svg'
import Unfold from '../../assets/icons/unfold.svg'
import GoatButton from '../GoatButton'

const Deposit = (props) => {
    const { customeStyle, linkroutepath } = props;
    return (
        <div className="deposit_container" style={{ ...customeStyle }}>
            <h5 className="deposit_heading">Deposit from Wallet</h5>

            <div className="deposit_input_container">
                <input type="text" className='deposit_input' placeholder='0x7hufkh732Dhfa3Dlkjdshuw389dsfsdh' />
                <img src={CopyIcon} alt="copy" />
            </div>

            <div className="deposit_heading_container">
                <img src={DepositIcon} alt="deposit icon" />
                <h5 className="deposit_heading">Deposit from FTX</h5>
            </div>

            <div className="deposit_input_container">
                <input type="number" className='deposit_input' placeholder='Enter an amount' />
                <img src={Unfold} alt="unfold" />
            </div>

            <div className="deposit_flex">
                <p className="deposit_balane_heading">FTX Balance</p>
                <div className="deposit_flex_right">
                    <img src={USDcoin} alt="usdcoin" />
                    <p className="deposit_balance">3455.39 <span>USDC</span></p>
                </div>
            </div>

            <GoatButton customeStyle={{}} linkroutepath={linkroutepath} text={'Deposit Funds'} />
        </div>
    )
}

export default Deposit