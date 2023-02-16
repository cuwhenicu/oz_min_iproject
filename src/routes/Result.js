import { useParams, useNavigate, Link } from "react-router-dom";
import Mbti from "../components/Mbti";
import mbtiData from '../data/mbti.json';
import '../css/Result.css'

import { useState, useEffect } from "react";
import styled from "styled-components";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useScript } from "../hooks";
import kakaoLogo from "../../src/kakao.png";

//ModalBackdrop: 모달 실행시 BGImage
const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  /*스크롤이 되도 모달창이 고정 되도록 position:fixed*/
  position: fixed;
  bottom: 0;
  left: 0;
  /* 자식 컴포넌트인 모달창을 가운데 오게 하기 위해 flex설정*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Modalbtn: 모달 버튼
export const ModalBtn = styled.button``;

//ModalView: 모달 실행시 뜨는 팝업창
export const ModalView = styled.div.attrs((props) => ({
  role: "dialog",
}))`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  position: absolute;
  width: 180px;
  height: 60px;
  border-radius: 1rem;
  background-color: white;
  padding: 15px;
  }
`;

//.env
const REACT_APP_KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

//kakao share버튼
const KakaoShareButton = styled.a`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

// 버튼을 배치시키는 컨테이너
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 48px);
  grid-column-gap: 8px;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

// Style을 적용한 버튼 컴포넌트 추가
const URLShareButton = styled.button`
  width: 48px;
  height: 48px;
  color: white;
  border-radius: 24px;
  border: 0px;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  background-color: black;
  &:hover {
  background-color: #a99fee;
  }
`;


const Result = () => {
  const params = useParams();
  const { mbti } = params;

  const navigate = useNavigate();

  function goMbtis(){
    navigate('/mbtis')
  }

  function goIntro(){
    navigate('/')
  }

  const [isOpen, setIsOpen] = useState(false);
  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  // kakao SDK import하기
  const status = useScript("https://developers.kakao.com/sdk/js/kakao.js");

  // kakao sdk 초기화하기
  // status가 변경될 때마다 실행되며, status가 ready일 때 초기화를 시도합니다.
  useEffect(() => {
    if (status === "ready" && window.Kakao) {
      // 중복 initialization 방지
      if (!window.Kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        window.Kakao.init(REACT_APP_KAKAO_KEY);
      }
    }
  }, [status]);

  const handleKakaoButton = () => {
    window.Kakao.Link.sendScrap({
      requestUrl: currentUrl,
    });
  };

  //window 객체에서 현재 url 가져오기
  const currentUrl = window.location.href;


  return (
    <div className="resultContainer">
      <Mbti data={mbtiData[mbti]}/>
      <div className="resultButtonContainer"> 
        <div className="resultButtons">
          <button className="resultButton" onClick={goMbtis}>전체 유형 보기</button>

          <ModalBtn className="resultButton" onClick={openModalHandler}>
            {isOpen ? "Opened!" : "🔗 공유하기"}
          </ModalBtn>
          {isOpen ? ( // 모달 배경화면을 누르면 setIsOpen(!isOpen)가 된다.
            <ModalBackdrop onClick={openModalHandler}>
              <ModalView>
                  <h1>공유하기</h1>
                  <GridContainer>
                    <KakaoShareButton onClick={handleKakaoButton}>
                      <KakaoIcon src={kakaoLogo}></KakaoIcon>
                    </KakaoShareButton>
                    <FacebookShareButton url={currentUrl}>
                      <FacebookIcon className="facebookButton"></FacebookIcon>
                    </FacebookShareButton>
                    <CopyToClipboard text={currentUrl}>
                      <URLShareButton className="urlButton">URL</URLShareButton>
                    </CopyToClipboard>
                  </GridContainer>
              </ModalView>
            </ModalBackdrop>
          ) : null}
        </div>

        <div className="resultButtons">
          <a
            href="https://faint-bar-25e.notion.site/Team-a1d6b19d09904d40a01fc2a4a49206fa"
            target="_blank"
          >
            <button className="resultButton">개발팀 소개</button>
          </a>
          <a 
            href="javascript:setTimeout(()=>{window.location = 'https://ozcodingschool.com/' },3000);" 
            // target='_blank'
          >
            <button className="resultButton">개발 배우러 가기</button>
          </a>
        </div>

        <div className="resultButtons">
          <button className = "retryButton" onClick={goIntro}>↺ 다시하기</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
