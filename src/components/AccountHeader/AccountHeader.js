import React from 'react'
import './AccountHeader.css'

const AccountHeader = (props) => {
    const { title, description } = props;
    return (
        <div className="account_header">
            <h4 className="account_heading">{title}</h4>
            <p className="account_overview_para">{description}</p>
        </div>
    )
}

export default AccountHeader