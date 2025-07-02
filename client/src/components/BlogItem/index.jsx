import React from "react";
import BlogImage from "../../assets/blogimg.jpg";
import { MdOutlineAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";

const BlogItem = () => {
  return (
    <div className="overflow-hidden">
      <div className="group relative">
        <img
          src={BlogImage}
          alt=""
          className="rounded-lg transatin-all group-hover:scale-105"
        />
        <span className="absolute bottom-[15px] right-[15px] bg-[#ff5252] flex items-center gap-2 !p-1 text-[white] text-[12px]">
          <MdOutlineAccessTime className="text-[15px]" />
          23 april
        </span>
      </div>
      <div className="info rounded-lg !p-5">
        <Link to={"/"}>
          <h3 className="text-[16px] font-[500] link">
            Nullam ullamcorper ornare molestie
          </h3>
        </Link>
        <p className="text-[13px] !mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
          corporis, expedita harum eaque, ducimus officia esse distinctio alias
          impedit minima id nam vitae nulla rerum!
        </p>
        <Link
          to={"/"}
          className="link text-[13px] font-[600] underline flex items-center !mt-[10px]"
        >
          Read More <FaAngleRight className="text-[13px]" />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
