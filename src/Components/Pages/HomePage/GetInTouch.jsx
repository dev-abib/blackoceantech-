import React from "react";
import logo_small from "../../../assets/logo-small.png";
import { useNavigate } from "react-router-dom";

const GetInTouch = () => {
  const navigate = useNavigate();
  return (
    <section
      id="contact-us"
      className="h-auto w-full pt-28 xl:pt-[200px] pb-20 xl:pb-[150px] "
    >
      <div className="container w-full relative flex md:flex-col flex-col-reverse gap-y-8 md:gap-y-12  xl:gap-y-20 2xl:gap-y-[150px] md:items-end ">
        <div className="flex w-full flex-col gap-y-10 md:flex-row md:items-center justify-between ">
          <div className="flex flex-col gap-y-10 md:gap-y-[75px] items-start ">
            <p className="primary-heading max-w-[408px]! ">
              Looking to upgrade your storage infrastructure? Our specialists
              can help you design the perfect setup for speed, efficiency, and
              scalability.
            </p>
            <button
              onClick={() => {
                navigate("/contact-us");
              }}
              className="primary-btn"
            >
              Connect with Us
            </button>
          </div>
          <img
            src={logo_small}
            className=" max-w-[120px] lg:max-w-[194px] w-full max-h-[120px] lg:max-h-[165px] h-full object-cover"
            alt="not found"
          />
        </div>
        <h2 className=" text-[42px] xl:text-[100px] 2xl:text-[136px] font-[590] leading-[120%] text-white ">
          Get in Touch
        </h2>
      </div>
    </section>
  );
};

export default GetInTouch;
