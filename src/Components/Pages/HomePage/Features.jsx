import React from "react";
import rack from "../../../assets/img/rack.png";
import ssd_cooling from "../../../assets/img/ssd_cooling.png";
import open_rack from "../../../assets/img/open_rack.png";

const featuresArr = [
  {
    title: "BLQCBuster Standard Configuration",
    bgImg: rack,
    features: [
      "104 TH/s total hash rate per 2U enclosure",
      `2U rackmount form factor for standard 19" racks`,
      `ESP32 mesh network with self-healing topology`,
      `Dynamic Super balancing with isolated DC-DC converters`,
    ],
  },
  {
    title: "BLQCBuster Multi-Algorithm Platform",
    bgImg: ssd_cooling,
    features: [
      "Universal backplane supports SHA-256 and Script algorithms",
      "Hot-swap between Bitcoin and Litecoin mining",
      "Same power and cooling infrastructure across algorithms.",
      `Cryptocurrency-agnostic design for portfolio flexibility`,
      `Field-upgradable for future algorithm support`,
      `Maximize ROI by adapting to market conditions`,
    ],
  },
  {
    title: "Custom Enterprise Deployments",
    bgImg: open_rack,
    features: [
      "Scalable from 1 unit (104 TH/s) to 254 units (26.4 PH/s)",
      "ESP32 mesh network supports 1-254 nodes.",
      `Distributed coordination eliminates a single point of failure`,
      `White-glove installation and configuration services`,
      `24/7 U.S.-based technical support`,
      `Custom power and cooling consultation available`,
    ],
  },
];

const Features = () => {
  return (
    <section id="products" className="h-auto w-full pt-24 xl:pt-[150px] ">
      <div className="container flex flex-col gap-y-12 lg:gap-y-20 xl:gap-y-[150px] items-center">
        {featuresArr.map((feature, idx) => {
          return (
            <div
              key={idx}
              className={`flex w-full relative max-h-[639px] ${
                idx % 2 === 0
                  ? "flex-col-reverse lg:flex-row gap-y-4"
                  : "flex-col-reverse lg:flex-row-reverse gap-y-12"
              } justify-between items-center 
              gap-x-[40px] sm:gap-x-[64px] md:gap-x-[80px] lg:gap-x-[96px] xl:gap-x-[120px]`}
            >
              <div className="flex flex-1 flex-col gap-y-10 xl:gap-y-12 px-4">
                <h3 className="text-[30px] lg:text-[36px] xl:text-[42px] 2xl:text-[56px] text-white font-[590] leading-[120%] max-w-[545px]">
                  {feature.title}
                </h3>
                <ul className="flex flex-col gap-y-1.5">
                  {feature.features.map((item, fIdx) => (
                    <li
                      className="list-disc text-sm xl:text-base text-primary-gray!"
                      key={fIdx}
                    >
                      <p className="primary-heading">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <img
                src={feature.bgImg}
                alt={feature.title}
                className="flex-1 max-w-[300px] sm:max-w-[400px] xl:max-w-[500px] 2xl:max-w-[639px] max-h-[600px] 2xl:max-h-[639px] w-auto h-auto object-contain px-4"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
