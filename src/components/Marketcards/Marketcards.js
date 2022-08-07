import React from 'react'
import './Marketcards.css'
import image1 from '../../assets/market/image1.svg'
import image2 from '../../assets/market/image2.svg'
import image3 from '../../assets/market/image3.svg'
import image4 from '../../assets/market/image4.svg'
import image5 from '../../assets/market/image5.svg'
import image6 from '../../assets/market/image6.svg'
import image7 from '../../assets/market/image7.svg'
import Model from '../Model'
import Marketcard from '../Marketcard'
import { ArrowRight, Football, More } from '../../assets/homepage'

const Marketcards = (props) => {
    const { footerText } = props;
    console.log(footerText);
    return (
        <Model customeStyle={{
            'minHeight': '313px', flex: 1, 'minWidth': '313px', position: 'relative'
        }} >
            <div className="marketcard_header">
                <div className="marketcard_controller">
                    <Football fill='#5C6E93' />
                    <More fill='#5C6E93' />
                </div>
                <p className="marketcard_title">Brazil vs Germany</p>
                <p className="marketcard_description">JUN 16 2:40 PM GMT</p>
            </div>
            <div className="marketcard_body">
                <Marketcard title={'Germany Wins'} score={0.79} svg={image3} />
                <Marketcard title={'Brazil Wins'} score={0.21} svg={image2} />
                {/* <Marketcard title={'Brazil Wins'} score={0.21} svg={image1} /> */}
            </div>
            {
                footerText &&
                <div className="marketcard_footer">
                    <p className="marketcard_footer_text">{footerText}</p>
                    <ArrowRight fill='#88C800' className='marketcard_footer_arrowright' />
                </div>
            }
        </Model >
    )
}

export default Marketcards