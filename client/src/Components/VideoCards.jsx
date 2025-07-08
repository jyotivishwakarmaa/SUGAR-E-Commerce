import React from 'react'
import cardvdo1 from '../images/cardvdo2.mp4'
import cardvdo2 from '../images/cardvdo4.mp4'
import cardvdo3 from '../images/cardvdo5.mp4'
import cardvdo4 from '../images/cardvdo3.mp4'
const VideoCards = () => {
  return (
    <>
      <h1 style={{textAlign:"center", marginBottom: "50px", marginTop: "50px"}}>____________________Our Best Seller____________________</h1>
      <div className="card-vdo">
        <div className="cardvdo">
          <div className="vdo-card">
            <video autoPlay muted loop src={cardvdo1} className="vdo" />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>

          <div className="vdo-card">
            <video autoPlay muted loop src={cardvdo2} className="vdo" />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>

          <div className="vdo-card">
            <video autoPlay muted loop src={cardvdo3} className="vdo" />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>

          <div className="vdo-card">
            <video autoPlay muted loop src={cardvdo4} className="vdo" />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default VideoCards