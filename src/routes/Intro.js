import { Link } from "react-router-dom";
import React from "react";
import "../css/Intro.css";
import {ReactComponent as Img} from "../ozman01.svg";

function Intro() {
  return (
      <div className="introContainer">
        <div className="introTitle">나는<br></br>어떤 개발자가<br></br> 될 상인가?</div>
        <div>
          <Img />
        </div>
        <div className="introButton">
          <Link to="/test" className="introStart">시작하기</Link>
          <div className="introCount">참여자 수(firebase에서 데이터 count하기)</div>
        </div>
      </div>
  );
};

export default Intro;