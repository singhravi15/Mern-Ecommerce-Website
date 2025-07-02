import React from "react";
import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <div className="box bannerBox !overflow-hidden rounded-lg group ">
      <Link to={"/"}>
        <img
          src={props.img}
          alt=""
          srcset=""
          className="w-full transiton-all group-hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
