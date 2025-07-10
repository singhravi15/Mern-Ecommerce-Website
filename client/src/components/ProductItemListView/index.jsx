import React from "react";
import ProductImage from "../../assets/Productimage.webp";
import { Link } from "react-router-dom";
import "../ProductItem/style.css";
import Rating from "@mui/material/Rating";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { FiHeart } from "react-icons/fi";
import { IoGitCompare } from "react-icons/io5";
import { Button } from "@mui/material";
import ProductImage2 from "../../assets/Productimage2.webp";

const ProductItem = () => {
  return (
    <div className="productItem rounded-md overflow-hidden border-2 border-[rgba(0,0,0,0.1)] !mt-8 padding-[15px] shadow-lg flex items-center">
      <div className="group imgWrapper w-[25%]  overflow-hidden rounded-md relative ">
        <Link to="/">
          <div className="img h-[250px] overflow-hidden">
            <img src={ProductImage} alt="" srcset="" className="w-full" />
            <img
              src={ProductImage2}
              alt=""
              srcset=""
              className="w-full absolute top-0 left-0 transition-all duration-700 opacity-0 group-hover:opacity-100"
            />
          </div>
        </Link>
        <span className="absolute top-[15px] left-[15px] bg-[#ff5252] rounded-md text-[12px] text-white !p-1">
          10%
        </span>
        <div className="absolute action top-[-200px] right-[5px] flex items-center gap-3 flex-col w-[50px] transition-all duration-700 group-hover:top-[15px]">
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black">
            <MdOutlineZoomOutMap className="group" />
          </Button>
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black">
            <FiHeart className="group" />
          </Button>
          <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !bg-white !text-black">
            <IoGitCompare className="group" />
          </Button>
        </div>
      </div>
      <div className="info !p-3 !py-5 !px-8 !w-[75%] !h-full ">
        <h6 className="text-[15px]">
          <Link to="/" className="link">
            Trilok Fab
          </Link>
        </h6>
        <h3 className="text-[18px] font-[500] title !mt-1 text-[rgba(0,0,0,0.9)]">
          <Link to="/" className="link">
            Buy New Trend Women Black Cotton Blend Top
          </Link>
        </h3>
        <p className="text-[14px] !mt-[10px]">
          For girl's seeking a ethnic set that melds classic charm with a
          contemporary twist,
          <br /> Trilok Fab flared ethnic gown is a perfect choice. It is
          designed with both comfort <br /> and style in mind, this maxi length
          gown is made to feel luxurious against the skin.{" "}
        </p>
        {/* <Rating name="read-only" value={value} readOnly /> */}
        <Rating
          name="customized-10"
          defaultValue={4}
          max={5}
          readOnly
          className="!text-[18px] !mt-[10px]"
        />
        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[16px] font-[500]">
            $58.00
          </span>
          <span className="price text-[16px] font-[600] text-[#ff5252]">
            $50.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
