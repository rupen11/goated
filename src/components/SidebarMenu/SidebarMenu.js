import React from 'react'
import './SidebarMenu.css'

const SidebarMenu = ({ svg, title, active }) => {
    return (
        <div className={`sidebarmenu_container ${active && 'activesidebaricon'}`}>
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