import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gif from "../../../assets/img/timer.gif";
import { useNavigate, useLocation } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();
  const resizeObserverRef = useRef(null);

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
    if (!images[index] || !canvas) return;
    const { clientWidth, clientHeight } = canvas;
    canvas.width = clientWidth * window.devicePixelRatio; // For high-DPI crispness
    canvas.height = clientHeight * window.devicePixelRatio;
    context.scale(window.devicePixelRatio, window.devicePixelRatio); // Scale context to match
    const img = images[index];
    // Use Math.max for "cover" scaling to fill the canvas fully (crop if needed)
    const scale = Math.max(clientWidth / img.width, clientHeight / img.height);
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;
    const x = (clientWidth - scaledWidth) / 2;
    const y = (clientHeight - scaledHeight) / 2;
    context.clearRect(0, 0, clientWidth, clientHeight);
    context.drawImage(img, x, y, scaledWidth, scaledHeight);
  };

  // Handle resize to ensure canvas always fills available space
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isLoaded) return;

    const handleResize = () => {
      drawFrame(0); // Redraw initial frame on resize
    };

    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(canvas);

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, [isLoaded]);

  useEffect(() => {
    // Prevent horizontal overflow globally during load and after
    if (!isLoaded) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowX = "hidden";
    } else {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflowX = "hidden"; // Keep x hidden to prevent any scrollbars
    }
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflowX = ""; // Reset on unmount
    };
  }, [isLoaded]);

  useLayoutEffect(() => {
    if (!images.length || !isLoaded) return;
    ScrollTrigger.getAll().forEach(st => st.kill(true));
    document.querySelectorAll(".pin-spacer").forEach(el => el.remove());
    let tl;
    const ctx = gsap.context(() => {
      tl = gsap.timeline({
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
      if (loaderRef.current) {
        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          onComplete: () => {
            if (loaderRef.current) loaderRef.current.style.display = "none";
          },
        });
      }
    });
    const clear = () => {
      if (tl && tl.scrollTrigger) {
        tl.scrollTrigger.kill(true);
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
      document.querySelectorAll(".pin-spacer").forEach(el => el.remove());
      ctx.revert();
      gsap.killTweensOf("*");
    };
    const stopTriggers = () => {
      clear();
      window.removeEventListener("beforeunload", stopTriggers);
    };
    window.addEventListener("beforeunload", stopTriggers);
    return clear;
  }, [images, isLoaded, location.pathname]);

  return (
    <section
      id="hero"
      className="hero-section h-screen w-full relative overflow-hidden bg-black"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover" 
        style={{ width: "100%", height: "100%" }} 
      />
      <div
        ref={loaderRef}
        className="fixed inset-0 bg-black flex flex-col items-center justify-center z-9999"
      >
        <img
          src={gif}
          alt="loading..."
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] object-contain "
        />
      </div>
      <div className="absolute bg-black/30 inset-0 flex justify-center items-center w-full h-screen z-10">
        <div className="container flex mt-[30px] 3xl:mt-[150px] flex-col-reverse xl:flex-row gap-y-8 md:gap-y-10 xl:items-center w-full justify-between">
          <div className="flex flex-col gap-y-[252px]">
            <div className="flex flex-col gap-y-12 md:gap-y-20 2xl:gap-y-[150px] items-start">
              <div className="flex flex-col gap-y-4 md:gap-y-6">
                <h2 className="text-xl sm:text-[30px] md:text-[36px] xl:text-[48px] 2xl:text-[56px] font-[590] leading-[120%] text-white font-sf-pro max-w-[571px]">
                  The First 100% U.S. Manufactured Bitcoin Mining Platform
                </h2>
                <p className="text-lg md:text-xl 3xl:text-2xl font-normal leading-[120%] md:leading-[150%] text-off-gray max-w-[449px]">
                  From patent-pending Dynamic Super balancing to hot-swappable
                  modular nodes, we deliver the technology that drives
                  profitable mining operations.
                </p>
              </div>
              <button
                onClick={() => navigate("/contact-us")}
                className="primary-btn"
              >
                Get a Free Consultation
              </button>
            </div>
          </div>
          <h2 className="text-xl sm:text-[30px] md:text-[36px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[56px] font-[590] text-white leading-[120%] max-w-[650px] xl:max-w-[380px] 2xl:max-w-[578px]">
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
