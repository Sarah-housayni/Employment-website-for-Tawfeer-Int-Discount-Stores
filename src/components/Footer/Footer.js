import React from "react";
import fb from "../../assets/3011698.png";
import insta from "../../assets/R.png";
import './Footer.css'
const Footer = () => {
  return (
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="sb_footer-links_div">
            <h3>For Business</h3>
            <a href="https://lb.linkedin.com/in/rami-bitar-9a14476" className="link">
              Rami Bitar
            </a>
            <a href="https://www.linkedin.com/in/hussein-zreik-5a760672/?originalSubdomain=lb" className="link">
              Hussein Zreik
            </a>
            
          </div>
          <div className="sb_footer-links_div">
            <h3>We are here to help you</h3>
            
              <p>Reach us anytime</p>
              <p>76 66 88 01 </p>
              <p>http://www.tawfeer.market</p>
            
          </div>
         
          <div className="sb_footer-lins_div">
            <h4>Find us on social media</h4>
            <div className="socialmedia">
              <p>
                <a href="https://www.facebook.com/TawfeerLebanon">
                <img src={fb} alt=""  />
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/tawfeerlebanon/?hl=en">
                <img src={insta} alt="" />
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>@{new Date().getFullYear()} Tawfeer All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
