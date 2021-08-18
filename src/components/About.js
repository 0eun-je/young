/* About : 소개 및 FAQ */
import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from "react-icons/io"

// style //
const AboutBlock = styled.div`
    h2 {
        padding: 50px 0px 50px 80px;
        font-family: "rocket";
        font-size: 25px;
        color: #2B2B2B;
    }

    h2::after{
        content: "";
        width: 200px;
        height: 2px;
        margin-left: 15px;
        display: inline-block;
        vertical-align: middle;
        background: #5B4CC9;
    }
`;

const IntroBlock = styled.div`
    padding: 0px 100px;
    display: flex;
    justify-content: center;
    vertical-align: center;
`;

const IllustBlock = styled.div`
    width: 540px;
    height: 450px;
    margin-right: 20px;
    background: url(../programmer.jpg) no-repeat;
    background-size: 100% 100%;
`;

const InfoBlock = styled.div`
    width: 800px;

   .basic-info {
       display: flex;
   }

   .arrow-icon {
        margin-right: 10px;
        padding: 2px;
        background: #5B4CC9;
        border-radius: 50%;
        font-size: 18px;
        color: #FFFFFF;
   }

   span {
        display: inline-block;
        vertical-align: top;
        font-family: "bath_medium";
        font-size: 17px;
        color: #2B2B2B;
   }

   strong {
       font-family: "bath_bold";
       color: #2B2B2B;
   }

   ul {
       margin: 70px 0px 0px 0px;
       padding: 0px;
   }

   ul:first-child {
        margin-right: 70px;
   }

   li {
       margin-bottom: 20px;
   }

   p {
       margin-top: 10px;
       padding: 20px;
       background: rgba(0, 0, 0, .05);
       box-shadow: 2px 2px 2px rgba(0,0,0,.05);
       font-size: 16px;
       line-height: 1.5em;   
   }
`;

const FAQLIST = styled.div`
    ul {
        margin: 70px 0px 100px 0px;
    }

    li {
       width: 80%;
       margin: 0 auto;
       padding: 22px 25px;
       border-top: 1px solid #CECECE;

       &:hover {
           cursor: pointer;
       }
    }

    li:first-child {
        border-top: 2px solid #877ACD;
    }

    li:nth-child(11) {
        border-bottom: 2px solid #877ACD;
    }

    li:last-child {
        border-bottom: 2px solid #877ACD;
    }

    span {
        font-size: 16px;
    }

    .list-arrow {
        width: 15px;
        height: 10px;
        float: right;
        background: url('down-arrow.png') no-repeat;
        background-size: 100% 100%;
        background-position-y: center;
    }

    .answer {
        display: none;
        background: rgba(0, 0, 0, .06);
    }

    .answer p {
        margin: 0px;
        padding: 10px 0px;
        line-height: 1.4em;
        letter-spacing: 0.5px;
    }
`;

