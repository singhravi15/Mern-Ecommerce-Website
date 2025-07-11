import React, { useState } from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyProduct from "../../components/QtyProduct";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoMdGitCompare } from "react-icons/io";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState(0);
  return (
    <>
      <div className="container !py-4">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/" className="link">
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link"
          >
            Product
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
            className="link"
          >
            Women Cotton Casual shut
          </Link>
        </Breadcrumbs>
      </div>
      <section className="bg-white !py-4">
        <div className="container flex gap-8">
          <div className="productzoomcontainer !w-[30%]  overflow-hidden">
            <ProductZoom />
          </div>
          <div className="productContent !w-[70%]  overflow-hidden">
            <h1 className="text-[25px] font-[600] !mb-2 !pr-10">
              Siril Poly Silk White & Beige Color Saree With Blouse Piece |
              sarees for Women| saree | sarees
            </h1>
            <span className="text-[15px] opacity-70">
              Brands :{" "}
              <span className="font-[600] !mr-2">House of Chikankari</span>
            </span>
            <Rating
              name="customized-10"
              defaultValue={4}
              max={5}
              readOnly
              className="!text-[15px]"
            />
            <span className="text-[14px] !ml-2 cursor-pointer">Rating (5)</span>

            <div className="flex items-center gap-4 !mt-2">
              <span className="oldPrice line-through text-gray-500 text-[18px] font-[500]">
                $58.00
              </span>
              <span className="price text-[18px] font-[600] text-[#ff5252]">
                $50.00
              </span>
            </div>
            <span className="text-[14px] opacity-70 !mt-2">
              Available In Stock:{" "}
              <span className="text-[14px] font-bold text-green-600">
                234 Items
              </span>
            </span>
            <p className="text-[14px] opacity-70 !mt-2 !line-height-[3] !pr-10 !mb-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-[15px] opacity-70 font-[600]">Size :</span>
              <Button
                className={`!min-w-[40px] !h-[35px] !border-1 !border-[rgba(0,0,0,0.1)] ${
                  productActionIndex === 0 ? "!bg-[#ff5252] !text-white" : ""
                }`}
                onClick={() => setProductActionIndex(0)}
              >
                S
              </Button>
              <Button
                className={`!min-w-[40px] !h-[35px] !border-1 !border-[rgba(0,0,0,0.1)] ${
                  productActionIndex === 1 ? "!bg-[#ff5252] !text-white" : ""
                }`}
                onClick={() => setProductActionIndex(1)}
              >
                M
              </Button>
              <Button
                className={`!min-w-[40px] !h-[35px] !border-1 !border-[rgba(0,0,0,0.1)] ${
                  productActionIndex === 2 ? "!bg-[#ff5252] !text-white" : ""
                }`}
                onClick={() => setProductActionIndex(2)}
              >
                L
              </Button>
              <Button
                className={`!min-w-[40px] !h-[35px] !border-1 !border-[rgba(0,0,0,0.1)] ${
                  productActionIndex === 3 ? "!bg-[#ff5252] !text-white" : ""
                }`}
                onClick={() => setProductActionIndex(3)}
              >
                Xl
              </Button>
              <Button
                className={`!min-w-[40px] !h-[35px] !border-1 !border-[rgba(0,0,0,0.1)] ${
                  productActionIndex === 4 ? "!bg-[#ff5252] !text-white" : ""
                }`}
                onClick={() => setProductActionIndex(4)}
              >
                Xxl
              </Button>
            </div>

            <p className="text-[13px] opacity-70 !mt-4">
              Free Shipping (Est. Delivery Time 2-3 Days)
            </p>
            <div className="flex items-center gap-2 !mt-2">
              <div className="qtywrapper">
                <QtyProduct />
              </div>
              <button className="text-[16px] font-[500] bg-[#ff5252] text-white border-1 !px-5 !py-1 rounded-md flex items-center gap-2 cursor-pointer">
                <span>
                  <IoCartOutline />
                </span>{" "}
                Add to Cart
              </button>
            </div>
            <div className="flex items-center gap-4 !mt-2 ">
              <span className="text-[14px] font-[500] cursor-pointer flex items-center gap-2 link">
                {" "}
                <span>
                  <FaRegHeart className="text-[16px]" />
                </span>{" "}
                Add to Wishlist
              </span>
              <span className="text-[14px] font-[500] cursor-pointer flex items-center gap-2 link">
                {" "}
                <span>
                  <IoMdGitCompare className="text-[16px]" />
                </span>{" "}
                Add to Compare
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
