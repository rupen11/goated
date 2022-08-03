import React from 'react'
import './Slider.css'

const Slider = ({ title, description, slide }) => {
    return (
        <>
            <h3 className='slider_heading'>{title}</h3>
            <p className='slider_para'>{description}</p>

            <div className="slider_crowser">
                <span className={`slider_crow ${slide === 'first' && 'active'}`}></span>
                <span className={`slider_crow ${slide === 'second' && 'active'}`}></span>
                <span className={`slider_crow ${slide === 'third' && 'active'}`}></span>
            </div>
        </>
    )
}

export default Slider