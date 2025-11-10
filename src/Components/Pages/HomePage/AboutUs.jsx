import logo_light from "../../../assets/img/logo-white.png";

const AboutUs = () => {
  return (
    <section id="about-us" className=" h-auto w-full pt-28 xl:pt-[200px]  ">
      <div className="container flex flex-col-reverse 2xl:flex-col gap-y-4 lg:gap-y-[72px] items-start ">
        <p className=" text-xl 2xl:text-2xl font-[510] leading-[150%] text-secondary-white max-w-[720px] ">
          Empowering miners with reliable, high-performance hardware —
          delivering 104 TH/s per unit, zero tariff exposure, and 38% lower TCO
          for modern Bitcoin mining operations.
        </p>

        <div className="flex flex-col gap-y-6 2xl:gap-y-10 2xl:flex-row w-full justify-between ">
          <div className="flex flex-col-reverse 2xl:flex-col gap-y-10 md:gap-y-[60px] 2xl:gap-y-[127px] ">
            <h4 className=" text-[46px] md:text-[50px] 2xl:text-[56px] font-[590] leading-[120%] text-white ">
              About BlockQuarry Co.
            </h4>
            <img
              src={logo_light}
              alt="not found"
              className="  max-w-[140px] lg:max-w-[194px] max-h-[120px] lg:max-h-[165.536px] object-cover h-full w-full  "
            />
          </div>
          <div className="flex flex-col gap-y-6  ">
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              BlockQuarry Co. (OTC: $BLQC) is revolutionizing Bitcoin mining
              with the BLQCBuster — the first fully U.S.-manufactured mining
              platform designed to eliminate the costly challenges facing
              today's operations.
            </p>
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              Founded on the principle that miners deserve better, we've
              engineered a solution to the industry's biggest pain points:
              crippling import tariffs, extended overseas repair cycles, and
              catastrophic single-chip failures. Our patent-pending architecture
              delivers 104 TH/s per 2U unit through 8 hot-swappable 13TH nodes
              with isolated power management.
            </p>
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              We're not just building miners — we're building the infrastructure
              for American energy independence and Bitcoin network security.
              Every BLQCBuster is designed, manufactured, and supported entirely
              within the United States. This ensures rapid deployment, reliable
              support, and competitive pricing at approximately $31 per TH/s —
              on par with leading imported alternatives but without the tariff
              burden.
            </p>
            <p className="text-base font-normal leading-[150%] text-secondary-off-gray 2xl:max-w-[732px] ">
              With 100% domestic manufacturing, we eliminate the 21.6%-57.6%
              import duties that burden traditional miners while providing 7-day
              repair turnaround versus the industry standard 90 days. Our
              innovative Dynamic Superbalancing technology automatically
              isolates failed chips and redistributes power to healthy
              components, maintaining 93% uptime even during failures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
