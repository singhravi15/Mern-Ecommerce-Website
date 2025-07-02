import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Line } from "react-icons/ri";
import { TfiAngleDown } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./categoryPanel";

const Nav = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);
  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(true);
  };
  return (
    <>
      <nav className="!py-2">
        <div className="container flex items-center justify-between gap-5 ">
          <div className="col_1 w-[20%]">
            <Button
              className="text-[15px] font-[500] !text-[#000] w-full rounded-full"
              onClick={openCategoryPanel}
            >
              {" "}
              <RiMenu2Line className="!text-[15px] !font-[500] !mr-[10px]" />
              Shop By Category
              <TfiAngleDown className="!text-[15px] !font-[500] !ml-[10px]" />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center justify-evenly navbar">
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Home
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Fashion
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Men
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to={"/"} className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Eletronics
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Bags
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Footwear
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Groceries
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Beauty
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Wellness
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/"}
                  className="link transition text-[14px] font-[500] "
                >
                  Jewellery
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-[13px] font-[500] flex items-center gap-2">
              {" "}
              <IoRocketOutline />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category Panel */}
      <CategoryPanel
        openCategoryPanel={openCategoryPanel}
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Nav;
