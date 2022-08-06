import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
import HomeImage from '../../assets/homepage/Group49.svg'

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Sidebar />
                <div className="home_right_container">
                    <div className="home_right_inner_container">
                        <div className="home_right_box">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home