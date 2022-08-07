import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import './Home.css'
import HomeRight from '../../components/HomeRight'
import Market from '../../components/Market'

const Home = () => {
    return (
        <>
            <div className="home_container">
                <Sidebar />
                <HomeRight />
            </div>
        </>
    )
}

export default Home