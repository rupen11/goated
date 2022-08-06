import React from 'react'
import Fixtures from '../Fixtures/Fixtures'
import './SidebarRight.css'
import Rectangle427 from '../../assets/icons/Rectangle427.svg'
import Rectangle428 from '../../assets/icons/Rectangle428.svg'
import Rectangle429 from '../../assets/icons/Rectangle429.svg'

const SidebarRight = () => {

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
        <div className='sidebarright_container'>
            <div className="sidebarright_inner_container">
                {
                    sidebarright_api.map(item => <Fixtures svg={item.svg} title={item.title} />)
                }
            </div>
        </div>
    )
}

export default SidebarRight