import React from 'react'
import './HomeRight.css'
// import HomeRightOut from '../HomeRigthOut'
import HomeRightIn from '../HomeRightIn/HomeRightIn'
import Carousel from '../Carousel'
import Model from '../Model'

const HomeRight = () => {
    return (
        <>
            <div className="home_right_container">
                <div className="home_right_box">
                    <Carousel />
                    <Model customeStyle={{ height: '100%', overflow: 'hidden' }}>
                        <HomeRightIn />
                    </Model>
                    {/* <Model customeStyle={{ height: '251px', padding: 20 }}>
                        <HomeRightOut />
                    </Model> */}
                </div>
            </div>
        </>
    )
}

export default HomeRight