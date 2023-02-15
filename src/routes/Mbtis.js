import {useParams, useNavigate} from "react-router-dom";
import React from "react";
import "../css/Mbtis.css";

import Mbti from "../components/Mbti";
import mbtiData from '../../src/data/mbti.json';

const Mbtis = () => {
    const params = useParams();
    const { mbti } = params;

    const navigate = useNavigate();

    function goMbtis(){
      navigate('/mbtis')
    }


    return(
        <div>
            <div><Mbti data={mbtiData[mbti]}/></div>
            <div>mbti 제목</div>
            <div>mbti 이미지</div>
        </div>
    )
}

export default Mbtis;