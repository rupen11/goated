import React, { useState } from 'react'
import AccountHeader from '../../components/AccountHeader/AccountHeader';
import GoatButton from '../../components/GoatButton';
import HomeRightIn from '../../components/HomeRightIn';
import Model from '../../components/Model';
import { Active } from '../../assets/market'
import image3 from '../../assets/market/image3.svg'
import './Account.css';
import { More } from '../../assets/homepage';
import AccountSidebar from '../../components/AccountSidebar';

const Account = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="account_container">

            <AccountSidebar open={open} setOpen={setOpen} />
            <div role='button' className="toggle_accountsidebar" onClick={() => setOpen(!open)}>
                <More fill={`${open ? '#88C800' : '#5C6E93'}`} />
            </div>

            <div className="account_group">
                <AccountHeader title={'Your account'} description={'Your account overview appears here'} />
                <div className="account_inner_container">
                    <Model customeStyle={{ height: '100%', overflow: 'hidden', flex: 2 }}>
                        <HomeRightIn />
                    </Model>
                    <Model customeStyle={{ height: '243px', backgroundColor: 'var(--primary)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <h3 className='account_discover'>Discover new markets to trade</h3>
                        <GoatButton customeStyle={{ backgroundColor: 'var(--white)', color: 'var(--primary)', textTrasform: 'uppercase' }} linkroutepath={'/'} text={'Back to Trading'} disabled={false} />
                    </Model>
                </div>
            </div>

            <div className="account_group">
                <AccountHeader title={'Active Orders'} description={'Your previous trades will appear here'} />
                <div className="account_activeorder_container">
                    <table className='account_activeorder_table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>market</th>
                                <th>outcome</th>
                                <th>odds</th>
                                <th>stack</th>
                                <th>placed on</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#23</td>
                                <td>Real Madrid vs Barcelona</td>
                                <td>
                                    <img src={image3} alt="image3" />
                                    <p>Madrid Win</p>
                                    <Active fill='#30D25E' />
                                </td>
                                <td>0.34 </td>
                                <td>23.45</td>
                                <td>12/10/22 12:34:38 PM GMT</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="account_group">
                <AccountHeader title={'Past Trades'} description={'Your previous trades will appear here'} />
                <div className="account_activeorder_container">
                    <table className='account_activeorder_table'>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>market</th>
                                <th>outcome</th>
                                <th>odds</th>
                                <th>stack</th>
                                <th>placed on</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#23</td>
                                <td>Real Madrid vs Barcelona</td>
                                <td>
                                    <img src={image3} alt="image3" />
                                    <p>Madrid</p>
                                    <Active fill='#30D25E' />
                                </td>
                                <td>0.34 </td>
                                <td>23.45</td>
                                <td>12/10/22 12:34:38 PM GMT <More fill='#6F879C' style={{ marginLeft: '10px' }} /></td>
                            </tr>
                            <tr>
                                <td>#23</td>
                                <td>Real Madrid vs Barcelona</td>
                                <td>
                                    <img src={image3} alt="image3" />
                                    <p>Madrid</p>
                                    <Active fill='#30D25E' />
                                </td>
                                <td>0.34 </td>
                                <td>23.45</td>
                                <td>12/10/22 12:34:38 PM GMT <More fill='#6F879C' style={{ marginLeft: '10px' }} /></td>
                            </tr>
                            <tr>
                                <td>#23</td>
                                <td>Real Madrid vs Barcelona</td>
                                <td>
                                    <img src={image3} alt="image3" />
                                    <p>Madrid</p>
                                    <Active fill='#30D25E' />
                                </td>
                                <td>0.34 </td>
                                <td>23.45</td>
                                <td>12/10/22 12:34:38 PM GMT <More fill='#6F879C' style={{ marginLeft: '10px' }} /></td>
                            </tr>
                            <tr>
                                <td>#23</td>
                                <td>Real Madrid vs Barcelona</td>
                                <td>
                                    <img src={image3} alt="image3" />
                                    <p>Madrid</p>
                                    <Active fill='#30D25E' />
                                </td>
                                <td>0.34 </td>
                                <td>23.45</td>
                                <td>12/10/22 12:34:38 PM GMT <More fill='#6F879C' style={{ marginLeft: '10px' }} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="account_group">
                <div className="account_footer">
                    <AccountHeader title={'Self Exclude'} description={'Self exclude yourself from Goated`s terms and conditions apply, this is just some text'} />

                    <button className="footer_btn">
                        Self Exclude
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Account