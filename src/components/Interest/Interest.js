import React, { useState } from 'react'
import './Interest.css'
import Plus from '../../assets/icons/plus.svg'
import Right from '../../assets/icons/right.svg'

const Interest = ({ name, svg }) => {

    const [status, setStatus] = useState('none');

    const selectInterest = status => status === 'none' ? setStatus('select') : setStatus('none');

    return (
        <div className={`interest_card ${status === 'select' && 'interest_select'}`} onClick={() => selectInterest(status)}>
            <img src={svg} alt="" />
            <p className="interest_name">{name}</p>
            <img src={status === 'none' ? Plus : Right} alt="" />
        </div>
    )
}

export default Interest