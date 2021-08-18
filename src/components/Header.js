// Header : 상단 메뉴 //
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../css/fonts.css';

// style //
const HeaderBlock = styled.div`
    width: 100%;
    height: 90px;
    position: fixed;
    display: flex;
    background: #FFFFFF;
    box-shadow: 2px 2px 5px rgba(0,0,0,.06);
    font-family: "rocket";
    color: #2B2B2B;
    z-index: 1;

    .link {
        margin: auto 0;
        color: #2B2B2B;
    }

    h1 {
        margin: auto 0px auto 30px;
        border-radius: 5% 40%;
        background: #F3E9F5;
        font-size: 35px;
    }
`;

const Menu = styled.div`
    width: 100%;
    position: relative;
`;

const MenuGroup = styled.div`
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    align-items: center;

    li {
        width: 120px;
        height: 60px;
        margin-right: 25px;
        list-style: none;
        font-size: 21px;
        text-align: center;
        line-height: 60px;

        &:hover {
            cursor: pointer;
            transition: 0.5s;
            color: #877ACD;
        }
    }

    li:last-child {
        margin-right: 50px;
    }
`;

// function //
function Header() {
    // 메뉴 클릭 시 해당 section으로 scroll 이동 //
    const onClickMenu = (menuname) => {
        let location;
        if(menuname === "home")
            location = document.getElementById("home-section").offsetTop;
        else if(menuname === "about")
            location = document.getElementById("about-section").offsetTop-80;
        else if(menuname === "skills")
            location = document.getElementById("skill-section").offsetTop-80;
        else if(menuname === "portfolio")
            location = document.getElementById("portfolio-section").offsetTop-80;
        else if(menuname === "contact")
            location = document.getElementById("contact-section").offsetTop-80;
        window.scrollTo({top: location, left: 0, behavior: 'smooth'});
    };

    return(
        <HeaderBlock>
            <Link to="/" className="link"><h1>YOUNG.</h1></Link>
            <Menu>
                <MenuGroup>
                    <li onClick={()=>onClickMenu("home")}>Home</li>
                    <li onClick={()=>onClickMenu("about")}>About</li>
                    <li onClick={()=>onClickMenu("skills")}>Skills</li>
                    <li onClick={()=>onClickMenu("portfolio")}>Portfolio</li>
                    <li onClick={()=>onClickMenu("contact")}>Contact</li>
                </MenuGroup>
            </Menu>
        </HeaderBlock>
    );
}

export default Header;