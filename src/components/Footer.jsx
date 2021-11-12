import React from 'react';
import Grid from './Grid';

import imgCp1 from '../assets/images/cp-1.png';
import imgCp2 from '../assets/images/cp-2.png';
import imgCp3 from '../assets/images/cp-3.png';
import { Link } from 'react-router-dom';

const footerHappen =[
    {
        title:"[공지] 개인 정보 처리 방침 변경 사전 "
    },
    {
        title:"[공지] 29cm 이하 버전 지원 중단 안내 "
        
    },
    {
        title:"[공지] iOS 10 이하 버전 지원 중단 안내 "
        
    },
    {
        title:"[공지] 개인 정보 처리 방침 변경 사전  "
        
    },
];

const footerInfo =[
    {
        title:"about us",
        content:[
            {
                title:"회사 소개"
        
            },
            {
                title:"회사 소개"
                
            },
            {
                title:"회사 소개 회사 "
                
            },
        ]
    },
    {
        title:"my order",
        content:[
            {
                title:"취소 교환"
        
            },
            {
                title:"취소 / 교환 /반품 내"
                
            },
            {
                title:"취소 / 교환 / 반품"
                
            },
            {
                title:"취소 반품 내"
                
            },
        ]
    },
    {
        title:"my account",
        content:[
            {
                title:"회원 정보 수정 "
        
            },
            {
                title:"회원 정보"
                
            },
            {
                title:"회원 수정 회원 정"
                
            },
            {
                title:"회"
                
            },
        ]
    },
    {
        title:"help",
        content:[
            {
                title:""
        
            },
        ]
    },
    
];
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__content">

                    <div className="footer__left">
                        <div className="footer__left__title">
                            <h3>what happened</h3>
                        </div>
                        <div className="footer__left__content">
                            {footerHappen.map((item, index)=>(
                                <p key={index}>{item.title}</p>
                            ))}
                        </div>
                    </div>
                    <div className="footer__right">
                        <Grid
                            col={4}
                            mdCol={2}
                            smCol={2}
                            gap={44}
                        >   
                            {
                                footerInfo.map((item,index) => (
                                    
                                    <div className="footer__right__item" key={index}>
                                        <div className="footer__right__item__title">
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div className="footer__right__item__content">
                                            {
                                                item.content.map((content,index)=>(
                                                    <p key={index}>{content.title}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))
                            }
                            
                        </Grid>
                    </div>
                </div>
                <div className="copyright">
                    <div className="copyright__text">
                        <p>© 2020-2021 what happened corp  l (주) 왓헤픈 ｜대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened</p>
                        <p>서울특별시 강남구 도산대로 8길 17 ｜FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                    </div>
                    <div className="copyright__logo">
                    <Link to='/'>
                        <img src={imgCp1} alt="" />
                    </Link>
                    <Link to='/'>
                        <img src={imgCp2} alt="" />
                    </Link>
                    <Link to='/'>
                        <img src={imgCp3} alt="" />
                    </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
