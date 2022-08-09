import React from 'react'
import './Funding.css'
import { Zigzag } from '../../assets/icons'
import Slider from '../../components/Slider'
import Loading from '../../assets/loading/loader.gif'
import Deposit from '../../components/Deposit';
import Bedge from '../../components/Bedge'

const Funding = () => {
    return (
        <div className='funding_container'>
            <div className="funding_inner_container">

                <Slider title={'Fund your account'} description={"Easily import your funds from FTX"} slide={'third'} />

                <div className="funding_box">
                    <Deposit linkroutepath={'/fundingsuccess'} customeStyle={{padding: 20}} />
                </div>

                <Bedge svg={Loading} text='It takes about 3-4 minutes for the transaction to be confirmed' />

                <div className="funding_skip_container">
                    <p className="funding_skip">
                        skip for now
                    </p>
                </div>
            </div>
            <div className="zigzag_img">
                <Zigzag fill='#10171F' className='zigzig_img_content' />
            </div>
        </div >
    )
}

export default Funding