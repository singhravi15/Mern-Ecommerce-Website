import React from "react";
import Sidebar from "../../components/Sidebar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import Button from "@mui/material/Button";
import { IoGrid } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

const ProductListning = () => {
  const [itemView, setItemView] = React.useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="!py-1 !pb-0">
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
            Fashion
          </Link>
        </Breadcrumbs>
      </div>
      <div className="bg-white !p-2">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>
          <div className="rightcontext !w-[80%] !py-3">
            <div className="bg-[#f1f1f1] !p-2 !w-full rounded-md flex items-center justify-between">
              <div className="col1 flex items-center gap-1 ItemView">
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full ${
                    itemView === "list" && "active"
                  }`}
                  onClick={() => setItemView("list")}
                >
                  <IoMenu />
                </Button>
                <Button
                  className={`!w-[40px] !h-[40px] !min-w-[40px] !text-black !rounded-full ${
                    itemView === "grid" && "active"
                  }`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGrid />
                </Button>
                <span className="text-[14px] font-[500] text-[rgba(0,0,0,0.7)] !pl-3">
                  There are 27 products.
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-3 !pr-4">
                <span className="text-[14px] font-[500] text-[rgba(0,0,0,0.7)] !pl-3">
                  Sort By
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="!bg-white !text-black !capitalize !border-1 !border-[#000]"
                >
                  Relevance
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    Sales, highest to lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    {" "}
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    Name, Price, low to high
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="!text-black !capitalize text-[13px]"
                  >
                    Price, high to low
                  </MenuItem>
                </Menu>
              </div>
            </div>
            <div
              className={`grid ${
                itemView === "grid"
                  ? "grid-cols-4 md:grid-cols-4"
                  : "grid-cols-1 md:grid-cols-1"
              } gap-4 `}
            >
              {itemView === "grid" ? (
                <>
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                  <ProductItem />
                </>
              ) : (
                <>
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                  <ProductItemListView />
                </>
              )}
            </div>
            <div className="flex items-center justify-center !mt-4">
              <Pagination count={10} variant="outlined" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListning;
