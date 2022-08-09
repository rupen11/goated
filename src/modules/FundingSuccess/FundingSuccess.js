import React from 'react'
import './FundingSuccess.css'
import { Zigzag, Success } from '../../assets/icons'
import Slider from '../../components/Slider'
import GoatButton from '../../components/GoatButton';

const FundingSuccess = () => {
    return (
        <div className='fundingsuccess_container'>
            <div className="fundingsuccess_inner_container">

                <Slider title={'Fund your account'} description={"Easily import your funds from FTX"} slide={'third'} />

                <div className="fundingsuccess_box">

                    <Success fill='#88C800' className='fundingsuccess_box_img' />
                    <div className="fundingsuccess_currency">12,304 USDC</div>
                    <div className="fundingsuccess_status">Deposit Successful</div>

                    <GoatButton customeStyle={{}} linkroutepath={'/'} text={'Continue to Trade'} disabled={false} />
                </div>

            </div>
            <div className="zigzag_img">
                <Zigzag fill='#10171F' className='zigzig_img_content' />
            </div>
        </div>
    )
}

export default FundingSuccess

