import React from 'react'
import Model from '../Model'
import './Bet.css'
import image6 from '../../assets/market/image4.svg'
import { ArrowDown } from '../../assets/icons'
import unfold from '../../assets/icons/unfold.svg'
import GoatButton from '../GoatButton'
import Bedge from '../Bedge'
import Loading from '../../assets/loading/loader.gif'

const Bet = (props) => {
    const { changeShow } = props;
    return (
        <div className="bet_container">
            <Model customeStyle={{ minWidth: '325px', minHeight: '495px', flex: 0 }}>
                <button className="bet_close" onClick={() => changeShow(false)}>Close</button>
                <div className="bet_header">
                    <div className="bet_header_group">
                        <img src={image6} alt={image6} />
                        <div className="bet_header_inner_group">
                            <p className="bet_header_title">outcome</p>
                            <p className="bet_header_description">Real Madrid Wins</p>
                        </div>
                    </div>
                    <div className="bet_header_group">
                        <ArrowDown fill='#39495A' />
                    </div>
                </div>
                <div className="bet_body">
                    <div className="bet_content_header">
                        <p className="bet_content_title">odds</p>
                        <p className="bet_content_score">0.92</p>
                    </div>
                    <div className="bet_content">
                        <label className="bet_content_label" htmlFor='amount'>Amount</label>
                        <div className="bet_content_input_container">
                            <input type="number" name="amount" id="amount" value='$293' placeholder='Enter an Amount' className='bet_content_input' />
                            <img src={unfold} alt="unfold" />
                        </div>
                        <p className="bet_content_balance">Balance $2930</p>
                    </div>
                    <div className="bet_content_per">
                        <div className="bet_content_per_container">
                            <p className='bet_content_per_para'>5%</p>
                        </div>
                        <div className="bet_content_per_container">
                            <p className='bet_content_per_para'>25%</p>
                        </div>
                        <div className="bet_content_per_container">
                            <p className='bet_content_per_para'>50%</p>
                        </div>
                        <div className="bet_content_per_container">
                            <p className='bet_content_per_para'>75%</p>
                        </div>
                        <div className="bet_content_per_container">
                            <p className='bet_content_per_para'>Max</p>
                        </div>
                    </div>
                    <div className="bet_content_overview">
                        <div className="bet_content_overview_container">
                            <div className="bet_content_overview_group">
                                <p className="bet_content_overview_label">Payout</p>
                                <p className="bet_content_overview_value">33.00</p>
                            </div>
                        </div>
                        <div className="bet_content_overview_container">
                            <div className="bet_content_overview_group">
                                <p className="bet_content_overview_label">Stack</p>
                                <p className="bet_content_overview_value">12.21</p>
                            </div>
                        </div>
                        <div className="bet_content_overview_container">
                            <div className="bet_content_overview_group">
                                <p className="bet_content_overview_label">Profits</p>
                                <p className="bet_content_overview_value">20.38</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bet_footer">
                    <GoatButton customeStyle={{ margin: 0 }} linkroutepath={'/'} text={'Place Bet'} disabled={false} />
                    <Bedge svg={Loading} customeStyle={{ width: '100%', minWidth: '100%', margin: 0 }} text='Please read the docs again carefully
without letting something happen' />
                </div>
            </Model>
        </div>
    )
}

export default Bet