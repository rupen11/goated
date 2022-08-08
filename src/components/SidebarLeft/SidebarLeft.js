import React from 'react'
import './SidebarLeft.css'
import SidebarMenu from '../SidebarMenu'

const SidebarLeft = ({ sidebar_contents, show, setShow }) => {
    return (
        <div className="sidebarleft_container">
            {sidebar_contents.map(item => <SidebarMenu show={show} setShow={setShow} key={item.title} svg={item.svg} title={item.title} active={item.active} />)}
        </div>
    )
}

export default SidebarLeft