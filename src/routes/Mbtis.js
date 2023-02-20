import React, { useEffect } from "react";
import mbtiData from '../../src/data/mbti.json';
import MiniMbti from "../components/MiniMbti";
import { useNavigate } from "react-router-dom";

const Mbtis = () => {

  const mbtis = Object.keys(mbtiData);

  // 뒤로가기 버튼
  const navigate = useNavigate(); 
  const onClickBtn = () => {
    navigate(-1); // 바로 이전 페이지로 이동
  };

    return(
      <div className="superMiniContainer">
        <div className='miniContainer'>
          {mbtis.map((mbti) => <MiniMbti data={mbtiData[mbti]} />)} 
        </div>
        <div className="goresultContainer">
          <button onClick={onClickBtn} className="goResultBtn">↺ 뒤로가기</button>
        </div>  
      </div>
    );
  
};

export default Mbtis;