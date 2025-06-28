import React from 'react'
import image1 from "../images/Launch-SUGAR.webp";
import image2 from "../images/face.webp"
import image3 from "../images/Nail.webp"
import image4 from "../images/lipsmackup.webp"
const Imagesec = () => {

  const images=[
      image1,
      image2,
      image3,
      image4
  ]
  const slider=[...images,...images]
  return (
    
    <>
     <div className='slide'>
      <div className='slide1'>
          
          {
            slider.map((e,idx)=>{
              return (
                <>
                  <div className="slide2" key={idx}>
                    <img src={e} alt="" />
                  </div>
                </>
              );
             
            })
          }
      </div>

     </div>
    </>
  )
}

export default Imagesec