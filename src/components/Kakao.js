import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import kakaoLogo from "../../src/kakao.png";

//kakao share버튼
const ShareButton = styled.button`
  cursor: pointer;
`;

const KakaoIcon = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 24px;
`;

// 처음만 두번클릭해야 작동됨 / 창이여러개 나오는 듯 함
const KakaoShareButton = () => {
  useEffect(() => {
    createKakaoButton();
  }, []);

  const currentUrl = window.location.href;

  // !!!!! [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;

      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }

      kakao.Share.createDefaultButton({
        container: "#kakaotalk-sharing-btn",
        objectType: "feed",
        content: {
          title: "My Developer Type",
          description: "#개발자 #어떤 #상일까?",
          imageUrl:
            "https://user-images.githubusercontent.com/121272449/219553902-e10b2026-bb7b-4504-a1b1-ad851c8067dc.JPG",
          link: {
            mobileWebUrl: currentUrl,
            webUrl: currentUrl,
          },
        },
      });
    }
  };

  return (
    <ShareButton id="kakaotalk-sharing-btn">
      <KakaoIcon src={kakaoLogo}></KakaoIcon>
    </ShareButton>
  );
};

export default KakaoShareButton;
