/* Project : */
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

import SwiperCore, {
    EffectCoverflow,Pagination
  } from 'swiper/core';
  
  SwiperCore.use([EffectCoverflow,Pagination]);

const ProjectBlock = styled.div`
    
    h1 {
        font-family: "bath_bold";
        letter-spacing: 1px;
        font-size: 35px;
        margin-top: 100px;
        margin-bottom: 30px;
        padding-bottom: 5px;
        text-align: center;
        color: #3B3B3B;
    }
`;

const Slider = styled.div`
    position: relative;
    height: 620px;
    z-index: 0;

    .swiper-container {
        width: 100%;
        height: 95%;
        padding: 20px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 60%;
        height: 550px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const Description = styled.div`
    margin: 50px 120px 100px 120px;

    .project-content {
        display: flex;
        margin-bottom: 20px;
    }
    
    h6 {
        margin: 0;
    }

    .title {
        font-family: "bath_bold";
        font-size: 18px;
        width: 200px;
    }

    .answer {
        font-family: "bath_light";
        font-size: 18px;
    }

    ul {
        margin: 0;
        padding: 20px 0px;
        background: #EEEEEE;
        width: 80%;
    }

    li {
        margin-bottom: 10px;
        font-family: "bath_medium";
        font-size: 18px;
    }

    .diagram {
        width: 70%;
        height: 600px;
        background: pink;
        margin-bottom: 20px;
    }

    .button-group {
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }

    .demo-button {
        padding: 12px 20px;
        background: #a294d2;
        width: 150px;
        text-align: center;
        color: #FFFFFF;
        font-family: "bath_bold";
        margin-right: 50px;

        &:hover {
            cursor: pointer;
            filter: brightness(97%);
        }
    }

    .home-button {
        padding: 12px 20px;
        background: #7364b9;
        width: 150px;
        text-align: center;
        color: #FFFFFF;
        font-family: "bath_bold";

        &:hover {
            cursor: pointer;
            filter: brightness(97%);
        }
    }
`;

const cd = styled.div`
`;

function Project(props) {
    const { name, period, language, skill, contribution, description, functions, capturedImage } = props.projects;

    return (
        <ProjectBlock>
            <h1 className="project-name">{name}</h1>
            <Slider>
                <Swiper effect={'coverflow'} grabCursor={true} centeredSlides={true} slidesPerView={'auto'} coverflowEffect={{
                        "rotate": 50, "stretch": 0, "depth": 100, "modifier": 1, "slideShadows": true}}
                        pagination={true} className="swiper-container">
                    <SwiperSlide className="swiper-slide"><img src={capturedImage[0]} alt=""/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={capturedImage[1]} alt=""/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={capturedImage[2]} alt=""/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={capturedImage[3]} alt=""/></SwiperSlide>
                    <SwiperSlide className="swiper-slide"><img src={capturedImage[4]} alt=""/></SwiperSlide>
                </Swiper>
            </Slider>
            <Description>
                <div className="project-content">
                    <h6 className="title">Period</h6>
                    <h6 className="answer">{period}</h6>
                </div>
                <div className="project-content">
                    <h6 className="title">Language</h6>
                    <h6 className="answer">{language}</h6>
                </div>
                <div className="project-content">
                    <h6 className="title">Skill</h6>
                    <ul>
                        <li>{skill[0]}</li>
                        <li>{skill[1]}</li>
                        <li>{skill[2]}</li>
                    </ul>
                    
                </div>
                <div className="project-content">
                    <h6 className="title">Contribution</h6>
                    <h6 className="answer">{contribution}</h6>
                </div>
                <div className="project-content">
                    <h6 className="title">Description</h6>
                    <h6 className="answer">{description}</h6>
                </div>
                <div className="project-content">
                    <h6 className="title">Function</h6>
                    <ul>
                        <li>{functions[0]}</li>
                        <li>{functions[1]}</li>
                        <li>{functions[2]}</li>
                        <li>{functions[3]}</li>
                        <li>{functions[4]}</li>
                        <li>{functions[5]}</li>
                    </ul>
                </div>
                <div className="button-group">
                    <div className="demo-button">Live Demo</div>
                    <Link to = "/"><div className="home-button">Home</div></Link>
                </div>
            </Description>       
        </ProjectBlock>
    );
}

export default Project;