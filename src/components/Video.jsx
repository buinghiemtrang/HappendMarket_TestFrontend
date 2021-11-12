import React from 'react'
import Button from './Button';
import { GiPolarStar } from "react-icons/gi";
import {IoMdClose } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";

import mainImgVideo from '../assets/images/img-video/main-video.png';
import imgBg1 from '../assets/images/img-video/video-object-01.png';
import imgBg2 from '../assets/images/img-video/video-object-02.png';
import imgBg3 from '../assets/images/img-video/video-object-03.png';
import imgBg4 from '../assets/images/img-video/video-object-04.png';
import imgBg5 from '../assets/images/img-video/video-object-05.png';
import imgBg6 from '../assets/images/img-video/video-object-06.png';
import imgBg7 from '../assets/images/img-video/video-object-07.png';
import imgBg8 from '../assets/images/img-video/video-object-08.png';

const video = () => {
    return (
        <div className="video">
            <div className="container">
                <div className="video__header">
                    <h4>what happened</h4>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, 
                    every team makes a lot of videos Can be trimmed. Take the first </p>
                    <Button>See more</Button>
                </div>
                <div className="video__body">
                    <div className="video__body__content">
                        <div className="video__body__content__header">
                            <p><span><GiPolarStar className="icon-start"/> </span> what happened</p>
                            <div className="line">
                                <span className="line-1"></span>
                                <span className="line-2"></span>
                            </div>
                            <span> <IoMdClose className="icon"/> </span>
                        </div>
                        <div className="video__body__content__title">
                            <p>www. whpn.com/brandstory</p>
                            <span> <GrFormNextLink className="icon-next"/> </span>
                        </div>
                        <div className="video__body__content__main">
                            <img src={mainImgVideo} alt="" />
                            <div className="rectangle">
                                <span>happy</span>
                                <p>왓헤픈의 브랜드 스토리는 이렇게 만들어지고</p>
                            </div>
                        </div>
                        <div className="imgBg3">
                            <img src={imgBg3} alt="" />
                        </div>
                        <div className="imgBg1">
                            <img src={imgBg1} alt="" />
                        </div>
                        <div className="imgBg2">
                            <img src={imgBg2} alt="" />
                        </div>
                       
                    </div>
                </div>
            </div>
            
            <div className="imgBg4">
                <img src={imgBg4} alt="" />
            </div>
            <div className="imgBg5">
                <img src={imgBg5} alt="" />
            </div>
            <div className="imgBg6">
                <img src={imgBg6} alt="" />
            </div>
            <div className="imgBg7">
                <img src={imgBg7} alt="" />
            </div>
            <div className="imgBg8">
                <img src={imgBg8} alt="" />
            </div>
            
        </div>
    )
}

export default video
