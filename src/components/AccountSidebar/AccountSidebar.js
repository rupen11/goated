import React from 'react'
import { ArrowLeft } from '../../assets/icons'
import './AccountSidebar.css'
import { Overview, CurrentBet, LogOut, HelpIcon } from '../../assets/sidebar_icon'
import { BalanceIcon, ArrowRight } from '../../assets/homepage'

const AccountSidebar = (props) => {
    const { open, setOpen } = props;
    return (
        <div className={`accountsidebar_container ${open && 'active_accountsidebar'}`}>
            <div className="accountsidebar_inner_container">
                <div className="accountsidebar_header" onClick={() => setOpen(!open)}>
                    <ArrowLeft fill='#394D61' />
                    <p className='accountsidebar_heading'>Back to trading</p>
                </div>
                <ul className="accountsidebar_list">
                    <li className="accountsidebar_item active_accountsidebar_tab">
                        <span className='accountsidebar_item_icon'>
                            <Overview fill='#88C800' />
                        </span>
                        <span className='accountsidebar_item_name'>Overview</span>
                    </li>
                    <li className="accountsidebar_item">
                        <span className='accountsidebar_item_icon'>
                            <ArrowRight fill='#405162' />
                        </span>
                        <span className='accountsidebar_item_name'>Past Trades</span>
                    </li>
                    <li className="accountsidebar_item">
                        <span className='accountsidebar_item_icon'>
                            <CurrentBet fill='#405162' />
                        </span>
                        <span className='accountsidebar_item_name'>Current Bets</span>
                    </li>
                    <li className="accountsidebar_item">
                        <span className='accountsidebar_item_icon'>
                            <BalanceIcon fill='#405162' />
                        </span>
                        <span className='accountsidebar_item_name'>Self Exclude</span>
                    </li>
                    <li className="accountsidebar_item">
                        <span className='accountsidebar_item_icon'>
                            <HelpIcon fill='#405162' />
                        </span>
                        <span className='accountsidebar_item_name'>Help Docs</span>
                    </li>
                    <li className="accountsidebar_item">
                        <span className='accountsidebar_item_icon'>
                            <LogOut fill='#405162' />
                        </span>
                        <span className='accountsidebar_item_name'>Log out</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountSidebar