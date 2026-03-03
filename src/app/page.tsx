"use client";

import {useEffect, useState} from "react";
import Image from "next/image";
import SplashScreen from "../components/SplashScreen";
import {motion, AnimatePresence} from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SPLASH_DONE_KEY = "splashDone";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);
  const [carouselPhase, setCarouselPhase] = useState<"zoomed" | "zooming-out" | "complete">("zoomed");
  const [showContent, setShowContent] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const t = window.setTimeout(() => {
      if (cancelled) return;

      let done = false;
      try {
        done = window.sessionStorage.getItem(SPLASH_DONE_KEY) === "1";
      } catch {
        done = false;
      }

      if (done) {
        // Skip splash screen and show content immediately
        setShowSplash(false);
        setShowContent(true);
        setCarouselPhase("complete");
      } else {
        setShowSplash(true);
      }
    }, 0);

    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, []);

  const handleSplashComplete = () => {
    try {
      window.sessionStorage.setItem(SPLASH_DONE_KEY, "1");
    } catch {
      // ignore
    }

    // Start fading in carousel immediately while splash is still zooming
    setCarouselVisible(true);

    // Start carousel zoom-out after fade begins
    setTimeout(() => {
      setCarouselPhase("zooming-out");
    }, 100);

    // Hide splash screen after zoom completes (3500ms)
    setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    // Start fading in content just before carousel animation completes
    setTimeout(() => {
      setShowContent(true);
    }, 3600);

    // Complete carousel animation (remove overlay after content is visible)
    setTimeout(() => {
      setCarouselPhase("complete");
    }, 4200);
  };




  return (
      <div className="relative min-h-screen bg-white">
        {showSplash && (
            <SplashScreen
                onDoneAction={handleSplashComplete}
                zoomMs={8000}
            />
        )}

        {/* Carousel Zoom Animation Overlay */}
        {carouselVisible && carouselPhase !== "complete" && (
            <div className="fixed inset-0 z-[9998] overflow-hidden flex items-center justify-center bg-white">
              <motion.div
                  className="w-full"
                  initial={{scale: 1.5}}
                  animate={{
                    scale: carouselPhase === "zooming-out" ? 1 : 2
                  }}
                  transition={{
                    scale: {
                      duration: 3.5,
                      ease: [0.33, 0, 0.2, 1]
                    }
                  }}
              >
                <img
                    className="w-full h-auto"
                    alt="Carousel"
                    src="/Carousel/full-image.svg"
                    style={{
                      display: 'block',
                    }}
                />
              </motion.div>
            </div>
        )}

        <motion.div
            className="w-full relative bg-black flex flex-col items-center text-left text-lg text-white font-brisbane"
            initial={{opacity: 0}}
            animate={{opacity: showContent ? 1 : 0}}
            transition={{duration: 0.6, ease: "easeInOut"}}
            style={{
              pointerEvents: showContent ? "auto" : "none",
            }}
            aria-hidden={!showContent}
        >
          {/* Background Dot */}
          <div className="absolute top-[136px] left-[1402px] rounded-[50%] bg-darkslategray-100 w-2.5 h-2.5 shrink-0"/>

          {/* Header */}
          <Header/>

          {/* Carousel Section */}
          <div className="relative w-full bg-white pb-[163px] shrink-0 cursor-[url('/Search.svg'),_auto]">
            <Image
                className="w-full h-auto"
                width={1728}
                height={790}
                sizes="100vw"
                alt="Carousel"
                src="/Carousel/full-image.svg"
                priority
            />
        </div>

          {/* Discover Section */}
          <div className="relative mt-[238px] w-[1625px] max-w-full h-[765px] shrink-0 text-[120px] group">
            <div className="absolute top-[0px] left-[875px] w-[750px] h-[765px]">
              {/* Runners */}
              <Image
                  className="absolute top-[30px] left-[0px] w-[342px] h-[228px] object-cover transition duration-500 ease-in-out delay-[500ms] group-hover:delay-[0ms] group-hover:scale-110"
                  width={342} height={228} alt="Runners"
                  src="/Discover Images/source/23RUNNING-CLUBS-01-zpvw-superJumbo.jpg"
                  priority
              />
              {/* Pottery */}
              <Image
                  className="absolute top-[100px] left-[260px] w-[300px] h-[180px] object-cover transition duration-500 ease-in-out delay-[400ms] group-hover:delay-[100ms] group-hover:scale-110"
                  width={300} height={180} alt="Pottery" src="/Discover Images/source/5I2A2238.png"
                  priority
            />
              {/* Skyline */}
              <Image
                  className="absolute top-[180px] left-[450px] w-[300px] h-[200px] object-cover transition duration-500 ease-in-out delay-[300ms] group-hover:delay-[200ms] group-hover:scale-110"
                  width={300} height={200} alt="Skyline"
                  src="/Discover Images/source/stephen-mcfadden-1JOsn6qk8w4-unsplash.jpg"
                  priority
              />
              {/* Yoga */}
              <Image
                  className="absolute top-[420px] left-[400px] w-[350px] h-[233px] object-cover transition duration-500 ease-in-out delay-[200ms] group-hover:delay-[300ms] group-hover:scale-110"
                  width={350} height={233} alt="Yoga" src="/Discover Images/source/Outdoor+Yoga.jpg"
              />
              {/* Food */}
              <Image
                  className="absolute top-[500px] left-[150px] w-[300px] h-[225px] object-cover transition duration-500 ease-in-out delay-[100ms] group-hover:delay-[400ms] group-hover:scale-110"
                  width={300} height={225} alt="Food" src="/Discover Images/source/elevate-snnhGYNqm44-unsplash.jpg"
              />
              {/* Ferris Wheel */}
              <Image
                  className="absolute top-[620px] left-[0px] w-[350px] h-[233px] object-cover transition duration-500 ease-in-out delay-[0ms] group-hover:delay-[500ms] group-hover:scale-110"
                  width={350} height={233} alt="Ferris Wheel" src="/Discover Images/source/1695342809258_1695342812.png"
              />
            </div>
            <div
                className="absolute top-[189.19px] left-[calc(50%_-_812.5px)] tracking-[-0.02em] leading-[115%] font-semibold">
              <div>At Degen, we are building a</div>
              <div>
                <span>better way to </span>
                <span className="text-darkorange-200">discover people</span>
              </div>
              <div>
                <span className="text-darkorange-200">and places</span>
                <span> around you.</span>
              </div>
            </div>
          </div>

          {/* Info Sheet / Sign Up Section */}
          <div className="relative mt-[300px] w-[1148px] max-w-full h-[850px] shrink-0 text-2xl font-satoshi">
            <div
                className="absolute top-[776px] left-[calc(50%_-_9px)] rounded-[20px] bg-darkorange-100 w-[200px] flex items-center justify-center py-5 px-2.5 box-border cursor-pointer">
              <b className="relative leading-[140%]">Sign Up</b>
            </div>

            <Image
                className="absolute top-[0px] left-[0px] w-[583.5px] h-[169px]"
                width={583.5}
                height={169}
                sizes="100vw"
                alt="Coming Soon"
                src="/Info Sheet/coming-soon.svg"
            />
          </div>

          {/* Tally Form */}
          <div className="relative w-full max-w-[1148px] mx-auto mt-[100px] mb-[100px]">
            <iframe
                data-tally-src="https://tally.so/embed/A7l0Ez?alignLeft=1&hideTitle=1&transparentBackground=1"
                loading="lazy"
                width="100%"
                height="517"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Lead generation form"
            />
          </div>

          {/* Footer */}
          <Footer/>
        </motion.div>
    </div>
  );
}