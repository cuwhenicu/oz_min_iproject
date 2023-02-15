import { useNavigate} from "react-router-dom";
import React from "react";
import "../css/Intro.css";
import {ReactComponent as Img} from "../ozman01.svg";

const Intro = () => {
    const navigate = useNavigate();

    function goTest(){
      navigate('/test')
    }
  
    return (
        <div className="introContainer">

          <div className="introTitle">나는<br></br>어떤 개발자가<br></br> 될 상인가?</div>
          
          <div className="introImgBox">
            <Img className="introImg"/>
          </div>

          <div className="introButtons">
            <button className = "introButton" onClick={goTest}>시작하기</button>
            <div className="introCount">참여자 수(firebase에서 데이터 count하기)</div>
          </div>
        </div>
    );
  
};

export default Intro;