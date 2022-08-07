import React from 'react'
import './GoatButton.css'
import { Link } from 'react-router-dom'

const GoatButton = (props) => {
    const { customeStyle, linkroutepath, text, disabled } = props;
    return (
        <Link to={linkroutepath} className='goat_btn_text'>
            <button className='goat_btn' style={{ ...customeStyle }} disabled={disabled}>
                {text}
            </button>
        </Link>
    )
}

export default GoatButton