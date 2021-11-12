import React from 'react'
import { BsHeartFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const ProductItem = props => {
    const formatPrice = (number)=>{
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number)
    }
    return (
        
        <div className="products__list__item">
            <Link to={`/product/${props.item.id}`}>
                <img src={props.item.img} alt="" />
            </Link>
            <p className="products__list__item__name">{props.item.title}</p>
            <div className="products__list__item__footer">
                <span className="price">
                {formatPrice(`${props.item.price}`)} won
                </span>
                <span className="rate"><BsHeartFill className="icon-heart"/>{props.item.rate}</span>
            </div>
        </div>
    )
}

export default ProductItem;
