import React, { useCallback, useState } from 'react'
import './MarketDetail.css'
import { Football, More } from '../../assets/homepage'
import { Active, ArrowBack, Tab } from '../../assets/market'
import Model from '../../components/Model'
import Market from '../../components/Market'
import Marketcard from '../../components/Marketcard'
import image3 from '../../assets/market/image3.svg'
import image2 from '../../assets/market/image2.svg'
import image1 from '../../assets/market/image1.svg'
import Bet from '../../components/Bet/Bet'
import { useNavigate } from 'react-router-dom';

const MarketDetail = () => {

    const [show, setShow] = useState(true);

    const navigate = useNavigate();

    const changeShow = useCallback((value) => {
        setShow(value);
    }, []);

    return (
        <div className="marketdetail_container">
            <div className="marketdetail_inner_containier">
                <div className="marketdetail_overly"></div>
                <div className="marketdetail_icon">
                    <Football fill='#ffffff' />
                </div>
                <div className="marketdetail_header">
                    <div className="marketdetail_group">
                        <div className="marketdetail_controller">
                            <ArrowBack fill='#39495A' onClick={() => navigate('/')} />
                            <p className="marketdetail_label">Football / Events / Worldcup</p>
                        </div>
                        <div className="marketdetail_controller">
                            <More fill='#39495A' onClick={() => changeShow(true)} />
                        </div>
                    </div>
                    <div className="marketdetail_group">
                        <div className="marketdetail_detail_wrapper">
                            <div className="marketdetail_title">
                                Real Madrid vs Barcelona
                            </div>
                            <div className="marketdetail_date">
                                JUN 16 2:40 PM GMT
                            </div>
                        </div>
                        <div className="marketdetail_detail_wrapper">
                            <Active fill='#30D25E' />
                        </div>
                    </div>
                    <div className="marketdetail_group">
                        <p className="marketdetail_description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        </p>
                    </div>
                </div>
                <div className="marketdetail_content">
                    <div className="marketdetail_cards">
                        <div className="marketdetail_card">
                            <div className="marketdetail_card_header">
                                <div className="marketdetail_card_group">
                                    <Tab fill='#88C800' />
                                    <div className="marketdetail_card_title">
                                        Outcomes
                                    </div>
                                </div>
                                <div className="marketdetail_card_group">
                                    <div className="marketdetail_card_description">
                                        3 OUTCOMES
                                    </div>
                                </div>
                            </div>
                            <Model customeStyle={{ minHeight: '185px', minWidth: '300px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <Marketcard title={'Madrid Wins'} score={0.79} svg={image3} />
                                <Marketcard title={'Barcelona Wins'} score={0.79} svg={image2} />
                                <Marketcard title={'Match Drawn'} score={0.79} svg={image1} />
                            </Model>
                        </div>

                        <div className="marketdetail_card">
                            <div className="marketdetail_card_header">
                                <div className="marketdetail_card_group">
                                    <Tab fill='#88C800' />
                                    <div className="marketdetail_card_title">
                                        My bets
                                    </div>
                                </div>
                                <div className="marketdetail_card_group">
                                    <div className="marketdetail_card_description">
                                        View all
                                    </div>
                                </div>
                            </div>
                            <Model customeStyle={{ 'min-height': '185px' }}>
                                <table className='marketdetail_card_table'>
                                    <thead>
                                        <tr>
                                            <th>outcomes</th>
                                            <th>odds</th>
                                            <th>stake</th>
                                            <th>placed on</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className="marketcard_group">
                                                    <img src={image1} alt={image1} />
                                                    <p className="marketcard_item_title">Madrid Wins</p>
                                                </div>
                                            </td>
                                            <td>0.34</td>
                                            <td>23.45</td>
                                            <td>12/10/22</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </Model>
                        </div>
                    </div>
                </div>
                <Market title={'Similar Markets'} />
                {show && <Bet changeShow={changeShow} />}
            </div>
        </div>
    )
}

export default MarketDetail