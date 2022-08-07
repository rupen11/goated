import React from 'react'
import './Marketcard.css'
import ScoreText from '../ScoreText'

const Marketcard = ({ title, score, svg }) => {
    return (
        <div className="marketcard_item">
            <div className="marketcard_group">
                <img src={svg} alt={svg} />
                <p className="marketcard_item_title">{title}</p>
            </div>
            <ScoreText score={score} />
        </div>
    )
}

export default Marketcard