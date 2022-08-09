import React from 'react'
import './Market.css'
import Marketcards from '../Marketcards'
import { Treding } from '../../assets/icons'
import { useNavigate } from 'react-router-dom';

const Market = (props) => {
    const { title } = props;

    const navigate = useNavigate();

    return (
        <div className='market_conatiner'>
            <div className="market_header">
                <div className="market_heading_container">
                    <Treding fill='#88C800' />
                    <h3 className='market_heading'>{title}</h3>
                </div>
                <span className="market_underline"></span>
            </div>
            <div className="marketcard_container">
                <div className="marketcard_box" onClick={() => navigate('/marketdetail')}>
                    <Marketcards title={'Brazil vs Germany'} />
                    <Marketcards title={'Real Madrid vs Barcelona'} />
                    <Marketcards title={'Worldcup Semifinals'} footerText={'View 8 more outcomes'} />
                    <Marketcards title={'Real Madrid vs Barcelona'} />
                    <Marketcards title={'Worldcup Semifinals'} />
                    <Marketcards title={'Brazil vs Germany'} />
                    <Marketcards title={'Real Madrid vs Barcelona'} />
                    <Marketcards title={'Worldcup Semifinals'} />
                    <Marketcards title={'Brazil vs Germany'} />
                </div>
            </div>
        </div>
    )
}

export default Market