import React from 'react'
import './Balance.css'
import { GoatBalanceIcon, StakedIcon } from '../../assets/homepage'

const Balance = () => {
    return (
        <div className="home_right_in_balance_content">
            <div className="home_right_in_balance_box">
                <div className="home_right_in_balance_img">
                    {/* <GoatBalanceIcon fill='#88C800' /> */}
                    <StakedIcon fill='#88C800' />
                </div>
                <div className="home_right_in_balance_container">
                    <p className="home_right_in_heading">goat balance</p>
                    <p className="home_right_in_balance">$10,230</p>
                </div>
            </div>
            <div className="home_right_in_balance_box">
                <div className="home_right_in_balance_img">
                    <StakedIcon fill='#88C800' />
                </div>
                <div className="home_right_in_balance_container">
                    <p className="home_right_in_heading">Stacked</p>
                    <p className="home_right_in_balance">$10.3k</p>
                </div>
            </div>
        </div>
    )
}

export default Balance