import React from 'react'
import './Model.css'

const Model = (props) => {
    const { customeStyle, ...other } = props;
    return (
        <div className='model_container' style={{ ...customeStyle }} {...other}></div>
    )
}

export default Model