/* MainPage : 메인 페이지 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Profile from '../components/Profile';
import About from '../components/About';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';

// style //
const Footer = styled.div`
    height: 50px;
    margin: 0;
    padding: 0;
    background: #444444;
    font-size: 14px;
    color: #FFFFFF;

    p {
        padding-top: 15px;
        font-family: "bath_medium";
        font-size: 14px;
        text-align: center;
    }
`;

// function //
function MainPage(props) {
    // 페이지 전환 시 맨 위로 옴
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    return(
        <>
            <Header />
            <Profile />
            <About />
            <Skill />
            <Portfolio {...props} />
            <Contact />
            <Footer>
                <p>Copyright© Je yeong eun. All rights Reserved.</p>
            </Footer>
        </>
    );
}

export default MainPage;