// function //
function About() {
    // FAQ 클릭 시 내용 표시 //
    const onClickDetail = (num) => {
        let ans = document.getElementById("faq-"+num+"-answer");
        if(ans.style.display === 'block'){
            if(num === "sixth")
                document.getElementById("sixth-list").style.borderBottom = "2px solid purple";
            ans.style.display = 'none';
            document.getElementById(num+"-question").style.color = 'black';
            document.getElementById(num+"-question").style.fontFamily = "bath_light"
        }  
        else{
            if(num === "sixth")
                document.getElementById("sixth-list").style.borderBottom = "1px solid lightgrey";
            ans.style.display = 'block'; 
            document.getElementById(num+"-question").style.color = '#5b4CC9';
            document.getElementById(num+"-question").style.fontFamily = 'bath_bold';
        }
            
        let arrow = document.getElementById(num+"-list-arrow");
        if(arrow.style.background === 'url("up-arrow.png") 0% 0% / 100% 100%'){
            arrow.style.background = "url(down-arrow.png)";
            arrow.style.backgroundSize = "100% 100%";
        }
        else {
            arrow.style.background = "url(up-arrow.png)";
            arrow.style.backgroundSize = "100% 100%";
        }
    };

    return(
        <AboutBlock>
            <h2 id="about-section">ABOUT ME</h2>
            <IntroBlock>
                <IllustBlock />
                <InfoBlock>
                    <div className="basic-info">
                        <ul>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Name : </strong>제영은</span></li>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Education : </strong>경희대학교 컴퓨터공학과 졸업</span></li>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Email : </strong>jye_110@naver.com</span></li>
                        </ul>
                        <ul>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Birthday : </strong>1995.01.10.</span></li>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Certificate : </strong>정보처리기사</span></li>
                            <li><IoIosArrowForward className="arrow-icon" /><span><strong>Phonenumber : </strong>010-5112-2853</span></li>
                        </ul>
                    </div>
                    <p>
                        누구보다 배움을 사랑하고 뜨거운 열정이 있는 신입 프론트엔드 개발자,제영은입니다.<br/><br/>
                        끊임없이 새로운 기술을 공부하고, 새로운 문제에 부딪히고, 끈기있게 해결해가며 얻는 지식과 뿌듯함은 프로그래밍만이 가지는 가장 큰 매력이라고 생각합니다.
                        그 중에서도 다채로운 화면을 구현하고 사용자의 입장에서 어떻게 하면 더 편리하게 이용할 수 있을지 고민하는 프론트엔드의 매력에 푹 빠져 프론트엔드 개발자를 꿈꾸게 되었습니다.
                    </p>
                </InfoBlock>
            </IntroBlock>
            <FAQLIST>
                <ul>
                    <li onClick={() => {onClickDetail("first");}}><span id="first-question">나는 어떤 사람인가요?</span><div id="first-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-first-answer" className="answer">
                        <p>
                            저의 가장 큰 특징은 배우는 것을 매우 좋아하고 흥미있는 것에는 푹 빠져서 열정적으로 임한다는 점입니다.<br/>
                            새로운 분야에 대해 배우는 것을 정말 좋아해서 여러 자격증을 따거나 수학문제를 푸는 등 끊임없이 뭔가를 배우고 성취감을 느낄 때 행복한 편입니다. 
                            그런 면에서 프로그래밍은 끊임없이 배워야하는 분야이기 때문에 성취해나가는 기쁨이 커서 저의 성향과 잘 맞는다고 생각합니다. <br/>
                            또한 저는 누구와도 무난하게 지내는 둥글둥글한 성격을 가지고 있으며 소소한 행복에 감사하려고 노력하는 사람입니다.
                            일상 속의 작은 행복에 대한 감사함이 제가 살아가는 큰 원동력입니다.
                            좋아하는 사람들과 즐겁게 이야기하고, 좋아하는 취미 생활을 하고, 좋아하는 일을 하며 행복한 프로그래머가 되는 것이 삶의 목표입니다.
                        </p>
                    </li>
                    <li onClick={() => {onClickDetail("second");}}><span id="second-question">어떤 기술을 다룰 수 있나요?</span><div id="second-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-second-answer" className="answer">
                        <p>
                            HTML, CSS, Javascript, Node.js를 활용해 화면을 만들고 원하는 기능을 구현할 수 있습니다.<br/>
                            만들고 싶은 화면이 있으면 어떻게 구역을 나눠야하는지, 어떤 요소들을 어떻게 배치해야 하는지 바로 떠올릴 수 있습니다.<br/>
                            또한 사용의 편리성을 위해 창의 크기에 따라 반응형으로 구현 가능합니다.<br/>
                            또한 변경된 부분만 렌더링하여 불필요한 자원의 소모를 줄이고 웹 성능을 향상시킬 수 있게끔 REACT를 활용해 프로그래밍 할 수 있습니다.<br/><br/>

                            대학교 학부생 때는 주로 백엔드 개발을 했기 때문에 C++, Java에 능숙하고,<br/>
                            경희대학교 버스 App 등 어플리케이션 개발 경험도 있어 Android에도 익숙합니다.
                        </p>
                    </li>
                    <li onClick={() => {onClickDetail("third");}}><span id="third-question">프론트엔드 개발자가 되고 싶었던 이유가 무엇인가요?</span><div id="third-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-third-answer" className="answer">
                        <p>
                            가장 큰 이유는 평생의 업으로 삼아도 재미있게, 열정을 가지고 일할 수 있을 것이라는 확신이 들었기 때문입니다.<br/>
                            저는 컴퓨터공학과를 전공했지만 프로그래밍에 뒤늦게 재미를 붙였습니다. 물론 시행착오를 겪고 프로젝트를 완성했을 때 뿌듯함과 성취감을 느꼈지만
                            백엔드 개발에 큰 흥미를 느끼지는 못했습니다.<br/>
                            그러다가 저만의 홈페이지를 하나 만들고 싶은 생각에 프론트엔드 개발에 입문하게 되었는데 신세계라고 느껴질 정도로 너무 재미있었습니다.<br/>
                            제가 원하는 대로 웹 화면에 결과물이 바로 출력되는 게 신기했고, 평소 디자인에도 관심이 많아 이런저런 CSS를 적용해보다보면 시간이 가는 줄 모를 정도였습니다.<br/>
                            또한 불필요한 렌더링을 최소화하는 등 사용자에게 최적의 이용 환경을 제공하려고 노력하는 분야라는 점이 더욱 매력있다고 느껴졌습니다. 
                        </p>
                    </li>
                    <li onClick={() => {onClickDetail("forth");}}><span id="forth-question">업무 역량을 강화하기 위한 본인의 학습 방법을 구체적으로 설명해주세요.</span><div id="forth-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-forth-answer" className="answer">
                        <p>
                            저는 단순한 클론코딩보다는 내가 만들고 싶은 프로젝트의 기능, 디자인, 화면 구성 등을 처음부터 구상하고 만들어보려고 노력했습니다.<br/>
                            수많은 문제에 부딪히고 헤매다 보면 어느새 실력이 부쩍 성장해가는 게 느껴졌습니다. "내가 할 수 있을까?"라고 고민하는 시간에 더 찾아보고 공부하는 게 가장 효과적인 학습이라고 생각합니다.<br/>
                            아직까지 만들어보고 싶은 프로젝트 주제도 많이 남아있으니 앞으로도 꾸준히 토이프로젝트를 진행하며 실력을 키울 예정입니다.
                        </p>
                    </li>
                    <li onClick={() => {onClickDetail("fifth");}}><span id="fifth-question">프로젝트 진행 중 가장 어려웠던 부분과 해결 방법을 기술해주세요.</span><div id="fifth-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-fifth-answer" className="answer">
                        <p>
                            뭐든 처음해보는 기능을 적용해 볼 때 시행착오를 많이 겪었습니다.<br/>
                            첫 프론트엔드 프로젝트를 할 때는 CSS에 대한 개념이 제대로 정립되지 않아서 많이 헤맸습니다. 메뉴 바 하나를 만들 때도 서브 메뉴를 어떻게 숨겨야하는지, 
                            요소들을 어떻게 수평정렬 해야 하는지 등 기본적인 부분도 많은 시행착오를 겪고 습득하게 되었습니다.<br/>
                            리액트 프로젝트를 처음 할 때는 상태관리에 대한 부분이 헷갈려서 useState로 관리해야 하는 동적인 변수를 그냥 변수로 사용해서 값이 자꾸 초기화되는 현상을 겪기도 했습니다.<br/>
                            이러한 시행착오는 책과 인터넷을 통해 개념을 확실하게 이해하고 여러 방법을 시도해보면서 해결했습니다. 또한 이러한 경험은 소중한 자산이 되어서 다음 번 프로젝트에선 훨씬 수월하게 진행할 수 있었습니다.
                        </p>
                    </li>
                    <li onClick={() => {onClickDetail("sixth");}} id="sixth-list"><span id="sixth-question">앞으로 어떤 역량을 더 강화시키고 싶나요?</span><div id="sixth-list-arrow" className="list-arrow"></div></li>
                    <li id="faq-sixth-answer" className="answer">
                        <p>
                            개념에 대해서 더 깊이 공부하고 싶습니다. 단순히 돌아가기만 하면 되는 프로그래밍이 아니라, 개념을 정확하게 이해하고 더 효율적인 프로그래밍을 하고 싶습니다.<br/>
                            어떤 태그는 왜 지양해야 하는지, 어떤 코드가 더 유지보수에 좋은지 등 더 심도있는 공부가 필요하다고 느끼고 있습니다.<br/>
                            또한 디자인에 대한 관심도 많아서 관련 분야를 공부한다면 현업에서도 디자이너분과 더 수월하게 소통할 수 있을 것이라고 생각합니다.
                        </p>
                    </li>
                </ul>
            </FAQLIST>
        </AboutBlock>
    );
}

export default About;