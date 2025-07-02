import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { MdOutlineCancelPresentation } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";

const CategoryPanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCategoryPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="text-[16px] font-[500] flex items-center justify-between !py-2 !px-2">
        Shop By Category{" "}
        <MdOutlineCancelPresentation
          className="text-[16px] font-[500] cursor-pointer"
          onClick={toggleDrawer(false)}
        />
      </h3>
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative">
            <Link to={"/"} className="w-full">
              <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                Fashion
              </Button>
            </Link>
            <IoIosAddCircleOutline className="absolute top-[10px] right-[15px]" />
            <ul className="submenu w-full absolute top-[100%] left-[0%] !pl-3">
              <li className="list-none flex items-center relative">
                <Link to={"/"} className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                    Fashion
                  </Button>
                </Link>
                <IoIosAddCircleOutline className="absolute top-[10px] right-[15px]" />
                <ul className="submenu w-full absolute top-[100%] left-[0%] !pl-3">
                  <li className="list-none flex items-center relative">
                    <Link
                      to={"/"}
                      className=" w-full !link transition  !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]"
                    >
                      Fashion
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCategoryPanel}>{DrawerList}</Drawer>
    </>
  );
};

export default CategoryPanel;
