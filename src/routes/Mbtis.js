import React, { useEffect } from "react";


import mbtiData from '../../src/data/mbti.json';
import MiniMbti from "../components/MiniMbti";

const Mbtis = () => {
const mbtis = Object.keys(mbtiData);

    return(
        <div className='miniContainer'>
          {mbtis.map((mbti) => <MiniMbti data={mbtiData[mbti]} />)} 
               {/* <MiniMbti data={mbtiData.enfj} />
                <MiniMbti data={mbtiData.infj} />
                <MiniMbti data={mbtiData.enfp} />
                <MiniMbti data={mbtiData.infp} />
                <MiniMbti data={mbtiData.entj} />
                <MiniMbti data={mbtiData.intj} />
                <MiniMbti data={mbtiData.entp} />
                <MiniMbti data={mbtiData.intp} />
                <MiniMbti data={mbtiData.esfj} />
                <MiniMbti data={mbtiData.isfj} />
                <MiniMbti data={mbtiData.estj} />
                <MiniMbti data={mbtiData.istj} />
                <MiniMbti data={mbtiData.estp} />
                <MiniMbti data={mbtiData.istp} />
                <MiniMbti data={mbtiData.esfp} />
                <MiniMbti data={mbtiData.isfp} />  */}
        </div>
    )
}

export default Mbtis;