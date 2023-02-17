import React, { useEffect } from "react";
import mbtiData from '../../src/data/mbti.json';
import MiniMbti from "../components/MiniMbti";

const Mbtis = () => {
const mbtis = Object.keys(mbtiData);

    return(
        <div className='miniContainer'>
          {mbtis.map((mbti) => <MiniMbti data={mbtiData[mbti]} />)} 
        </div>
    )
}

export default Mbtis;