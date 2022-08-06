import React from 'react'
import Basketball from '../../assets/sidebar_icon/Basketball'
import Boxing from '../../assets/sidebar_icon/Boxing'
import Cricket from '../../assets/sidebar_icon/Cricket'
import Popular from '../../assets/sidebar_icon/Popular'
import Football from '../../assets/sidebar_icon/Football'
import Game from '../../assets/sidebar_icon/Game'
import Tennis from '../../assets/sidebar_icon/Tennis'
import Helmet from '../../assets/sidebar_icon/Helmet'
import './Sidebar.css'
import SidebarLeft from '../SidebarLeft/SidebarLeft'
import SidebarRight from '../SidebarRight/SidebarRight'

const Sidebar = () => {

    const sidebar_contents = [
        {
            svg: <Popular fill='#88C800' />,
            title: 'Popular',
            active: true
        },
        {
            svg: <Basketball fill='#5C6E93' />,
            title: 'Basketball',
            active: false
        },
        {
            svg: <Boxing fill='#5C6E93' />,
            title: 'Boxing',
            active: false
        },
        {
            svg: <Cricket fill='#5C6E93' />,
            title: 'Cricket',
            active: false
        },
        {
            svg: <Football fill='#5C6E93' />,
            title: 'Football',
            active: false
        },
        {
            svg: <Game fill='#5C6E93' />,
            title: 'Game',
            active: false
        },
        {
            svg: <Helmet fill='#5C6E93' />,
            title: 'Helmet',
            active: false
        },
        {
            svg: <Tennis fill='#5C6E93' />,
            title: 'Tennis',
            active: false
        },
    ]

    return (
        <>
            <div className="sidebar_container">
                <SidebarLeft sidebar_contents={sidebar_contents} />
                <SidebarRight />
            </div>
        </>
    )
}

export default Sidebar