import React from 'react'
import './Market.css'
import Marketcards from '../Marketcards'
import { Treding } from '../../assets/homepage'

const Market = () => {
    return (
        <div className='market_conatiner'>
            <div className="market_header">
                <div className="market_heading_container">
                    <Treding fill='#88C800' />
                    <h3 className='market_heading'>All Markets</h3>
                </div>
                <span className="market_underline"></span>
            </div>
            <div className="marketcard_container">
                <div className="marketcard_box">
                    <Marketcards />
                    <Marketcards />
                    <Marketcards footerText={'View 8 more outcomes'} />
                    <Marketcards />
                    <Marketcards />
                    <Marketcards />
                    <Marketcards />
                    <Marketcards />
                    <Marketcards />
                </div>
            </div>
        </div>
    )
}

export default Market