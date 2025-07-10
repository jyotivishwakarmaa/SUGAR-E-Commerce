import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BackEndUrl from "../utils/BackEndUrl";
import axios from "axios";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const dis = useDispatch();
  const cart = useSelector((state) => state.mycart.cart); 
  const [myData, setMydata] = useState([]);

  const loadData = async () => {
    let api = `${BackEndUrl}/product/homepage`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item.id === product._id);

    if (exists) {
      toast.warning("Product already in cart");
    } else {
      dis(
        addToCart({
          id: product._id,
          name: product.name,
          price: product.price,
          description: product.description,
          category: product.category,
          defaultimage: product.defaultimage,
          qnty: 1,
        })
      );
      toast.success("Product added to cart");
    }
  };

  return (
    <>
      <div className="card-parent">
        <h3
          style={{
            textAlign: "center",
            marginBottom: "70px",
            marginTop: "70px",
          }}
        >
          _________________NEWLY ADDED PRODUCTS_________________
        </h3>

        <div className="card-con">
          {myData.map((e) => (
            <div className="card" key={e._id}>
              <div className="card-img">
                <img src={e.defaultimage} alt={e.name} />
              </div>
              <div className="card-content">
                <p>{e.name}</p>
                <p>PRICE : {e.price}</p>
                <p>DESCRIPTION : {e.description}</p>
                <p>CATEGORY : {e.category}</p>
              </div>
              <div>
                <Button onClick={() => handleAddToCart(e)}>Add to cart</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default Home;
