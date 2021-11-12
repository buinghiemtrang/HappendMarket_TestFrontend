import React from 'react';

import Button from './Button';
import Grid from './Grid';

// import { GrLinkNext } from "react-icons/gr";

import imgIconNext from '../assets/images/news/news-img-01@2x.png';
import imgIcon1 from '../assets/images/news/news-object-1.png';
import imgIcon2 from '../assets/images/news/news-object-2.png';
import imgNewCoin from '../assets/images/news/news-object-3.png';
import imgNewLol from '../assets/images/news/news-object-5.png';

const News = (props) => {
    const dataNew = props.dataNews;
    return (
        <div className="news">
            <div className="container">
                <div className="news__header">
                    <h4>happened's issue</h4>
                    <p>
                    모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                    다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>
                    <Button>see more</Button>
                    <div className="icon1">
                        <img src={imgIcon1} alt="" />
                    </div>
                    <div className="icon2">
                        <img src={imgIcon2} alt="" />
                    </div>
                </div>
            </div>
            <div className="news__body">
                
                <Grid
                    col={5}
                    mdCol={2}
                    smCol={1}
                    gap={0}
                >
                <div className="news__body__box">
                    <h4>whpn issue</h4>
                    <div className="box-next">
                        <img src={imgIconNext} alt="" />
                    </div>
                    
                </div>
                {
                    dataNew.map((item, index)=>(
                        <div className="news__body__brand-item" key={index}>
                            <div className="news__body__brand-item__header">
                                <p>{item.title}</p>
                            </div>
                            <div className="news__body__brand-item__body">
                                <img src={item.img} alt={item.title} />
                            </div>
                        </div>
                    ))
                }
                </Grid>
            </div>
            <div className="box__hot">
                <span>hot</span>
            </div>
            <div className="box__imgNewCoin">
                <img src={imgNewCoin} alt="" />
            </div>
            <div className="box__imgNewLol">
                <img src={imgNewLol} alt="" />
            </div>

        </div>
    )
}

export default News;
