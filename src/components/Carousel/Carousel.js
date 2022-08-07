import React from 'react'
import './Carousel.css'
import HomeImage from '../../assets/homepage/homeimg.jpg'

const Carousel = () => {
    return (
        <div className="carousel_container">
            <img src={HomeImage} alt="homeimg" />
        </div>
    )
}

export default Carousel