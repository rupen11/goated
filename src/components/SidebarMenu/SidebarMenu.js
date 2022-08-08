import React from 'react'
import './SidebarMenu.css'

const SidebarMenu = ({ svg, title, active, setShow, show }) => {
    return (
        <div className='sidebarmenu_container' onClick={() => setShow(!show)}>
            <div className="sidebarmenu_img">
                {svg}
            </div>
            <div className="sidebarmenu_title">
                {title.length > 6 ? title.slice(0, 6) + '...' : title}
            </div>
        </div>
    )
}

export default SidebarMenu