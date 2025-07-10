import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { MdOutlineCancelPresentation } from "react-icons/md";
import "./style.css"; // Assuming you have a CSS file for styles
import CategoryCollapse from "../../CategoryCollapse";

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
      <CategoryCollapse />
    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCategoryPanel}>{DrawerList}</Drawer>
    </>
  );
};

export default CategoryPanel;
