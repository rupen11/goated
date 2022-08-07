import React, { useCallback, useState } from 'react'
import './HomeRightIn.css'
import { BalanceIcon, DepositIcon, WithdrawIcon } from '../../assets/homepage';
import Deposit from '../Deposit';
import Withdraw from '../Withdraw';
import Balance from '../Balance';

const HomeRightIn = () => {
    const [tab, setTab] = useState('balance')

    const changeTab = useCallback((tabId) => {
        setTab(tabId)
    }, [])

    return (
        <div className="home_right_in">
            <div className="home_right_in_header">
                <ul className="home_right_in_list">
                    <li role="button" className={`home_right_in_items ${tab === 'balance' && 'active_home_right'}`} onClick={() => changeTab('balance')}>
                        <BalanceIcon fill={`${tab === 'balance' ? '#88C800' : '#39495A'}`} />
                        Balance
                    </li>
                    <li role="button" className={`home_right_in_items ${tab === 'deposit' && 'active_home_right'}`} onClick={() => changeTab('deposit')}>
                        <DepositIcon fill={`${tab === 'deposit' ? '#88C800' : '#39495A'}`} />
                        Deposite
                    </li>
                    <li role="button" className={`home_right_in_items ${tab === 'withdraw' && 'active_home_right'}`} onClick={() => changeTab('withdraw')}>
                        <WithdrawIcon fill={`${tab === 'withdraw' ? '#88C800' : '#39495A'}`} />
                        Withdraw
                    </li>
                </ul>
            </div>

            {tab === 'balance' && <Balance />}
            {tab === 'deposit' && <Deposit customeStyle={{ padding: 20 }} linkroutepath={'/'} />}
            {tab === 'withdraw' && <Withdraw customeStyle={{ padding: 20 }} linkroutepath={'/'} />}
        </div>
    )
}

export default HomeRightIn