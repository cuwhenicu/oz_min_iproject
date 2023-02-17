
const Mbti = ({data}) => {


    return (
        <>
            <div className="resultTitles">
                <div className='resultTitle'>{data.title}</div>
                <div className='resultTitle'>{data.title2}</div>
            </div>
            <div className="resultImgBox"><img className="resultImg" src={data.img} /></div>
            <div className="resultInfo">{data.info}</div>
        </>
    );
}

export default Mbti;