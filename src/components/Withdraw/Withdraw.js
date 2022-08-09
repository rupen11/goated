import React from 'react'
import './Withdraw.css'
import { Unfold, DepositIcon, SignupDeposit } from '../../assets/icons'
import GoatButton from '../GoatButton'

const Withdraw = (props) => {
    const { linkroutepath, customeStyle } = props;
    return (
        <div className="withdraw_container" style={{ ...customeStyle }}>

            <div className="withdraw_group">
                <div className="withdraw_heading_container">
                    <SignupDeposit />
                    <h5 className="withdraw_heading">Withdraw to FTX</h5>
                </div>

                <div className="withdraw_input_container">
                    <input type="number" className='withdraw_input' placeholder='Enter an amount' />
                    <Unfold className='withdraw_input_img' fill="#39495A" />
                </div>

                <GoatButton customeStyle={{ marginTop: 21 }} linkroutepath={linkroutepath} text={'Withdraw Funds'} />
            </div>

            <div className="withdraw_group">
                <h5 className="withdraw_heading">Withdraw to Wallet</h5>

                <div className="withdraw_input_container">
                    <input type="text" className='withdraw_input' placeholder='0x7hufkh732Dhfa3Dlkjdshuw389dsfsdh' />
                </div>

                <GoatButton customeStyle={{ marginTop: 21 }} linkroutepath={linkroutepath} text={'Withdraw Funds'} />
            </div>
        </div >
    )
}

export default Withdraw