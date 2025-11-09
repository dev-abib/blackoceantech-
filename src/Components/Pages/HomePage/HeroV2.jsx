import { useNavigate, useLocation } from "react-router-dom";
import hero_bg from "../../../assets/img/hero_bg.png";

const MinningFeatures = [
  "Large-Scale Mining Operations",
  "Data Center Co-Location Facilities",
  "Independent Mining Farms",
];

const HeroV2 = () => {
  const navigate = useNavigate();
  return (
    <section
      id="hero"
      style={{
        background: `
          linear-gradient(0deg,rgba(16, 16, 16, 0.69) 0%,rgba(16, 16, 16, 0.69) 100%),url(${hero_bg})
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-auto w-full pt-20 pb-0 lg:py-[150px] "
    >
      <div className="container flex flex-col gap-y-[60px] lg:gap-y-[125px]  ">
        <div className="flex  flex-col-reverse xl:flex-row gap-y-8 md:gap-y-10 xl:items-center w-full justify-between">
          <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-[185px] items-start">
            <div className="flex flex-col gap-y-4 md:gap-y-6">
              <h2 className="text-xl sm:text-[30px] md:text-[36px] xl:text-[48px] 2xl:text-[56px] font-[590] leading-[120%] text-white font-sf-pro max-w-[571px]">
                The First 100% U.S. Manufactured Bitcoin Mining Platform
              </h2>
              <p className="text-lg md:text-xl 3xl:text-2xl font-normal leading-[120%] md:leading-[150%] text-off-gray max-w-[449px]">
                From patent-pending Dynamic Super balancing to hot-swappable
                modular nodes, we deliver the technology that drives profitable
                mining operations.
              </p>
            </div>
            <button
              onClick={() => {
                navigate("/contact-us");
              }}
              className="primary-btn"
            >
              Get a Free Consultation
            </button>
          </div>
          <h2 className="text-xl sm:text-[30px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[56px] font-[590] text-white leading-[120%] max-w-[650px] xl:max-w-[380px] 2xl:max-w-[578px]">
            Empower Your Mining Infrastructure with Enterprise-Grade Performance
            at Competitive Pricing.
          </h2>
        </div>
        <div className="container flex flex-row flex-wrap gap-y-2 justify-between">
          {MinningFeatures.map((minning, idx) => (
            <p
              key={idx}
              className="text-sm md:text-base font-normal text-primary-gray leading-[150%]"
            >
              {minning}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroV2;
