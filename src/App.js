import React from 'react';
import { createGlobalStyle } from 'styled-components';
import RouterJS from './components/RouterJS';
import './css/fonts.css';

// style //
const GlobalStyle = createGlobalStyle`
  body {
    font-family: "bath_light";
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

// portfolio information //
const portfolios = [
  {
    id: 1,
    name: "감정일기",
    urlLink: "https://0eun-je.github.io/emotional-diary/",
    period: "20일",
    language: "HTML, CSS, Javascript(ES6), React, Node.js",
    skill: ["• useState, useReducer를 이용한 상태 관리 및 useEffect를 통한 마운트 이벤트 관리", "• React Calendar Library를 활용한 달력 기능",
            "• React와 Styled component를 이용해 독립된 component의 조합으로 구성하여 재활용성을 높임"],
    contribution: "Front-end(100%), Design(100%)",
    description: "하루동안의 나의 생각, 감정, 기분 등을 정리함으로써 감정을 조절하고 마음을 다스릴 수 있는 일기",
    functions: ["• 프로필 사진 및 닉네임 변경", "• 나의 감정, 상황, 감정의 이유, 대처 등을 기록", "• 기록한 일기 수정 및 삭제", "• 감정별로 일기 모아보기", "• 날짜별로 일기 모아보기", "• 일일 통계, 월별 통계 및 위로의 말"],
    capturedImage: ["../screenshots/emotion_first.jpg", "../screenshots/emotion_second.jpg", "../screenshots/emotion_third.jpg", "../screenshots/emotion_fourth.jpg","../screenshots/emotion_fifth.jpg"]
  },
  {
    id: 2,
    name: "COVID-19",
    urlLink: "http://covid19.dothome.co.kr",
    period: "17일",
    language: "HTML, CSS, Javascript, Node.js",
    skill: ["• Bootstrap Grid Layout System으로 반응형 웹페이지 제작", "• 공공데이터활용지원센터 Open API로 받아온 XML데이터를 분석하여 화면에 출력",
    "• Chart.js를 활용해 막대그래프, 꺾은선그래프, 파이그래프 구현"],
    contribution: "Front-end(100%), Design(100%)",
    description: "코로나 확진자 수, 예방접종 현황, 대응수칙 등 코로나 관련 정보를 한 눈에 파악할 수 있는 사이트",
    functions: ["• 전국 코로나 확진자, 격리해제, 치료중, 사망자 수", "• 지역별 확진자 동향 및 확진자 순위", "• 양성/음성, 남자/여자, 연령대별 확진자 수", "• 지역별 확진자, 격리해제, 치료중, 사망자 수 등 코로나 관련 정보", "• 전국 예방접종 현황", "• 코로나 대응수칙(링크연결)"],
    capturedImage: ["../screenshots/covid_first.jpg", "../screenshots/covid_second.jpg", "../screenshots/covid_third.jpg", "../screenshots/covid_fourth.jpg","../screenshots/covid_fifth.jpg"]
  },
  {
    id: 3,
    name: "TODO LIST",
    urlLink: "https://0eun-je.github.io/todolist/",
    period: "4일",
    language: "HTML, CSS, Javascript(ES6), React, Node.js",
    skill: ["• useState, useReducer, Context API를 이용한 상태 관리 및 useEffect를 통한 마운트 이벤트 관리", "• Props를 통해 컴포넌트에게 값 전달",
            "• React와 Styled component를 이용해 독립된 component의 조합으로 구성하여 재활용성을 높임"],
    contribution: "Front-end(100%), Design(100%)",
    description: "해야할 일을 추가, 삭제함으로써 효율적으로 할 일 관리",
    functions: ["• 해야할 일 추가", "• 필요없는 할 일 삭제", "• 한 일 체크 및 앞으로 할 일 갯수 안내"],
    capturedImage: ["../screenshots/todolist_first.jpg", "../screenshots/todolist_second.jpg", "../screenshots/todolist_third.jpg", "../screenshots/todolist_fourth.jpg","../screenshots/todolist_fifth.jpg"]
  },
  {
    id: 4,
    name: "스터디라운지 홈페이지",
    urlLink: "https://0eun-je.github.io/study_lounge/",
    period: "26일",
    language: "HTML, CSS, Javascript, Node.js",
    skill: ["• GRID Layout으로 이미지 표현", "• Font awesome icon 사용",
            "• 외부 링크 연결 및 네이버 지도 API 활용"],
    contribution: "Front-end(100%), Design(100%)",
    description: "실제로 매니저로서 아르바이트를 했던 스터디카페의 정보가 담겨있는 홈페이지",
    functions: ["• 스터디라운지 소개 및 오시는 길 안내", "• 열람실 종류, 특징, 전경 및 그 외 편의시설 안내", "• 요금 안내", "• 매달 진행하는 특별 할인 이벤트 게시", "• 휴무, 주의사항 등 이용 안내 관련 공지사항 게시", "• 상담 및 무료체험 신청하기"],
    capturedImage: ["../screenshots/studylounge_first.jpg", "../screenshots/studylounge_second.jpg", "../screenshots/studylounge_third.jpg", "../screenshots/studylounge_fourth.jpg","../screenshots/studylounge_fifth.jpg"]
  },
  {
    id: 5,
    name: "Github",
    urlLink: "https://0eun-je.github.io/github_clone/",
    period: "14일",
    language: "HTML, CSS, Javascript, Node.js",
    skill: ["• Float, Flex Layout 등 다양한 CSS 활용을 통해 홈페이지 제작", "• Youtube API, Google map API를 통한 기능 구현",
            "• Javascript에서 각종 event 관리"],
    contribution: "Front-end(100%), Design(100%)",
    description: "Github clone 웹사이트",
    functions: ["• Github 소개 영상 감상", "• Github 관련 정보 안내", "• Google map에서 Github 본사 위치 파악"],
    capturedImage: ["../screenshots/github_first.jpg", "../screenshots/github_second.jpg", "../screenshots/github_third.jpg", "../screenshots/github_fourth.jpg","../screenshots/github_fifth.jpg"]
  },
  {
    id: 6,
    name: "경희대학교 버스 App",
    urlLink: "https://bigfile.mail.naver.com/bigfileupload/download?fid=ilnwKke0D6c/KotjKCYmFoU9FCYZKAUwKA2waxUZKqgZFCYwFoKwaxbXKxvlHqump6Empxv/pxK9axJCKztqMrk0FovlKrpSazKwMxEm",
    period: "3달",
    language: "Java, Android, Oracle",
    skill: ["• Java Server와 Android Client 간 TCP/IP Socket 통신", "• Google map API로 지도 상 버스 위치 표시",
            "• 공공데이터활용지원센터의 버스 관련 Open API로 받아온 XML 데이터를 서버에서 처리"],
    contribution: "Back-end(100%), Front-end(100%)",
    description: "경희대학교 내·외부를 지나는 버스의 도착 정보를 알려주는 Application",
    functions: ["• 내 근처의 버스 도착 정보 안내", "• 노선 번호로 검색하여 버스 도착 정보 확인", "• 정류소 이름으로 검색하여 버스 도착 정보 확인", "• 즐겨찾기로 간편 검색", "• 버스 첫차/막차 시간, 출퇴근/일반 배차 시간 등 버스 정보 확인", "• 버스 위치는 노선 리스트 또는 지도에서 확인 가능"],
    capturedImage: ["../screenshots/khbus_first.jpg", "../screenshots/khbus_second.jpg", "../screenshots/khbus_third.jpg", "../screenshots/khbus_fourth.jpg","../screenshots/khbus_fifth.jpg"]
  },
  {
    id: 7,
    name: "안심귀가 App",
    urlLink: "https://bigfile.mail.naver.com/bigfileupload/download?fid=i/nwKke0D6cXKotjKCYmKAEZa3YZKAUwKA2waxUZKqE9F3YwFoKwaxbXKxvlHqudKAvXpAkSpAMqFoIoaxbZK4EZKrKlKqp0FzE/aziv",
    period: "3달",
    language: "Java, Android, Oracle",
    skill: ["• 30초마다 gps로 내 위치를 전송하여 Google map에 표시", "• Open API로 근처 경찰소 위치 표시",
            "• Gyroscope sensor를 이용해 휴대폰에 가해지는 충격을 감지하여 위험 측정"],
    contribution: "Back-end(100%) - Open API 연동 및 서버 구현",
    description: "위치추적, 충격감지 등을 통해 안전한 귀가를 지원하는 Application",
    functions: ["• 회원가입 및 로그인", "• 안심귀가 모드 켜기/끄기(특정 시간대를 안심귀가 시간대로 설정해두면 위치추적 및 센서감지)", "• 친구 추가 및 SMS 자동 전송", "• 사이렌 알람 울림", "• 핸드폰에 큰 충격이 가해질 시 친구에게 SMS 전송", "• 근처 경찰서 위치 확인"],
    capturedImage: ["../screenshots/crime_first.jpg", "../screenshots/crime_second.jpg", "../screenshots/crime_third.jpg", "../screenshots/crime_fourth.jpg","../screenshots/crime_fifth.jpg"]
  },
  {
    id: 8,
    name: "용돈관리 프로그램",
    urlLink: "",
    period: "1달",
    language: "Java, Swing, Oracle",
    skill: ["• Encapsulation, OOP 등 Java의 특징을 활용한 Project", "• TCP/IP Socket 통신",
            "• React와 Styled component를 이용해 독립된 component의 조합으로 구성하여 재활용성을 높임"],
    contribution: "Back-end(100%) - 서버 및 DB",
    description: "1:1 채팅",
    functions: ["• 프로필 사진 및 닉네임 변경", "• 나의 감정, 상황, 감정의 이유, 대처 등을 기록", "• 기록한 일기 수정 및 삭제", "• 감정별로 일기 모아보기", "• 날짜별로 일기 모아보기", "• 일일 통계, 월별 통계 및 위로의 말"],
    capturedImage: ["../screenshots/allowance_first.jpg", "../screenshots/allowance_second.jpg", "../screenshots/allowance_third.jpg", "../screenshots/allowance_fourth.jpg","../screenshots/allowance_fifth.jpg"]
  },
  {
    id: 9,
    name: "채팅 프로그램",
    urlLink: "",
    period: "1달",
    language: "Java, Swing, Oracle",
    skill: ["• Encapsulation, OOP 등 Java의 특징을 활용한 Project", "• TCP/IP Socket 통신",
            "• Java swing으로 깔끔한 UI 구성"],
    contribution: "Back-end(100%) - 서버 및 DB",
    description: "자산 관리, 지출 및 수입 관리, 통계 등을 통해 자산을 효율적으로 관리할 수 있는 프로그램",
    functions: ["• 통장 및 현금 액수 입력", "• 지출 및 수입 입력", "• 통장과 현금 사이의 이동 관리", "• 지출 및 수입 내역 확인", "• 오늘과 이번 달의 통계 확인"],
    capturedImage: ["../screenshots/chatting_first.jpg", "../screenshots/chatting_second.jpg", "../screenshots/chatting_third.jpg", "../screenshots/chatting_fourth.jpg","../screenshots/chatting_fifth.jpg"]
  }
];

// function //
function App() {
  return (
    <>
      <GlobalStyle />
      <RouterJS portfolios={portfolios} />
    </>
  );
}

export default App;
