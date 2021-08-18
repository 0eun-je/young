/* PortfolioPage : 포트폴리오 프로젝트 상세 설명 사이트 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import Project from '../components/Project';

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
function PortfolioPage(props) {
    let id = props.match.params.id;
    let current_project = props.location.state.portfolios[id-1];

    // 페이지 전환 시 맨 위로 옴
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);

    return(
        <>
            <Project projects={current_project}/>
            <Footer>
                <p>Copyright© Je yeong eun. All rights Reserved.</p>
            </Footer>
        </>
    );
}

export default PortfolioPage;