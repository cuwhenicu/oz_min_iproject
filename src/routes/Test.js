import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import questionData from "../data/questionData";
import "../css/Test.css";
import ProgressBar from "@ramonak/react-progress-bar";


//useState로 초기값 설정
const Test = () => {
  const [questionNumb, setQuestionNumb] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: "ei", score: 0 },
    { id: "sn", score: 0 },
    { id: "ft", score: 0 },
    { id: "jp", score: 0 },
  ]);

  const navigate = useNavigate();

//map을 이용해서 totalScore의 id와 데이터 파일의 타입 일치 여부 확인
//일치할 경우 newScore 값을 업데이트함 
  const selectBtn = (add, type) => {
    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + add } : s
    );
    setTotalScore(newScore);
    // 문항이 끝날 때까지 다음 문항으로 넘어가는 조건식
    if (questionData.length !== questionNumb + 1) {
      setQuestionNumb(questionNumb + 1);
    } else {

      // 배열의 reduce 함수를 이용하여 mbti 결과값을 리턴하는 연산
      const resultMbti = newScore.reduce(
        (account, current) =>
          account +
          (current.score >= 2
            ? current.id.substring(0, 1)
            : current.id.substring(1, 2)),
        ""
      );
    console.log(resultMbti);

    //문항이 끝날 때 결과로 넘어가는 함수
    navigate(`/result/${resultMbti}`)
    }
  };


  //프로그레스바(라이브러리 인스톨)
  // 문항 수와 배열 길이를 나눠 퍼센트 계산, math.floor 함수로 나머지 값 버림.
  return (
    <div className="test-container">
      
      <ProgressBar className="progressBar"
      completed={(Math.floor(questionNumb/questionData.length*100))}
      maxCompleted={100}
      bgColor = "#C8FAC8"
      labelColor = "rgb(13, 7, 38)"
      />

      <div className="test-sub-cont">
        <div>{questionData[questionNumb].title}</div>
      <div>{questionData[questionNumb].subtitle}</div>
      <div>{questionData[questionNumb].subt2}</div>
      <div>{questionData[questionNumb].subt3}</div>
      </div>

      <div className="test-selectBtns">
        <button onClick={() => selectBtn(1, questionData[questionNumb].type)}
        className="test-selectBtn">
          {questionData[questionNumb].answera}
        </button>
        <button onClick={() => selectBtn(0, questionData[questionNumb].type)}
        className="test-selectBtn">
          {questionData[questionNumb].answerb}
        </button>
      </div>

    </div>
  );
};

export default Test;
