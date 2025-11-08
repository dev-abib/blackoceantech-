import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gif from "../../../assets/img/timer.gif";

gsap.registerPlugin(ScrollTrigger);

const MinningFeatures = [
  "Large-Scale Mining Operations",
  "Data Center Co-Location Facilities",
  "Independent Mining Farms",
];

const Hero = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef(null);
  const frame = { maxIndex: 319 };


  useEffect(() => {
    const imgs = [];
    let loadedCount = 0;

    for (let i = 1; i <= frame.maxIndex; i++) {
      const path = new URL(
        `../../../assets/img/frames/frame_${i.toString().padStart(4, "0")}.png`,
        import.meta.url
      ).href;

      const img = new Image();
      img.src = path;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === frame.maxIndex) setIsLoaded(true);
      };
      imgs.push(img);
    }

    setImages(imgs);
  }, []);


  const drawFrame = index => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    if (!images[index]) return;

    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth;
    canvas.height = clientHeight;

    const img = images[index];
    const scale = Math.max(
      canvas.width / img.width,
      canvas.height / img.height
    );
    const x = canvas.width / 2 - (img.width / 2) * scale;
    const y = canvas.height / 2 - (img.height / 2) * scale;

    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useEffect(() => {
    // Disable scroll when loader is active
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoaded]);

  useEffect(() => {
    if (!images.length || !isLoaded) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        onUpdate: self => {
          const frameIndex = Math.round(self.progress * (frame.maxIndex - 1));
          drawFrame(frameIndex);
        },
      },
    });

    drawFrame(0);

    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        loaderRef.current.style.display = "none";
      },
    });

    return () => tl.scrollTrigger?.kill();
  }, [images, isLoaded]);


  return (
    <section
      id="hero"
      className="hero-section h-screen w-full relative overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ aspectRatio: "16/9", objectFit: "contain" }}
      />

      <div
        ref={loaderRef}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-9999"
      >
        <img
          src={gif}
          alt="loading..."
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] object-contain animate-pulse"
        />
      </div>

      <div className="absolute bg-black/30 inset-0 flex justify-center items-center w-full h-screen z-10">
        <div className="container flex mt-[30px] 3xl:mt-[150px] flex-col-reverse xl:flex-row gap-y-8 md:gap-y-10 xl:items-center w-full justify-between">
          <div className="flex flex-col gap-y-[252px]">
            <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-[150px]  items-start">
              <div className="flex flex-col gap-y-4 md:gap-y-6   ">
                <h2 className=" text-xl sm:text-[30px] md:text-[36px] xl:text-[48px] 2xl:text-[56px] font-[590] leading-[120%] text-white font-sf-pro max-w-[571px] ">
                  The First 100% U.S. Manufactured Bitcoin Mining Platform
                </h2>
                <p className="text-lg md:text-xl 3xl:text-2xl font-normal leading-[120%] md:leading-[150%] text-off-gray max-w-[449px]">
                  From patent-pending Dynamic Super balancing to hot-swappable
                  modular nodes, we deliver the technology that drives
                  profitable mining operations.
                </p>
              </div>
              <button className="primary-btn">Get a Free Consultation</button>
            </div>
          </div>

          <h2 className=" text-xl sm:text-[30px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[56px] font-[590] text-white leading-[120%] max-w-[650px] xl:max-w-[380px] 2xl:max-w-[578px]">
            Empower Your Mining Infrastructure with Enterprise-Grade Performance
            at Competitive Pricing.
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 h-auto w-full mb-8">
          <div className="container flex flex-row flex-wrap gap-y-2 justify-between">
            {MinningFeatures.map((minning, idx) => (
              <p key={idx} className="primary-heading">
                {minning}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
