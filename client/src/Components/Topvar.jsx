import React from 'react'
import video from '../images/video.mp4'
const Topvar = () => {
  return (
    <>
     
        <div>
        <video autoPlay loop muted src={video} style={{ width: "100%", marginTop: "120px"}} ></video>
      </div>
    </>
  );
}

export default Topvar