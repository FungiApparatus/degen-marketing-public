"use client";

import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {submitEmail} from "@/lib/appwrite";

const SPLASH_DONE_KEY = "splashDone";

export default function Home() {
  const [splashPhase, setSplashPhase] = useState<"waiting" | "visible" | "holding" | "animating" | "done">("waiting");
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const signUpRef = useRef<HTMLDivElement>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formOptIn, setFormOptIn] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    let done = false;
    try {
      done = window.sessionStorage.getItem(SPLASH_DONE_KEY) === "1";
    } catch {
      done = false;
    }

    if (done) {
      setSplashPhase("done");
      setShowContent(true);
    } else {
      setSplashPhase("visible");
    }
  }, []);

  const handleSplashClick = () => {
    if (splashPhase !== "visible") return;

    try {
      window.sessionStorage.setItem(SPLASH_DONE_KEY, "1");
    } catch {}

    // Brief hold then move — feels immediate
    setSplashPhase("holding");

    setTimeout(() => {
      setSplashPhase("animating");
    }, 400);

    setTimeout(() => {
      setShowContent(true);
    }, 1600);

    setTimeout(() => {
      setSplashPhase("done");
    }, 2400);
  };

  const scrollToSignUp = () => {
    signUpRef.current?.scrollIntoView({behavior: "smooth"});
  };

  const handleSignUp = async () => {
    if (!formName.trim() || !formEmail.trim()) return;
    setFormStatus("submitting");
    try {
      await submitEmail({name: formName, email: formEmail, optIn: formOptIn});
      setFormStatus("success");
      setFormName("");
      setFormEmail("");
      setFormOptIn(false);
    } catch {
      setFormStatus("error");
    }
  };

  return (
      <div className="relative min-h-screen w-full bg-gray-200 bg-grid overflow-x-hidden">

        {splashPhase !== "done" && (
            <motion.div
                className="fixed inset-0 z-[9998] bg-gray-200 bg-grid pointer-events-none"
                animate={{
                  opacity: splashPhase === "animating" ? 0 : splashPhase === "waiting" ? 0 : 1,
                }}
                transition={{
                  opacity: {
                    duration: splashPhase === "animating" ? 1.8 : 1,
                    ease: [0.33, 0, 0.2, 1],
                  },
                }}
            />
        )}

        {/* Splash Text */}
        {splashPhase !== "done" && (
            <motion.div
                className="fixed inset-0 z-[9999] flex items-center justify-center cursor-pointer"
                onClick={handleSplashClick}
                role="button"
                tabIndex={0}
                aria-label="Enter site"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") handleSplashClick();
                }}
                style={{pointerEvents: splashPhase === "visible" ? "auto" : "none"}}
                animate={{
                  opacity: splashPhase === "waiting" ? 0 : 1,
                }}
                transition={{
                  opacity: {duration: 1, ease: [0.33, 0, 0.2, 1]},
                }}
            >
              <motion.img
                  src="/Splash/full-image.svg"
                  alt="Powering the Future of Adventure"
                  className="select-none"
                  draggable={false}
                  style={{width: "80vw", maxHeight: "80vh", objectFit: "contain"}}
                  animate={
                    splashPhase === "animating"
                        ? isMobile
                            ? {opacity: 0, scale: 1, x: 0}
                            : {scale: 0.62, x: "-29.7vw"}
                        : {scale: 1, x: 0, y: 0}
                  }
                  transition={{
                    duration: 1.8,
                    ease: [0.7, 0, 0.3, 1],
                  }}
              />
            </motion.div>
        )}

        {/* Main Content */}
        <motion.div
            className="w-full relative bg-gray-200 bg-grid flex flex-col items-center text-left text-lg text-white font-brisbane"
            initial={{opacity: 0}}
            animate={{opacity: showContent ? 1 : 0}}
            transition={{duration: 0.6, ease: "easeInOut"}}
            style={{pointerEvents: showContent ? "auto" : "none"}}
            aria-hidden={!showContent}
        >

          <Header/>

          {/* Hero splash text */}
          <div className="hidden md:flex absolute top-0 left-0 right-0 h-screen items-center justify-center pointer-events-none z-10">
            <img
                src="/Splash/full-image.svg"
                alt="Powering the Future of Adventure"
                className="select-none"
                draggable={false}
                style={{width: "80vw", maxHeight: "80vh", objectFit: "contain", transform: "translateX(-29.7vw) scale(0.62)"}}
            />
          </div>

          {/* Hero Carousel */}
          <div className="relative w-full max-w-[1828px] mx-auto flex flex-col md:block h-auto md:h-[1200px] px-4 md:px-0">

            <div className="static md:absolute md:top-[100px] md:left-[35%] py-[clamp(40px,4.63vw,80px)] md:right-[3%] bg-white rounded-[24px] overflow-hidden mx-auto w-full md:w-[1200px] max-w-full mt-[60px] md:mt-0">
              <p className="relative md:absolute top-0 md:top-[10px] left-0 md:left-1/2 md:-translate-x-1/2 text-center font-tomboy-lp-bold text-[clamp(28px,2.89vw,50px)] text-darkorange-200 px-4 md:px-0 mb-4 md:mb-0">
                Explore like a native
              </p>
              <img
                  className="w-full h-auto "
                  alt="Carousel"
                  src="/Carousel/full-image.png"
                  style={{cursor: "url('/Search.svg') 16 16, pointer"}}
              />
            </div>


          </div>

          {/* Discover Section */}
          <div className="relative w-full md:w-[1625px] max-w-full shrink-0 group mt-0 md:mt-[-400px]">
            {/* "Get Degen" heading  */}
            <button
                onClick={scrollToSignUp}
                className="font-tomboy-lp-bold text-[clamp(32px,3.47vw,60px)] text-white underline underline-offset-[clamp(8px,0.69vw,12px)] decoration-2 ml-[clamp(20px,9.38vw,162px)] mt-[40px] mb-[clamp(20px,2.31vw,40px)] pb-[4px] bg-transparent cursor-pointer leading-[1.4]"
            >
              Get Degen
            </button>

            {/* Photo collage  */}
            <div className="grid grid-cols-2 gap-3 px-4 md:p-0 md:block md:relative md:w-full md:h-[1400px]">
              {/* Photo 1 — top left */}
              <div className="relative md:absolute md:top-[0px] md:left-[510px] w-full md:w-[319px] aspect-square md:aspect-auto md:h-[315px] overflow-hidden transition duration-500 ease-in-out delay-[500ms] group-hover:delay-[0ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-1.jpg"
                    sizes="(max-width: 768px) 50vw, 319px"
                />
              </div>

              {/* Photo 2 — top center */}
              <div className="relative md:absolute md:top-[92px] md:left-[850px] w-full md:w-[311px] aspect-square md:aspect-auto md:h-[309px] overflow-hidden transition duration-500 ease-in-out delay-[400ms] group-hover:delay-[100ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-2.png"
                    sizes="(max-width: 768px) 50vw, 311px"
                />
              </div>

              {/* Photo 3 — top right */}
              <div className="relative md:absolute md:top-[197px] md:left-[1180px] w-full md:w-[338px] aspect-square md:aspect-auto md:h-[333px] overflow-hidden transition duration-500 ease-in-out delay-[300ms] group-hover:delay-[200ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-3.png"
                    sizes="(max-width: 768px) 50vw, 338px"
                />
              </div>

              {/* Big centered text */}
              <div className="col-span-2 md:absolute md:top-[548px] md:left-0 md:right-100 text-center z-10 py-6 md:py-0">
                <p className="font-tomboy-lp-bold text-[clamp(36px,6.94vw,120px)] capitalize leading-[1.1] tracking-[1.2px]">
                  <span className="text-white">Find what Moves You. </span>
                </p>
                <p className="font-tomboy-lp-bold text-[clamp(36px,6.94vw,120px)] capitalize leading-[1.1] tracking-[1.2px] text-darkorange-200">
                  We&apos;ll Meet You There.
                </p>
              </div>

              {/* Photo 4 — mid right */}
              <div className="relative md:absolute md:top-[560px] md:left-[1080px] w-full md:w-[412px] aspect-square md:aspect-auto md:h-[354px] overflow-hidden transition duration-500 ease-in-out delay-[200ms] group-hover:delay-[300ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-4.png"
                    sizes="(max-width: 768px) 50vw, 412px"
                />
              </div>

              {/* Photo 5 — bottom center */}
              <div className="relative md:absolute md:top-[920px] md:left-[900px] w-full md:w-[378px] aspect-square md:aspect-auto md:h-[344px] overflow-hidden transition duration-500 ease-in-out delay-[100ms] group-hover:delay-[400ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-5.jpg"
                    sizes="(max-width: 768px) 50vw, 378px"
                />
              </div>

              {/* Photo 6 — bottom left */}
              <div className="relative md:absolute md:top-[1050px] md:left-[600px] w-full md:w-[345px] aspect-square md:aspect-auto md:h-[333px] overflow-hidden transition duration-500 ease-in-out delay-[0ms] group-hover:delay-[500ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-6.png"
                    sizes="(max-width: 768px) 50vw, 345px"
                />
              </div>
            </div>
          </div>

          {/* Where Places Meet People Section */}
          <div className="relative w-full bg-gray-200 py-[clamp(40px,4.63vw,80px)] mt-[clamp(40px,4.63vw,80px)] min-h-0 md:min-h-[997px]">
            <div className="max-w-[1728px] mx-auto px-[clamp(24px,9.55vw,165px)] flex flex-col md:flex-row items-start gap-[clamp(32px,3.47vw,60px)]">
              {/* Text content — left side */}
              <div className="flex-1">
                <p className="font-tomboy-lp-bold text-[clamp(32px,4.05vw,70px)] text-white leading-[1.4] mb-[clamp(20px,2.31vw,40px)]">
                  <span>Where </span>
                  <span className="text-deepskyblue">Places Meet People</span>
                </p>

                <p className="font-brisbane font-bold text-[clamp(20px,2.03vw,35px)] text-white leading-[1.4] mb-[clamp(16px,1.74vw,30px)]">
                  From Event Discovery to Social Connection
                </p>

                <p className="font-brisbane font-bold text-[clamp(24px,2.60vw,45px)] text-deepskyblue leading-[1.4] mb-[clamp(12px,1.16vw,20px)]">
                  Degen helps you stay in sync when it matters most.
                </p>

                <p className="font-brisbane italic text-[clamp(18px,1.74vw,30px)] text-white leading-[1.4]">
                  Quickly and seamlessly tap into popular events and communities near you.
                </p>
              </div>

              {/* Video — right side */}
              <div className="shrink-0 w-full md:w-[400px]">
                <video
                    className="w-full h-auto rounded-[24px]"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                  <source src="/Iphone_capture.mov" type="video/quicktime"/>
                </video>
              </div>
            </div>
          </div>

          {/* Mood Board Section */}
          <div className="relative w-full flex flex-col items-center ">
            <p className="font-brisbane text-[60px] text-center leading-[1.15] tracking-[-1.2px] ">

            </p>
            <Image
                className="object-contain w-full h-auto"
                width={2023}
                height={1528}
                sizes="100vw"
                alt="Mood Board"
                src="/About/mood_board.png"
            />
          </div>

          {/* Info Sheet / Sign Up Section */}
          <div ref={signUpRef} className="relative w-full flex flex-col items-center mt-[clamp(80px,11.57vw,200px)] px-4 md:px-0">
            <Image
                className="mb-[40px] mr-0 md:mr-[700px] w-[280px] md:w-auto"
                width={583.5}
                height={169}
                sizes="100vw"
                alt="Coming Soon"
                src="/Info Sheet/coming-soon.svg"
            />

            <div className="relative bg-aliceblue border-3 border-solid border-deepskyblue rounded-[clamp(30px,4.63vw,80px)] w-full md:w-[966px] max-w-full px-[clamp(24px,3.47vw,60px)] py-[clamp(32px,2.89vw,50px)] min-h-0 md:min-h-[517px]">
              <p className="font-brisbane font-semibold text-[clamp(18px,1.39vw,24px)] text-gray-100 leading-[1.4] tracking-[-0.24px] mb-[clamp(30px,3.47vw,60px)]">
                Be the first—sign up for early access and get a first look when we launch.
              </p>

              {/* Name input */}
              <div className="border-b border-solid border-darkslategray-200 flex items-center p-[16px] w-full mb-[20px]">
                <input
                    type="text"
                    placeholder="Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="font-brisbane text-[18px] text-gray-100 bg-transparent outline-none w-full placeholder:text-silver"
                />
              </div>

              {/* Email input */}
              <div className="border-b border-solid border-darkslategray-200 flex items-center p-[16px] w-full mb-[30px]">
                <input
                    type="email"
                    placeholder="Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="font-brisbane text-[18px] text-gray-100 bg-transparent outline-none w-full placeholder:text-silver"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-3 md:gap-[16px] mb-[20px] cursor-pointer" onClick={() => setFormOptIn(!formOptIn)}>
                <div className={`w-[36px] h-[36px] shrink-0 border-2 border-solid border-gray-100 rounded-[10px] flex items-center justify-center ${formOptIn ? "bg-darkorange-100" : "bg-aliceblue"}`}>
                  {formOptIn && <span className="text-white text-[20px] leading-none">✓</span>}
                </div>
                <p className="font-brisbane font-medium text-[clamp(16px,1.16vw,20px)] text-gray-100 tracking-[-0.2px] select-none">
                  Yes, I would like to sign up for the latest Degen Updates
                </p>
              </div>

              {/* Privacy notice */}
              <p className="font-brisbane text-[clamp(14px,0.93vw,16px)] text-gray-300 tracking-[-0.16px] leading-[1.4]">
                <span>For information about our privacy practices and commitment to protecting your privacy, check out our </span>
                <Link href="/privacy" className="underline text-gray-300">Privacy Policy</Link>
                <span>.</span>
              </p>
            </div>

            {/* Sign Up button */}
            <button
                onClick={handleSignUp}
                disabled={formStatus === "submitting"}
                className="mt-[40px] rounded-[20px] bg-darkorange-100 w-[200px] flex items-center justify-center py-5 px-2.5 cursor-pointer border-none disabled:opacity-50"
            >
              <b className="font-satoshi text-[24px] text-white leading-[1.4]">
                {formStatus === "submitting" ? "Sending..." : formStatus === "success" ? "Signed Up!" : "Sign Up"}
              </b>
            </button>
            {formStatus === "error" && (
                <p className="mt-[12px] font-brisbane text-[16px] text-red-500">
                  Something went wrong. Please try again.
                </p>
            )}
          </div>

          <Footer/>
        </motion.div>
      </div>
  );
}
