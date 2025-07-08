import Carousel from "react-bootstrap/Carousel";
import {  useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaCircle } from "react-icons/fa";
import axios from "axios";
import pro1 from '../images/pro1.webp'
import pro2 from "../images/pro2.webp";
import pro3 from "../images/pro3.webp";
import pro4 from "../images/pro4.webp";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";

const Home = () => {

  const dis=useDispatch()
  const [myData, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${BackEndUrl}/product/homepage`;
    try {
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

    
   return(
  <>
  {
    myData.map((e)=>{
      return (
        <>
          <div className="card-container">
            <Card 
              style={{ width: "18rem", alignItems: "center", display:"flex", flexDirection:"column"}}
              className="custom-card"
            >
              <Card.Img variant="top" src={e.defaultimage} />
              <Card.Body>
                <Card.Title>{e.name}</Card.Title>
                <Card.Text>₹{e.price}</Card.Text>
                <Card.Text>{e.description}</Card.Text>
                <Card.Text>{e.category}</Card.Text>

                <Button
                  variant="primary"
                  onClick={() =>
                    dis(
                      addToCart({
                        id: e._id,
                        name: e.name,
                        price: e.price,
                        description: e.description,
                        category: e.category,
                        image: e.defaultimage,
                        qnty: 1,
                      })
                    )
                  }
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </div>
        </>
      );
    })
   }
  </>
  );
};

export default Home;
