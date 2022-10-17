import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans app__header-h1_p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus cursus
        semper eros, vitae condimentum lectus fringilla ut. In quis commodo
        lacus. Quisque a purus leo. Interdum et malesuada fames ac ante ipsum
        primis in faucibus.
      </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header" />
    </div>
  </div>
);

export default Header;
