import React from 'react'
import video from '../images/video.mp4'
// import video2 from '../images/video2.mp4'
const Topvar = () => {
  return (
    <>
      <div>
        <video autoPlay muted src={video} style={{ width: "100%" }}></video>
        {/* <video autoPlay muted src={video2} style={{width:"100%", marginTop:"120px"}}></video> */}
      </div>
    </>
  );
}

export default Topvar



