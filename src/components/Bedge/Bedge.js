import React from 'react'
import './Bedge.css'

const Bedge = (props) => {
    const { svg, customeStyle, text } = props
    return (
        <div className="funding_status_container" style={{ ...customeStyle }}>
            <img src={svg} alt={svg} />
            <p className="funding_status">
                {text}

            </p>
        </div>
    )
}

export default Bedge