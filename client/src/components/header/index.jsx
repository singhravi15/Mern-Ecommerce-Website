import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import Search from "../search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { DiGitCompare } from "react-icons/di";
import Tooltip from "@mui/material/Tooltip";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import Nav from "./Nav";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip !py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[14px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>
            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header !py-4">
        <div className="container  flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link to={"/"}>
              <img src={Logo} />
            </Link>
          </div>
          <div className="col2 w-[45%]">
            <Search />
          </div>
          <div className="col3 w-[35%] flex items-center justify-end">
            <ul className="flex items-center gap-3">
              <li>
                <Link
                  to={"/login"}
                  className="link transition text-[14px] font-[500]"
                >
                  Login
                </Link>
                |{" "}
                <Link
                  to={"/register"}
                  className="link transition text-[14px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="Compare">
                    <StyledBadge badgeContent={4}>
                      <DiGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Whishlist">
                  <IconButton aria-label="Whishlist">
                    <StyledBadge badgeContent={4}>
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4}>
                      <FiShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
