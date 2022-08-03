import React from 'react'
import './Terms.css'
import zigzag from '../../assets/Zigzag Vertical.svg'

const Terms = () => {
    return (
        <div className='terms_container'>
            <div className="terms_inner_container">

                <h3 className='terms_heading'>Welcome to Goated</h3>
                <p className='terms_para'>We're glad to have you onboard with us</p>

                <div className="terms_crowser">
                    <span className='terms_crow'></span>
                    <span className='terms_crow'></span>
                    <span className='terms_crow'></span>
                </div>

                <div className="terms_box">
                    <div className="terms_primary">
                        <div className="terms_box_scroll">
                            Introduction <br />
                            These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
                            <br /><br />
                            These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                            <br /><br />
                            Minors or people below 18 years old are not allowed to use this Website.
                        </div>
                    </div>

                    <div className="terms_checkbox">
                        <label class="terms_checkbox_container"> I agree to Vertex's <a>Terms of Service</a>
                            <input type="checkbox" />
                            <span class="mark"></span>
                        </label>
                    </div>

                    <button className='terms_btn'>
                        Continue to Goated
                    </button>
                </div>

            </div>
            <div className="zigzag_img">
                <img src={zigzag} alt="zig zag" />
            </div>
        </div>
    )
}

export default Terms