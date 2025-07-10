import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";
import { LuCircleMinus } from "react-icons/lu";

const CategoryCollapse = () => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (subMenuIndex === index) {
      setSubMenuIndex(null);
    } else {
      setSubMenuIndex(index);
    }
  };
  const openInnerSubmenu = (index) => {
    if (innerSubMenuIndex === index) {
      setInnerSubMenuIndex(null);
    } else {
      setInnerSubMenuIndex(index);
    }
  };
  return (
    <>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 0 ? (
              <LuCircleMinus
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <IoIosAddCircleOutline
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="submenu w-full absolute top-[100%] left-[0%] !pl-3">
                <li className="list-none flex items-center relative">
                  <Link to={"/"} className="w-full">
                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                      Men
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <LuCircleMinus
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <IoIosAddCircleOutline
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="inner-submenu w-full absolute top-[100%] left-[0%] !pl-3">
                      <li className="list-none flex items-center relative ">
                        <Link
                          to={"/"}
                          className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                        >
                          Shirt
                        </Link>
                      </li>
                      <li className="list-none flex items-center relative">
                        <Link
                          to={"/"}
                          className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] link"
                        >
                          Jeans
                        </Link>
                      </li>
                      <li className="list-none flex items-center relative">
                        <Link
                          to={"/"}
                          className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] link"
                        >
                          Formal Shirt
                        </Link>
                      </li>
                      <li className="list-none flex items-center relative">
                        <Link
                          to={"/"}
                          className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] link"
                        >
                          Trouser
                        </Link>
                      </li>
                      <li className="list-none flex items-center relative">
                        <Link
                          to={"/"}
                          className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)] link"
                        >
                          Winter Wear
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryCollapse;
