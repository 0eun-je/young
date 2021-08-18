// Profile : 프로필 정보와 사진 //
import React from 'react';
import styled from 'styled-components';
import { MdMail } from 'react-icons/md';
import { FaGithub, FaPhoneAlt } from 'react-icons/fa';

// style //
const ProfileBlock = styled.div`
    height: 800px;
    margin-top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "rocket";
    transition: all ease 5s 0s;
`;

const Introduction = styled.div`
    margin: 80px 250px 0px 0px;
    color: #2B2B2B;

    h3 {
        width: 100px;
        padding: 10px 20px;
        background: #877ACD;
        border-radius: 20px 20px 20px 0px;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 1.7px;
    }

    .name {
        margin-top: 5px;
        font-size: 55px;
        letter-spacing: 1.5px;
    }

    .position {
        margin-top: -30px;
        font-size: 25px;
    }

    ul {
        padding: 0px;
    }

    li {
        margin-bottom: 15px;
    }

    .icon {
        font-size: 19px;
        color: #877ACD;
    }

    span {
        margin-left: 15px;
        display: inline-block;
        font-size: 16px;
        vertical-align: top;
    }

    a {
        color: #2B2B2B;
    }
`;

const PhotoBlock = styled.div`
    margin-top: 80px;

    .layer1 {
        padding: 20px;
        background: rgba(0, 0, 0, .07);
        border-radius: 50%;
    }

    .layer2 {
        padding: 20px;
        background: rgba(0, 0, 0, .08);
        border-radius: 50%;
    }

    .photo {
        width: 380px;
        height: 380px;
        background: url("./profile_photo.jpg") no-repeat;
        background-size: 100% 100%;
        border-radius: 50%;
    }
`;

// function //
function Profile() {
    return(
        <ProfileBlock id="home-section">
            <Introduction>
                <h3>Hello, I'm</h3>
                <h2 className="name">Je young eun</h2>
                <h4 className="position">Frontend Developer</h4>
                <ul>
                    <li><MdMail className="icon" /><span>jye_110@naver.com</span></li>
                    <li><FaPhoneAlt className="icon"/><span>+82 10-5112-2853</span></li>
                    <li><FaGithub className="icon" /><span><a href="https://github.com/0eun-je" target="_blank" rel="noreferrer">https://github.com/0eun-je</a></span></li>
                </ul> 
            </Introduction>
            <PhotoBlock>
                <div className="layer1">
                    <div className="layer2">
                        <div className="photo" />
                    </div>
                </div>
            </PhotoBlock>
        </ProfileBlock>
    );
}

export default Profile;