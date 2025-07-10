import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "./style.css"; // Import the CSS file for styling
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Collapse } from "react-collapse";

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const [isAvailableOpen, setIsAvailableOpen] = React.useState(true);

  return (
    <aside className="sidebar !py-2">
      <div className="box w-full h-full">
        <h3 className="text-[18px] font-[500] flex items-center justify-between">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !bg-white !text-black !rounded-full hover:!bg-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen === true ? (
              <FaAngleUp className="!text-[20px] !text-black" />
            ) : (
              <FaAngleDown className="!text-[20px] !text-black" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isOpen}>
          <div className="scroll !max-h-[200px] overflow-y-scroll overflow-x-hidden !p-2">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Eletronics"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Bags"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Footwear"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Groceries"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Beauty"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Wellness"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Jewellery"
              className="!w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box w-full h-full">
        <h3 className="text-[18px] font-[500] flex items-center justify-between">
          Availablity
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !bg-white !text-black !rounded-full hover:!bg-white"
            onClick={() => setIsAvailableOpen(!isAvailableOpen)}
          >
            {isAvailableOpen === true ? (
              <FaAngleUp className="!text-[20px] !text-black" />
            ) : (
              <FaAngleDown className="!text-[20px] !text-black" />
            )}
          </Button>
        </h3>
        <Collapse isOpened={isAvailableOpen}>
          <div className="scroll !max-h-[200px] overflow-y-scroll overflow-x-hidden !p-2">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock"
              className="!w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available"
            />
          </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
