/* Portfolio : 프로젝트 소개 */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// style //
const PortfolioBlock = styled.div`
    padding-bottom: 50px;

    h2 {
        padding: 50px 0px 20px 80px;
        font-family: "rocket";
        font-size: 25px;
    }

    h2::after{
        content: "";
        width: 200px;
        height: 2px;
        margin-left: 15px;
        background: #5B4CC9;
        display: inline-block;
        vertical-align: middle;
    }
`;

const Projects = styled.div`
    margin: 0px 80px;
    position: relative;

    ul {
        margin-bottom: 25px;
        padding-left: 0px;
        display: flex;
    }

    .link {
        margin: 0;
        padding: 0;
    }

    li {
        width: 33%;
        height: 350px;
        margin-right: 25px;
        position: relative;
        border: 2px solid rgba(243,233,245,.7);

        &:hover {
            cursor: pointer;
            border: none;
        }
    }

    li:hover .li-border::before,
    li:hover .li-border::after {
        opacity: 1;
        -webkit-transform: scale(1);
	    transform: scale(1);
    }

    li:hover .li-border h3,
    li:hover .li-border p {
        opacity: 1;
    }

    li:hover .hover-layer {
        opacity: 1;
    }

    li:last-child {
        margin-right: 0px;
    }

    img {
        width: 100%;
        height: 100%;
        position: relative;
    }

    .hover-layer {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: rgba(91,76,201,.5);
        opacity: 0;
    }

    .li-border {
        color: #FFFFFF;

        h3 {
            margin-top: 120px;
            font-family: "bath_medium";
            font-size: 30px;
            text-align: center;
            opacity: 0;
            transition: opacity 1s, transform 1s;
        }

        p {
            width: 70%;
            margin: 0 auto;
            font-size: 18px;
            text-align: center;
            letter-spacing: 0.3px;
            line-height: 1.4em;
            opacity: 0;
            transition: opacity 0.5s, transform 0.5s;
        }
    }

    .li-border::before, .li-border::after {
        content: "";
        position: absolute;
        top: 20px;
        left: 20px;
        bottom: 20px;
        right: 20px;
        opacity: 0;
        -webkit-transition: opacity 0.35s; 
        -webkit-transform: 0.35s;
	    transition: opacity 0.35s, transform 0.35s;
    } 

    .li-border::before {
        border-top: 2px solid #FFFFFF;
        border-bottom: 2px solid #FFFFFF;
        -webkit-transform: scale(0,1);
	    transform: scale(0,1);
    }

    .li-border::after {
        border-left: 2px solid #FFFFFF;
        border-right: 2px solid #FFFFFF;
        -webkit-transform: scale(1,0);
	    transform: scale(1,0);
    }
`;

// function //
function Portfolio(props) {
    const portfolios = props.portfolios;
    
    return(
        <PortfolioBlock id="portfolio-section">
            <h2>Portfolio</h2>
            <Projects>
                <ul>
                    <li>
                        <img src="../projects/emotion.jpg" alt="" />
                        <Link to={{
                        pathname: '/portfolio/' + 1,
                        state: {portfolios}}}>
                        <div className="hover-layer">
                            <div className="li-border">
                                <h3>감정일기</h3>
                                <p>일상 속에서 느끼는 감정들을 기록하면서 정신을 건강하게 다스릴 수 있는 감정일기</p>
                            </div>
                        </div>
                        </Link>
                    </li>
                    <li>
                        <img src="../projects/covid.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 2,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>COVID-19</h3>
                                    <p>전국별, 지역별 코로나 확진자 현황을 수치와 차트로 한 눈에 보여주는 사이트</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <img src="../projects/todolist.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 3,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>TODO LIST</h3>
                                    <p>날짜 별로 해야할 일을 추가, 수정, 삭제할 수 있는 투두리스트</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../projects/study.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 4,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>스터디라운지 홈페이지</h3>
                                    <p>실제 아르바이트 했던 스터디카페의 정보가 담겨있는 홈페이지</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <img src="../projects/github.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 5,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>Github</h3>
                                    <p>Github의 메인 페이지 Clone coding</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="khbus">
                        <img src="../projects/bus.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 6,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>경희대학교 버스 App</h3>
                                    <p>경희대학교 내, 외부를 오가는 버스의 도착 정보를 볼 수 있는 App</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <img src="../projects/crime.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 7,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>안심귀가 App</h3>
                                    <p>밤 늦은 귀가 시 범죄 예방을 위해 알람, 위치추적, 자동 연락 등의 기능을 구현한 안심귀가 서비스</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li className="allowance-book">
                        <img src="../projects/allowance.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 8,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>용돈관리 프로그램</h3>
                                    <p>DB를 활용한 용돈의 출납을 관리하는 프로그램</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <img src="../projects/chatting.jpg" alt="" />
                        <Link to={{
                            pathname: '/portfolio/' + 9,
                            state: {portfolios}}}>
                            <div className="hover-layer">
                                <div className="li-border">
                                    <h3>채팅 프로그램</h3>
                                    <p>1:1 채팅, 그룹 채팅, 이모티콘 전송, 파일 전송 등 메신저 기능을 구현한 채팅 프로그램</p>
                                </div>
                            </div>
                        </Link>
                    </li>
                </ul>
            </Projects>
        </PortfolioBlock>
    );
}

export default Portfolio;