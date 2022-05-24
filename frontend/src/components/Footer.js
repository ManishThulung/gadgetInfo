import React from "react";
// import playStore from "../../../images/playstore.png";
// import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h3>Contact Us</h3>
        <div className="contacts">
          <div>
            <i className="fas fa-home"> </i>Patan Dhoka, Lalitpur
          </div>
          <div>
            <i className="fas fa-phone-square-alt"> </i>9823695347
          </div>
          <div>
            <i className="far fa-envelope"> </i>biratechinfo@gmail.com
          </div>
        </div>
      </div>

      <div className="midFooter">
        <Link className="navbar-brand" to="/">
          An WEB PORTAL
          <br />
          for Mobile Phones
        </Link>

        <p>Copyrights 2021 &copy; gadgetInfo.</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <i className="fab follow-icon fa-facebook-square"></i>
        <i className="fab follow-icon fa-instagram"></i>
        <i className="fab follow-icon fa-linkedin"></i>
        <i className="fab follow-icon fa-twitter-square"></i>
      </div>
    </footer>
  );
};

export default Footer;
