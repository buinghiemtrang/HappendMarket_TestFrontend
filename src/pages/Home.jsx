import React from 'react';

import Banner from '../components/Banner';
import BestProduct from '../components/BestProduct';
import BoxIntroduct from '../components/BoxIntroduct';
import Products from '../components/Products';
import BrandStore from '../components/BrandStore';
import News from '../components/News';
import Video from '../components/Video';

import dataProducts from '../assets/fake-data/data-products';
import newsBrand from '../assets/fake-data/news';

const Home = () => {
    return (
        <div className="home">
            <Banner />
            <BoxIntroduct/>
            <BestProduct/>
            <Products dataProducts={dataProducts}/>
            <BrandStore />
            <News dataNews={newsBrand}/>
            <Video />
        </div>
    )
}

export default Home
