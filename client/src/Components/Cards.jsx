import React from 'react'
import img1 from '../images/card1.webp'
import img2 from '../images/lip.webp'
import img3 from '../images/lipstick-2.jpg'
import img4 from '../images/Lipstick-2.webp'
import img5 from '../images/Cream-2.jpg'
import img6 from '../images/Cream-2.jpg'
import img7 from '../images/Matte.jpg'


const Cards = () => {
  return (
    <>
      <div className="card-sec">
        <h3 id="h2">____________________FOR YOU____________________</h3>
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

          <div id="card2">
            <img src={img6} id="img" /> <br />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>
        </div>


        <h3 id="h1">___________________NEW LAUNCHES__________________</h3>

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

          <div id="card3">
            <img src={img7} id="img" /> <br />
            <p>MATTE AS HELL MINI CRAYON LIPSTICK</p>
            <p>RS. 599.00</p>
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Cards