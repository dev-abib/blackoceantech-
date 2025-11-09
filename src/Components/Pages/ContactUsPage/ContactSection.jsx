import React from "react";
import { Dots } from "../../SvgContainer/SvgContainer";

const ContactSection = () => {
  return (
    <section className="h-auto w-full pt-[120px] pb-20 lg:py-[150px]  ">
      <div className="container flex flex-col gap-y-10 items-center 2xl:flex-row w-full justify-between ">
        <div className="relative h-auto flex justify-start items-start">
          <h2 className=" relative  text-[42px] sm:text-[64px] xl:text-[80px] 2xl:text-[100px] 3xl:text-[136px] font-[590] text-[#FFFFFF66] leading-[120%]  ">
            Contact <br className="hidden 2xl:block" />{" "}
            <span className="text-white">with</span> Us.
          </h2>
          <div className="absolute bottom-0 right-0 mb-[-120px]   ">
            <Dots />
          </div>
        </div>
        <form className="flex flex-col gap-y-8 w-full max-w-[563px] ">
          <div className="flex flex-col gap-y-4 ">
            <input
              type="text"
              placeholder="Name"
              className="border text-base p-4 lg:p-6 font-[590px] text-primary-gray  border-solid border-[#323232]  outline-none rounded-2xl "
            />
            <input
              type="email"
              placeholder="Email"
              className="border text-base p-4 lg:p-6 font-[590px] text-primary-gray  border-solid border-[#323232]  outline-none rounded-2xl "
            />
            <input
              type="text"
              placeholder="Phone"
              className="border text-base p-4 lg:p-6 font-[590px] text-primary-gray  border-solid border-[#323232]  outline-none rounded-2xl "
            />
            <textarea
              className="border min-h-[220px]! h-full! text-base p-4 lg:p-6 font-[590px] text-primary-gray  border-solid border-[#323232]  outline-none rounded-2xl "
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="primary-btn"> Submit </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
