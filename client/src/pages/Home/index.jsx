import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import Van from "../../assets/van.svg";
import AdsBanner from "../../components/AdsBanner";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />
      <section className="bg-white !py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>
            <div className="rightSec w-[60%]">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 750 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Eletronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>
          <ProductsSlider items={5} />
        </div>
      </section>

      <section className="!py-5 bg-white">
        <div className="container">
          <div className="freeshiping w-[80%] !m-auto !p-4 border-2 border-[#ff5252] flex items-center justify-between !mb-5">
            <div className="col1 flex items-center">
              <img src={Van} alt="" srcset="" className="" />
              <span className="!ml-[10px] text-[22px] font-[600]">
                FREE SHIPPING
              </span>
            </div>
            <div className="col2 !mb-0 font-[500]">
              <p>Free Delivery Now On Your First Order and over $200</p>
            </div>
            <div className="col3">
              <p className="font-bold text-[30px]">- Only $200*</p>
            </div>
          </div>
          <AdsBanner items={3} />
        </div>
      </section>

      <section className="!py-4 !pt-0 bg-white">
        <div className="container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={5} />

          <AdsBanner items={3} />
        </div>
      </section>

      <section className="!py-4 bg-white">
        <div className="container">
          <Blogs />
        </div>
      </section>
      <section className=" bg-white">
        <div className="container">
          <Footer />
        </div>
      </section>
    </div>
  );
};

export default Home;
