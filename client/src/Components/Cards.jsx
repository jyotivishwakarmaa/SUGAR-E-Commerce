import React from 'react'
import img1 from '../images/card1.webp'
import img2 from '../images/lip.webp'
import img3 from '../images/lipstick-2.jpg'
import img4 from '../images/Lipstick-2.webp'
import img5 from '../images/Cream-2.jpg'

const Cards = () => {
  return (
    <>
      <h2 id="h2">_________________FOR YOU_________________</h2>
      <div className="card-sec1">
        <div id="card1">
          <img src={img1} id="img" /> <br />
          <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
          <p>RS. 599.00</p>
        </div>

        <div id="card2">
          <img src={img2} id="img" /> <br />
          <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
          <p>RS. 599.00</p>
        </div>
      </div>

    
        <h1 id='h1'>______________NEW LAUNCHES_____________</h1>

      <div className="card-sec2">
        <div id="card1">
          <img src={img3} id="img" /> <br />
          <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
          <p>RS. 599.00</p>
        </div>

        <div id="card2">
          <img src={img5} id="img" /> <br />
          <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
          <p>RS. 599.00</p>
        </div>

        <div id="card3">
          <img src={img4} id="img" /> <br />
          <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
          <p>RS. 599.00</p>
        </div>
      </div>
    </>
  );
}

export default Cards