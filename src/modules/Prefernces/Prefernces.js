import React, { } from 'react'
import './Prefernces.css'
import zigzag from '../../assets/Zigzag Vertical.svg'
import Slider from '../../components/Slider'
import Vector1 from '../../assets/interest/Vector1.svg'
import Vector2 from '../../assets/interest/Vector2.svg'
import Vector3 from '../../assets/interest/Vector3.svg'
import Vector4 from '../../assets/interest/Vector4.svg'
import Vector5 from '../../assets/interest/Vector5.svg'
import Vector6 from '../../assets/interest/Vector6.svg'
import Vector7 from '../../assets/interest/Vector7.svg'
import Vector8 from '../../assets/interest/Vector8.svg'
import Interest from '../../components/Interest/Interest'
import { Link } from 'react-router-dom'

const Prefernces = () => {

    const prefernces_arr = [
        {
            interest_name: 'Football',
            status: 'none',
            svg: Vector1
        },
        {
            interest_name: 'Baseball',
            status: 'none',
            svg: Vector2
        },
        {
            interest_name: 'Tennis',
            status: 'none',
            svg: Vector3
        },
        {
            interest_name: 'Basketball',
            status: 'none',
            svg: Vector4
        },
        {
            interest_name: 'Esports',
            status: 'select',
            svg: Vector5
        },
        {
            interest_name: 'MMA',
            status: 'none',
            svg: Vector6
        },
        {
            interest_name: 'Volleyball',
            status: 'none',
            svg: Vector7
        },
        {
            interest_name: 'Rugby',
            status: 'none',
            svg: Vector8
        },
    ];

    return (
        <div className='prefernces_container'>
            <div className="prefernces_inner_container">

                <Slider title={'Select your preferences'} description={'This helps the understand the app better.'} slide={'second'} />

                <div className="prefernces_box">
                    <div className="prefernces_primary">
                        <h5 className='prefernces_heading'>price formate</h5>
                        <div className="preference_radio">
                            <div className="preference_radio_container">
                                <input
                                    type="radio"
                                    id="decimal"
                                    name="preference_radio"
                                    value="Decimal"
                                    defaultChecked
                                />
                                <label htmlFor="decimal" className='prefernces_label activeradio'>Decimal</label>
                            </div>
                            <div className="preference_radio_container">
                                <input
                                    type="radio"
                                    id="american"
                                    name="preference_radio"
                                    value="American"
                                />
                                <label htmlFor="american" className='prefernces_label activeradio'>American</label>
                            </div>
                            <div className="preference_radio_container">
                                <input
                                    type="radio"
                                    id="probability"
                                    name="preference_radio"
                                    value="Probability"
                                />
                                <label htmlFor="probability" className='prefernces_label activeradio'>Probability</label>
                            </div>
                        </div>
                    </div>

                    <div className='prefernces_hr'></div>

                    <div className="prefernces_primary">
                        <h5 className='prefernces_heading'>select interests</h5>

                        <div className="prefernces_interest">
                            {
                                prefernces_arr && prefernces_arr.map(item => <Interest key={item.interest_name} name={item.interest_name} svg={item.svg} status={item.status} />)
                            }
                        </div>
                    </div>

                    <Link to='/' className='prefernces_btn_text'>
                        <button className='prefernces_btn'>
                            Continue to Goated
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

export default Prefernces