import React from 'react'
import convetProduct from '../assets/images/vector.png';
import zigZag from '../assets/images/vector-best.png';

import bestProduct from '../assets/fake-data/best-product';
const BestProduct = () => {
    return (
        <div className="best-product" >
                <div className="container">

                    <div className="best-product__header">
                        <h3>best product</h3>
                        <p>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                    </div>
                </div>
                <div className="best-product__content" style={{backgroundImage:`url(${convetProduct})`}}>
                    <div className="container">

                        <div className="best-product__content__container">
                        {
                            bestProduct.map((item, index) => {
                                return(

                                    <div className="box__item" key={index}>
                                        <span className="box-number" style={{backgroundImage:`url(${zigZag})`}}>0{item.id}</span>
                                        <img src={item.img} alt="" />
                                        <div className="box-text">
                                            <p>{item.title}</p>
                                            <span className="box-text__btn">Go</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                            
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default BestProduct
