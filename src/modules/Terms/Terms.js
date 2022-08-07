import React, { useState } from 'react'
import './Terms.css'
import zigzag from '../../assets/icons/Zigzag Vertical.svg'
import Slider from '../../components/Slider'
import GoatButton from '../../components/GoatButton';

const Terms = () => {

    const [isChecked, setIsChecked] = useState(false);

    return (
        <div className='terms_container'>
            <div className="terms_inner_container">

                <Slider title={'Welcome to Goated'} description={"We're glad to have you onboard with us"} slide={'first'} />

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
                        <label className="terms_checkbox_container"> I agree to Vertex's <a href='/'>Terms of Service</a>
                            <input type="checkbox" onChange={() => setIsChecked(!isChecked)} />
                            <span className="mark"></span>
                        </label>
                    </div>

                    <GoatButton customeStyle={{}} linkroutepath={'/prefernces'} text={'Continue to Goated'} disabled={!isChecked} />
                </div>

            </div>
            <div className="zigzag_img">
                <img src={zigzag} alt="zig zag" />
            </div>
        </div>
    )
}

export default Terms