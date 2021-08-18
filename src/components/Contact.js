/* Contact : 연락처 정보 및 메일 간편발송 */
import { React, useState } from 'react';
import styled from 'styled-components';
import { FaGithubAlt } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { BiPhoneCall } from 'react-icons/bi';
import { RiKakaoTalkFill } from 'react-icons/ri';

// style //
const ContactBlock = styled.div`
    .title {
        padding: 50px 0px 10px 80px;
        font-family: "rocket";
        font-size: 25px;
    }

    .title::after {
        content: "";
        width: 200px;
        height: 2px;
        margin-left: 15px;
        background: #FE9898;
        display: inline-block;
        vertical-align: middle;
    }
`;

const ContactInfo = styled.div`
    margin-left: 40px;
    color: #2B2B2B;

    ul {
        margin-bottom: 25px;
        display: flex;
    }

    li {
        width: 46%;
        margin-right: 40px;
        padding: 20px 0px;
        display: flex;
        background: #FFE6E6;
    }

    .icon {
        margin: auto 20px auto 30px;
        padding: 15px;
        display: inline-block;
        background: #FFA0A0;
        border-radius: 50%;
        font-size: 40px;
        color: #FFFFFF;
    }

    .detail-info {
        margin: auto 0px;
    }

    h5 {
        margin: 0px 0px 5px 0px;
        font-family: "bath_bold";
        font-size: 23px;
    }  

    h6 {
        margin: 10px 0px 0px 0px;
        font-family: "bath_medium";
        font-size: 16px;
    }
`;

const MailBox = styled.div`
    width: 90%;
    margin: 30px auto 50px auto;
    padding: 30px 40px;
    background: #F7DAD9;
    box-sizing: border-box;

    input {
        padding-left: 15px;
        border: none;
        box-sizing: border-box;
        font-family: "bath_light";
        font-size: 16px;
    }

    .section1 {
        margin-bottom: 15px;
    }

    .name {
        width: 49%;
        height: 45px;
        margin-right: 28px;
    }

    .email-address {
        width: 49%;
        height: 45px;
    }

    .section2 {
        margin-bottom: 15px;
    }

    .subject {
        width: 100%;
        height: 45px;
    }

    .section3 {
        margin-bottom: 20px;
    }

    .content {
        width: 100%;
        height: 250px;
        padding: 15px 0px 0px 15px;
        border: none;
        box-sizing: border-box;
        font-family: "bath_light";
        font-size: 16px;
    }

    button {
        margin-top: 5px;
        margin-left: 50%;
        padding: 15px 70px;
        transform: translateX(-50%);
        border: none;
        border-radius: 5px;
        background: #FF8882;
        font-family: "bath_bold";
        font-size: 18px;
        color: #FFFFFF;

        &:hover {
            cursor: pointer;
            filter: brightness(98%);
        }
    }
`;

// function //
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");

    const [message, setMesaage] = useState("mailto:jye_110@naver.com");
    
    const onSetName = (e) => {
        setName(e.target.value);
    };

    const onSetEmail = (e) => {
        setEmail(e.target.value);
    };

    const onSetSubject = (e) => {
        setSubject(e.target.value);
    };

    const onSetContent = (e) => {
        setContent(e.target.value);
    };
    
    const onSetMessage = () => {
        setMesaage("mailto:jye_110@naver.com?cc=" + email + "&subject=" + subject + "&body=" + content);
        console.log(content);
    };

    return(
        <ContactBlock id="contact-section">
            <h2 className="title">Contact</h2>
            <ContactInfo>
                <ul>
                    <li className="first-list">
                        <FaGithubAlt className="icon" />
                        <div className="detail-info">
                            <h5>Github</h5>
                            <h6>https://github.com/0eun-je</h6>
                        </div>
                    </li>
                    <li className="second-list">
                        <RiKakaoTalkFill className="icon" />
                        <div className="detail-info">
                            <h5>Kakaotalk</h5>
                            <h6>ID : wpdud2853</h6>
                        </div>
                    </li>
                </ul>
                <ul>
                    <li>
                        <GoMail className="icon" />
                        <div className="detail-info">
                            <h5>Email me</h5>
                            <h6>jye_110@naver.com</h6>
                        </div>
                    </li>
                    <li>
                        <BiPhoneCall className="icon" />
                        <div className="detail-info">
                            <h5>Call me</h5>
                            <h6>+82 10-5112-2853</h6>
                        </div>
                    </li>
                </ul>
            </ContactInfo>
            <MailBox>
                <div className="section1">
                    <input type="text" className="name" placeholder="Your name" onKeyUp={onSetName} />
                    <input type="email" className="email-address" placeholder="Your email" onKeyUp={onSetEmail} />
                </div>
                <div className="section2">
                    <input type="text" className="subject" placeholder="Subject" onKeyUp={onSetSubject} />
                </div>
                <div className="section3">
                    <textarea className="content" placeholder="Mesaage" onKeyUp={onSetContent} onBlur={onSetMessage}/>
                </div>
                <a href={message}><button>메일 보내기</button></a>
            </MailBox>
        </ContactBlock>
    );
}

export default Contact;