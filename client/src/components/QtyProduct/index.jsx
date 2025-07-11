import React, { useState } from "react";
import Button from "@mui/material/Button";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const QtyProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const plusQty = () => {
    setQuantity(quantity + 1);
  };
  const minusQty = () => {
    if (quantity === 1) {
      return;
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="qtyproduct flex items-center relative">
      <input
        type="number"
        name="quantity"
        id=""
        defaultValue={1}
        value={quantity}
        className="border border-gray-300 rounded-sm p-4 w-14 !min-w-[32px] !h-[30px] !px-2 !text-[12px] "
      />
      <div className="action flex items-center flex-col absolute top-0 right-0 !h-full !mt-1 !mr-1">
        <Button
          className="!w-[5px] !h-[10px] !min-w-[25px] !bg-white !text-black text-[16px]  hover:!bg-white"
          onClick={() => plusQty()}
        >
          <FaAngleUp />
        </Button>
        <Button
          className="!w-[5px] !h-[10px] !min-w-[25px] !bg-white !text-black text-[16px]  hover:!bg-white"
          onClick={() => minusQty()}
        >
          <FaAngleDown />
        </Button>
      </div>
    </div>
  );
};

export default QtyProduct;
