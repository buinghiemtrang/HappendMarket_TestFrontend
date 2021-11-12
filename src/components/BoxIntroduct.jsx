import React from 'react'
import boxIntroduc from '../assets/images/box.png';

const BoxIntroduct = () => {
    return (
        <div className="box-introdution" style={{backgroundImage:`url(${boxIntroduc})`}}>
            <div className="container">
                <div className="box-introdution__title">
                    
                    <h4>what happened!</h4>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first 
                        step to your brand's success. How to create 
                        mobile-optimized videos in minutes.</p>
                    
                </div>
            </div>
            
        </div>
    )
}

export default BoxIntroduct
