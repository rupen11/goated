import React from 'react'
import './Fixtures.css'
import ArrowUp from '../../assets/icons/arrowup.svg'

const Fixtures = ({ svg, title }) => {
    return (
        <div className="sidebarright_box">
            <div className="sidebarright_inner_box">
                <div className="sidebarright_box_header">
                    <div className="sidebarright_box_inner_header">
                        <img src={svg} alt={svg} className='sidebarright_box_header_img' />
                        <p className="sidebarright_box_header_heading">{title}</p>
                    </div>
                    <img src={ArrowUp} alt="ArrowUp" className='sidebarright_box_header_arrowup' />
                </div>
                <ul className="sidebarright_box_list">
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Bayern M vs Man Utd</li>
                        <p className="sidebartight_box_list_number">134</p>
                    </div>
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Chelsea vs Real M</li>
                        <p className="sidebartight_box_list_number">17</p>
                    </div>
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Arsenal vs Totenham</li>
                        <p className="sidebartight_box_list_number">11</p>
                    </div>
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Leicester vs Man City</li>
                        <p className="sidebartight_box_list_number">9</p>
                    </div>
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Totenham vs Man Utd</li>
                        <p className="sidebartight_box_list_number">5</p>
                    </div>
                    <div className="sidebarright_box_list_item">
                        <li className="sidebartight_box_list_name">Juventus vs Arsenal</li>
                        <p className="sidebartight_box_list_number">7</p>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Fixtures