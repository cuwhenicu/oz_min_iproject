// import '../css/Result.css'


const Mbti = ({data}) => {


    return (
        <>
            <div className='resultTitle'>{data.title}</div>
            <div className="resultImgBox"><img className="resultImg" src={data.img} /></div>
            <div className="resultInfo">{data.info}</div>
        </>
    );
}

export default Mbti;