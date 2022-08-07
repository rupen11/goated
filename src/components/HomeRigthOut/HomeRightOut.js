import React from 'react'
import './HomeRightOut.css'
import DepositIcon from '../../assets/icons/Group2.svg'
import ArrowRight from '../../assets/icons/arrowright.svg'

const HomeRightOut = () => {
    return (
        <div className="home_right_box_out">
            <h3 className='home_right_box_out_heading'>Why join Goated?</h3>
            <div className="home_right_box_out_checkbox_container">
                <label className="home_right_box_out_checkbox"> Login using your exisitng FTX Account
                    <input type="checkbox" checked readOnly />
                    <span className="home_right_box_out_mark"></span>
                </label>
                <label className="home_right_box_out_checkbox"> Easily withdraw and deposit anytime
                    <input type="checkbox" checked readOnly />
                    <span className="home_right_box_out_mark"></span>
                </label>
                <label className="home_right_box_out_checkbox"> Trusted by 10,000+ Customers
                    <input type="checkbox" checked readOnly />
                    <span className="home_right_box_out_mark"></span>
                </label>
            </div>
            <button className="home_right_box_out_btn">
                <img src={DepositIcon} alt="depositeicon" className='home_right_box_out_depimg' />
                <p className='home_right_box_out_para'>sign in with ftx</p>
                <img src={ArrowRight} alt="arrow right" className='home_right_box_out_arrowright' />
            </button>
        </div>
    )
}

export default HomeRightOut