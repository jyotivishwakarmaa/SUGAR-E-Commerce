import React from "react";
// import "./Footer.css";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { GrInstagram } from "react-icons/gr";
import { IoLogoYoutube } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="sugar-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img
            src="src/images/footerimages.png"
            alt="Sugar Cosmetics"
            className="sugar-logo"
          />
          <p id="para">
            Unleash your bold beauty with high-performance, cruelty-free makeup
            that celebrates every skin tone.
          </p>
        </div>

        <div className="footer-highlights">
          <div className="highlight">
            <i className="fas fa-shipping-fast"></i>
            <p>Free Shipping</p>
          </div>
          <div className="highlight">
            <i className="fas fa-award"></i>
            <p>Best Quality</p>
          </div>
          <div className="highlight">
            <i className="fas fa-lock"></i>
            <p>Secure Checkout</p>
          </div>
        </div>
      </div>

      <div className="footer-links">
        <div className="link-section">
          <h4>Explore</h4>
          <a href="/shop">Shop</a>
          <a href="/offers">Offers</a>
          <a href="/stores">Find a Store</a>
        </div>

        <div className="link-section">
          <h4>Support</h4>
          <a href="/contact">Contact Us</a>
          <a href="/faq">FAQs</a>
          <a href="/returns">Returns</a>
        </div>

        <div className="link-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-instagram" style={{ fontSize: "30px" }}>
                <GrInstagram />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-facebook-f" style={{ fontSize: "30px" }}>
                <TiSocialFacebookCircular />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-youtube" style={{ fontSize: "30px" }}>
                <IoLogoYoutube />
              </i>
            </a>
            <a href="#">
              <i className="fab fa-twitter" style={{ fontSize: "30px" }}>
                <BsTwitterX />
              </i>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Sugar Cosmetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
