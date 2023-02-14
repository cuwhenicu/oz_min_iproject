import { useParams, useNavigate, Link } from "react-router-dom";
import Mbti from "../components/Mbti";
import mbtiData from '../data/mbti.json';
import '../css/Result.css'

const Result = () => {
  const params = useParams();
  const { mbti } = params;

  const navigate = useNavigate();

  function goIntro(){
    navigate('/')
  }

  return (
    <div className="resultContainer">
      <Mbti data={mbtiData[mbti]}/>
      <div className="resultButtonContainer"> 
        <div className="resultButtons">
          <button className="resultButton">전체 유형 보기</button>
          <button className="resultButton">공유하기</button>
        </div>
        <div className="resultButtons">
          <a href="https://www.naver.com/" target='_blank'>
            <button className="resultButton">팀 소개 페이지</button>
          </a>
          <a href="https://ozcodingschool.com/" target='_blank'>
            <button className="resultButton">오즈 코딩  바로가기</button>
          </a>
        </div>
        <div className="resultButtons">
          <button className = "resultButton" onClick={goIntro}>다시하기</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
