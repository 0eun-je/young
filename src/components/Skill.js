/* Skill : 어학 능력 및 프로그래밍 스킬 */
import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJava } from "react-icons/fa";
import { SiJavascript, SiNodeDotJs, SiReact, SiCplusplus, SiAndroidstudio } from "react-icons/si";

// style //
const SkillBlock = styled.div`
    .title {
        padding: 50px 0px 20px 80px;
        font-family: "rocket";
        font-size: 25px;
    }

    .title::after {
        content: "";
        width: 200px;
        height: 2px;
        margin-left: 15px;
        background: #5B4CC9;
        display: inline-block;
        vertical-align: middle;
    }

    .sub-title {
        margin: 0px 0px 40px 140px;
        position: relative;
        font-family: "bath_bold";
        font-size: 19px;
        color: #2b2b2b;
    }

    .sub-title::before {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        top: 5px;
        left: -30px;
        background: #5B4CC9;
    }
`;

const Language = styled.div`
    margin-left: 140px;
    padding-bottom: 60px;
    display: flex;
    
    .language-score {
        width: 200px;
        margin-right: 20px;
        background: #F3E9F5;

        &:hover{
            filter: brightness(98%);
        }
    }

    h4 {
        margin: 15px 20px;
        font-family: "bath_bold";
        font-size: 17px;
        text-align: center;
    }

    h5 {
        margin: 15px;
        padding: 8px;
        background: #D3B4E2;
        font-size: 16px;
        text-align: center;
    }
`;

const Programming = styled.div`
    margin-left: 100px;
    padding-bottom: 50px;

    ul {
        padding-bottom: 5px;
        display: flex;
    }

    li {
        width: 30%;
        margin-right: 20px;
        padding: 15px 0px;
        background: rgba(243,233,245,.5);
        border-bottom: 1px solid #D3B4E2;
        border-right: 1px solid #D3B4E2;

        &:hover {
            filter: brightness(98%);
            box-shadow: 5px 5px #CA98D9;
            border: none;
        }
    }

    .icon {
        margin: 0px 20px 0px 30px;
        font-size: 52px;
    }

    .icon-html {
        color: #D54C4C;
    }

    .icon-css {
        color: #185ADB;
    }

    .icon-javascript {
        color: #FFD523;
    }   

    .icon-node {
        color: #50CB93;
    }

    .icon-react {
        color: #3EDBF0;
    }

    .icon-java {
        color: #A35709;
    }

    .icon-cplusplus {
        color: #0F52BA;
    }

    .icon-android {
        color: #9EDE73;
    }

    span {
        padding-top: 10px;
        display: inline-block;
        vertical-align: top;
        box-sizing: border-box;
        font-family: "bath_bold";
        font-size: 25px;
        color: #2B2B2B;
    }
`;

// function //
function Skill() {
    return(
        <SkillBlock id="skill-section">
            <h2 className="title">Skill</h2>
            <h3 className="sub-title">Language ability</h3>
            <Language>
                <div className="language-score"><h4>TOEIC</h4><h5>940점</h5></div>
                <div className="language-score"><h4>TOEIC Speaking</h4><h5>Level7</h5></div>
            </Language>
            <h3 className="sub-title">Programming skill</h3>
            <Programming>
                <ul>
                    <li><FaHtml5 className="icon icon-html" /><span>HTML</span></li>
                    <li><FaCss3Alt className="icon icon-css" /><span>CSS</span></li>
                    <li><SiJavascript className="icon icon-javascript" /><span>Javascript</span></li>
                </ul>
                <ul>
                    <li><SiNodeDotJs className="icon icon-node" /><span>Node.js</span></li>
                    <li><SiReact className="icon icon-react" /><span>REACT</span></li>
                    <li><FaJava className="icon icon-java" /><span>Java</span></li>
                </ul>
                <ul>
                    <li><SiCplusplus className="icon icon-cplusplus" /><span>C++</span></li>
                    <li><SiAndroidstudio className="icon icon-android" /><span>Android</span></li>
                </ul>
            </Programming>
        </SkillBlock>
    );
}

export default Skill;