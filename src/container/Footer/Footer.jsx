import { FiInstagram } from "react-icons/fi";
import { DiGithub } from "react-icons/di";
import {AiOutlineLinkedin} from 'react-icons/ai'
import { FooterOverlay, Newsletter } from "../../components";
import { images } from "../../constants";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="app__footer section__padding">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">
            Urb. Lomas Del Viento, Cond. 2 House 231, The bora Door.
          </p>
          <p className="p__opensans">010 010 00</p>
          <p className="p__opensans">011 010 01</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="logo" />
          <p className="p__opensans">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            fuga consequatur reiciendis unde accusantium in id atque ad totam
            repellendus."
          </p>
          <img src={images.spoon} alt="spoon" className="spoon__img" />
          <div className="app__footer-links_icons">
            <a href="https://github.com/AlejandroJGR">
              <DiGithub />
            </a>
            <a href="https://www.linkedin.com/in/alejandro-javier-gomez-ramirez-06923715a">
              <AiOutlineLinkedin />
            </a>
            <a href="https://www.instagram.com/alejandrojg23/">
              <FiInstagram />
            </a>
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">08:00 am -12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="p__opensans">Made with 💙 by dev.alejandrojgr</p>
        <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
