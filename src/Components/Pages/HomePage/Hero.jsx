import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gif from "../../../assets/img/timer.gif";
import { useLocation } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const loaderRef = useRef(null);
  const frame = { maxIndex: 319 };
  const location = useLocation();
  const resizeObserverRef = useRef(null);

  useEffect(() => {
    const imgs = [];
    let loadedCount = 0;
    const threshold = Math.floor(frame.maxIndex * 0.15); // start after 15%

    for (let i = 1; i <= frame.maxIndex; i++) {
      const path = new URL(
        `../../../assets/img/frames/frame_${i.toString().padStart(4, "0")}.png`,
        import.meta.url
      ).href;

      const img = new Image();
      img.src = path;


      img
        .decode()
        .then(() => {
          loadedCount++;
          // Start animation early once 15% loaded
          if (loadedCount === threshold) setIsLoaded(true);
        })
        .catch(() => {
          loadedCount++;
          if (loadedCount === threshold) setIsLoaded(true);
        });

      imgs.push(img);
    }
    setImages(imgs);
  }, []);

  const drawFrame = index => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const context = canvas.getContext("2d");
    const { clientWidth, clientHeight } = canvas;


    if (
      canvas.width !== clientWidth * window.devicePixelRatio ||
      canvas.height !== clientHeight * window.devicePixelRatio
    ) {
      canvas.width = clientWidth * window.devicePixelRatio;
      canvas.height = clientHeight * window.devicePixelRatio;
      context.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    const img = images[index];
    const scale = Math.max(clientWidth / img.width, clientHeight / img.height);
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;
    const x = (clientWidth - scaledWidth) / 2;
    const y = (clientHeight - scaledHeight) / 2;

    context.clearRect(0, 0, clientWidth, clientHeight);
    context.drawImage(img, x, y, scaledWidth, scaledHeight);
  };


  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => drawFrame(0);
    resizeObserverRef.current = new ResizeObserver(handleResize);
    resizeObserverRef.current.observe(canvas);
    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserverRef.current?.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  useEffect(() => {
    document.body.style.overflow = isLoaded ? "auto" : "hidden";
    document.documentElement.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflowX = "";
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
      if (tl?.scrollTrigger) tl.scrollTrigger.kill(true);
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
    <section className="hero-section h-screen w-full relative overflow-hidden bg-black">
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
          className="w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
