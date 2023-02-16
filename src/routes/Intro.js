import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "../css/Intro.css";
import { ReactComponent as Img } from "../ozman01.svg";

import{doc,getDoc,setDoc} from "firebase/firestore"
import { db } from "../fbase";

const Intro = () => {


  const [total, setTotal] = useState(0);    
  const getData = async () => {     
    const docRef = doc(db, "mbti", "count");     
    const docSnap = await getDoc(docRef);     
    const count = docSnap.data().users
    setTotal(count);   
  };   
    useEffect(() => {
      getData();     
    },[]); 

    const user_count = () => {     
      setDoc(doc(db, "mbti", "count"), 
      {       users:  total+1,     });   
    }

  const navigate = useNavigate();
  function goTest(){
    user_count();
    navigate('/test')
  }

  return (
      <div className="introContainer">
        <div className="introTitle">나는<br></br>어떤 개발자가<br></br> 될 상인가?</div>
        <div className="introImgBox">
          <Img className="introImg"/>
        </div>

        <div className="introButtons">
          <button className="introButton" onClick={goTest} >시작하기</button>
          <div className="introCount">참여자 수 : {total}</div>
        </div>
      </div>
  );
};

export default Intro;
