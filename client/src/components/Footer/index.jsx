import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlineChangeCircle } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoMdGift } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Visa from "../../assets/visacard.png";
import Mastercard from "../../assets/master_card.png";
import AmericanExpress from "../../assets/american_express.png";
import Paypal from "../../assets/paypal.png";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="support">
      <div className="flex item-center justify-between">
        <div className="col1 flex items-center flex-col group">
          <div className="icon !mt-[40px]">
            <Link to="/">
              <LiaShippingFastSolid className="text-[60px] link group-hover:scale-110" />
            </Link>
          </div>
          <div className="info flex items-center flex-col !mt-[20px] !bg-white">
            <h3 className="text-[15px] font-[500]">Free Shipping</h3>
            <p className="text-[13px] !mt-[2px]">For all Orders Over $100</p>
          </div>
        </div>

        <div className="col1 flex items-center flex-col group">
          <div className="icon !mt-[40px]">
            <Link to="/">
              <MdOutlineChangeCircle className="text-[60px] link group-hover:scale-110" />
            </Link>
          </div>
          <div className="info flex items-center flex-col !mt-[20px] !bg-white">
            <h3 className="text-[15px] font-[500]">30 Days Returns</h3>
            <p className="text-[13px] !mt-[2px]">For an Exchange Product</p>
          </div>
        </div>
        <div className="col1 flex items-center flex-col group">
          <div className="icon !mt-[40px]">
            <Link to="/">
              <RiSecurePaymentLine className="text-[60px] link group-hover:scale-110" />
            </Link>
          </div>
          <div className="info flex items-center flex-col !mt-[20px] !bg-white">
            <h3 className="text-[15px] font-[500]">Secured Payment</h3>
            <p className="text-[13px] !mt-[2px]">Payment Cards Accepted</p>
          </div>
        </div>
        <div className="col1 flex items-center flex-col group">
          <div className="icon !mt-[40px]">
            <Link to="/">
              <IoMdGift className="text-[60px] link group-hover:scale-110" />
            </Link>
          </div>
          <div className="info flex items-center flex-col !mt-[20px] !bg-white">
            <h3 className="text-[15px] font-[500]">Special Gifts</h3>
            <p className="text-[13px] !mt-[2px]">Our First Product Order</p>
          </div>
        </div>
        <div className="col1 flex items-center flex-col group">
          <div className="icon !mt-[40px]">
            <Link to="/">
              <BiSupport className="text-[60px] link group-hover:scale-110" />
            </Link>
          </div>
          <div className="info flex items-center flex-col !mt-[20px] !bg-white">
            <h3 className="text-[15px] font-[500]">Support 24/7</h3>
            <p className="text-[13px] !mt-[2px]">Contact us Anytime</p>
          </div>
        </div>
      </div>

      <hr className="!mt-[70px] !mb-[70px]" />
      <div className="footer flex items-center justify-between">
        <div className="colu1">
          <h2 className="text-[20px] font-[500]">Contact us</h2>
          <p className="text-[14px] font-[300] !mt-[20px]">
            Classyshop - Mega Super Store <br /> 507-Union Trade Centre <br />{" "}
            France
          </p>
          <Link to={"/"} className="text-[15px] font-[400] link">
            <p className="!mt-[20px]">sales@yourcompany.com</p>
          </Link>
          <p className="text-[20px] font-[500] !mt-[20px] text-[#ff5252]">
            (+91) 7970381197
          </p>
        </div>
        <div className="colu2">
          <h2 className="text-[20px] font-[500]">Products</h2>
          <ul>
            <li className="list-none text-[14px] font-[300] link !mt-[20px]">
              Prices drop
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              New products
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Best sales
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Contact us
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Sitemap
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Stores
            </li>
          </ul>
        </div>
        <div className="colu3">
          <h2 className="text-[20px] font-[500]">Our company</h2>
          <ul>
            <li className="list-none text-[14px] font-[300] link !mt-[20px]">
              Delivery
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Legal Notice
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Terms and conditions of use
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              About us
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Secure payment
            </li>
            <li className="list-none text-[14px] font-[300] link !mt-[13px]">
              Login
            </li>
          </ul>
        </div>
        <div className="colu4">
          <h2 className="text-[20px] font-[500]">Subscribe to newsletter</h2>
          <p className="text-[14px] font-[300] !mt-[20px]">
            Subscribe to our latest newsletter to get <br /> news about special
            discounts.
          </p>
          <div className="form flex items-start flex-col !mt-[20px]">
            <input
              type="text"
              placeholder="Your Email Address"
              className="border-1 !px-5 !py-1 text-[14px] rounded-md"
            />
            <button className="text-[16px] font-[500] bg-[#ff5252] text-white border-1 !px-5 !py-1 rounded-md !mt-[10px]">
              Subscribe
            </button>
          </div>
          <p className="text-[14px] font-[300] !mt-[20px]">
            <span>
              <input
                type="checkbox"
                name=""
                id="chechbox"
                className="!mr-[5px]"
              />
            </span>
            I agree to the terms and conditions <br /> and the privacy policy
          </p>
        </div>
      </div>
      <div className="copyright flex items-center justify-between !py-2 !mt-[20px]">
        <div className="col1">
          <ul className=" flex items-center gap-2">
            <Link to={"/"} className="group">
              <li className="list-none h-[40px] w-[40px] rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#ff5252] transition-all">
                <RiFacebookCircleFill className="text-[20px] group-hover:text-white" />
              </li>
            </Link>
            <Link to={"/"} className="group">
              <li className="list-none h-[40px] w-[40px] rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#ff5252] transition-all">
                <IoLogoYoutube className="text-[20px] group-hover:text-white" />
              </li>
            </Link>
            <Link to={"/"} className="group">
              <li className="list-none h-[40px] w-[40px] rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#ff5252] transition-all">
                <RiInstagramFill className="text-[20px] group-hover:text-white" />
              </li>
            </Link>
            <Link to={"/"} className="group">
              <li className="list-none h-[40px] w-[40px] rounded-full border border-gray-300 flex items-center justify-center group-hover:bg-[#ff5252] transition-all">
                <FaXTwitter className="text-[20px] group-hover:text-white" />
              </li>
            </Link>
          </ul>
        </div>
        <div className="col2">
          <Link to={"/"}>
            <p className="link text-[15px] font-[500]">
              © 2025 - Ecommerce software by PrestaShop™
            </p>
          </Link>
        </div>
        <div className="col3 flex items-center gap-2">
          <Link to={"/"}>
            <img src={Visa} alt="Visa" srcset="" />
          </Link>
          <Link to={"/"}>
            <img src={Mastercard} alt="Mastercard" srcset="" />
          </Link>
          <Link to={"/"}>
            <img src={AmericanExpress} alt="American Express" srcset="" />
          </Link>
          <Link to={"/"}>
            <img src={Paypal} alt="Paypal" srcset="" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
