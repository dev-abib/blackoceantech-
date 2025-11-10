import React from "react";
import logo_small from "../../../assets/logo-small.png";

const featureCards = [
  {
    title: "Zero Tariff Exposure",
    points: [
      "Scalable from 1 unit (104 TH/s) to 254 units (26.4 PH/s)",
      "ESP32 mesh network supports 1–254 nodes",
      "Distributed coordination eliminates single point of failure",
      "White-glove installation and configuration services",
      "24/7 U.S.-based technical support",
      "Custom power and cooling consultation available",
    ],
  },
  {
    title: "38% Lower Total Cost of Ownership",
    points: [
      "7-day domestic repair cycle vs. 90 days overseas",
      "99.9% uptime saves $260/PH annually vs. industry standard",
      "Dynamic Superbalancing maintains 93% uptime during chip failures",
    ],
  },
  {
    title: "Rapid Deployment & Support",
    points: [
      "Ships from U.S. facilities within days, not months",
      "24/7 technical support from American engineers",
      "Same-day parts availability for critical components",
      "On-site installation services available nationwide",
    ],
  },
  {
    title: "Patent-Pending Innovation",
    points: [
      "Dynamic Superbalancing: isolated DC-DC converters enable per-chip power control",
      "ESP32 Mesh Network: self-healing topology scales to 254 nodes",
      "Modular Architecture: hot-swap failed nodes in minutes without downtime",
      "Universal Backplane: switch algorithms without infrastructure changes",
    ],
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="pt-28 xl:pt-[150px] h-auto w-full  ">
      <div className="container flex flex-col gap-y-[50px] ">
        <div
          className="
        flex flex-col lg:flex-row w-full justify-between gap-y-10 lg:items-center"
        >
          <h2 className=" text-[42px] sm:text-[64px] xl:text-[80px] 2xl:text-[100px] 3xl:text-[136px] font-[590] text-[#FFFFFF66] leading-[120%] ">
            Why choose <br /> <span className="text-white">BLQCBuster</span>
          </h2>
          <p className="primary-heading max-w-[344px]! ">
            Having partners with years of expertise in ASIC design, power
            electronics, and enterprise-grade hardware engineering, BlockQuarry
            delivers innovation that directly benefits your bottom line.
          </p>
        </div>
        <div className="h-auto w-full rounded-4xl xl:rounded-[48px] p-6 xl:p-12 bg-secondary-black">
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-6 xl:gap-x-[122px] xl:gap-y-12 relative">
            {featureCards?.map((feature, idx) => (
              <div
                key={idx}
                className="2xl:py-8 xl:px-6 xl:py-6 px-8 py-8 2xl:px-12 rounded-[20px] xl:rounded-[48px]  bg-secondary-gray "
              >
                <div className="flex flex-col gap-y-3.5  max-w-[451px] w-full!    ">
                  <h4 className=" text-2xl xl:text-[36px] font-[510px]  text-secondary-white  font-sf-pro    ">
                    {" "}
                    {feature.title}{" "}
                  </h4>
                  <ul className="flex flex-col gap-y-1.5  ">
                    {feature.points.map((item, idx) => {
                      return (
                        <li
                          key={idx}
                          className="  text-sm xl:text-base font-normal list-disc text-secondary-off-gray     "
                        >
                          {" "}
                          {item}{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
            <div className="">
              <img
                src={logo_small}
                className=" hidden xl:block absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 max-w-[140px] lg:max-w-[99px] w-full max-h-[41px] lg:max-h-[85px] h-full object-cover"
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
