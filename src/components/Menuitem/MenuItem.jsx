import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => {
  return (
    <div className="app__menuItem">
      <div className="app__menuItem-head">
        {/* Name */}
        <div className="app__menuItem-name">
          <p className="p__cormorant menuItem__name-p">{title}</p>
        </div>

        <div className="app__menuItem-dash" />
        {/* Price */}
        <div className="app__menuItem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      {/* Tags  */}
      <div className="app__menuItem-sub">
        <p className="p__opensans menuItem-sub-p">{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
