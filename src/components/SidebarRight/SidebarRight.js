import React, { useState } from 'react'
import Fixtures from '../Fixtures/Fixtures'
import './SidebarRight.css'
import Rectangle427 from '../../assets/icons/Rectangle427.svg'
import Rectangle428 from '../../assets/icons/Rectangle428.svg'
import Rectangle429 from '../../assets/icons/Rectangle429.svg'

const SidebarRight = ({ show, setShow }) => {

    const sidebarright_api = [
        {
            svg: Rectangle427,
            title: 'Champions League 22'
        },
        {
            svg: Rectangle428,
            title: 'Premier League'
        },
        {
            svg: Rectangle429,
            title: 'Bundelsliga 22'
        }
    ]

    return (
        <div className={`sidebarright_container ${show && 'active_sidebarright'}`}>
            {
                sidebarright_api.map(item => <Fixtures key={item.title} svg={item.svg} title={item.title} />)
            }
        </div>
    )
}

export default SidebarRight