import React from 'react'
import './ScoreText.css'

const ScoreText = (props) => {
    const { score } = props;
    return (
        <div className="marketcard_item_score">{score}</div>
    )
}

export default ScoreText