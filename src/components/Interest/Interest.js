import React from 'react'
import './Interest.css'
import Plus from '../../assets/icons/plus.svg'
import Right from '../../assets/icons/right.svg'

const Interest = ({ name, svg, status }) => {

    const selectInterest = (name, status) => {
        // const intrest = prefrences_arr.filter((item) => item.interest_name === name)
        status = 'select'
    }

    return (
        <div className={`interest_card ${status === 'select' && 'interest_select'}`} onClick={() => selectInterest(name, status)}>
            <img src={svg} alt="" />
            <p className="interest_name">{name}</p>
            <img src={status === 'none' ? Plus : Right} alt="" />
        </div>
    )
}

export default Interest