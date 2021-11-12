import React from 'react'
import ProductItem from './ProductItem'
import Grid from './Grid';
import Button from './Button';

const Products = props => {
    const dataProduct = props.dataProducts;

    return (
        <div className="products">
            <div className="container">
                <div className="products__list">
                <Grid 
                    col={5}
                    mdCol={3}
                    smCol={2}
                    gap={15}
                >
                    {dataProduct.map((item, index)=>(

                        <ProductItem key={index} item={item}/>
                    ))}
                </Grid>
                </div>
                <div className="seeMore">
                    <Button className="mau">See More</Button>
                </div>
            </div>
        </div>
    )
}

export default Products;
