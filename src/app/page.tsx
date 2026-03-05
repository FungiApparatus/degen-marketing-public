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
  const signUpRef = useRef<HTMLDivElement>(null);
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formOptIn, setFormOptIn] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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
      <div className="relative min-h-screen bg-gray-200">
        {/* Splash Background Overlay — fades out independently */}
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

        {/* Splash Text — stays fully visible, smears to hero position */}
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
                        ? {scale: 0.62, x: "-19.7vw"}
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
          {/* Background Dot */}
          <div className="absolute top-[136px] left-[1402px] rounded-[50%] bg-darkslategray-100 w-2.5 h-2.5 shrink-0"/>

          {/* Header */}
          <Header/>

          {/* Hero Section — Splash Text + Carousel side by side */}
          <div className="relative w-full max-w-[1828px] mx-auto" style={{height: "1200px"}}>
            {/* Splash Text — left side, overlapping carousel white border only */}
            <img
                src="/Splash/full-image.svg"
                alt="Powering the Future of Adventure"
                className="absolute top-[220px] left-[100px] w-[577px] h-auto z-10 select-none pointer-events-none"
                draggable={false}
            />

            {/* Carousel Card — white rounded, fills right side */}
            <div className="absolute top-[100px] left-[35%] py-[80px] right-[3%] bg-white rounded-[24px] overflow-hidden mx-auto w-[1200px] max-w-full">
              <p className="absolute top-[10px] left-1/2 -translate-x-1/2 font-tomboy-lp-bold text-[50px] text-darkorange-200">
                Explore like a native
              </p>
              <img
                  className="w-full h-auto"
                  alt="Carousel"
                  src="/Carousel/full-image.svg"
              />
            </div>


          </div>

          {/* Discover Section */}
          <div className="relative w-[1625px] max-w-full shrink-0 group mt-[-400px]">
            {/* "Get Degen" heading — clickable, scrolls to sign up */}
            <button
                onClick={scrollToSignUp}
                className="font-tomboy-lp-bold text-[60px] text-white underline underline-offset-[12px] decoration-2 ml-[162px] mt-[40px] mb-[40px] pb-[4px] bg-transparent cursor-pointer leading-[1.4]"
            >
              Get Degen
            </button>

            {/* Photo collage — shifted right so rightmost aligns with video section */}
            <div className="relative w-full h-[1400px]">
              {/* Photo 1 — top left */}
              <div className="absolute top-[0px] left-[510px] w-[319px] h-[315px] overflow-hidden transition duration-500 ease-in-out delay-[500ms] group-hover:delay-[0ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-1.jpg"
                    sizes="319px"
                />
              </div>

              {/* Photo 2 — top center */}
              <div className="absolute top-[92px] left-[850px] w-[311px] h-[309px] overflow-hidden transition duration-500 ease-in-out delay-[400ms] group-hover:delay-[100ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-2.png"
                    sizes="311px"
                />
              </div>

              {/* Photo 3 — top right */}
              <div className="absolute top-[197px] left-[1180px] w-[338px] h-[333px] overflow-hidden transition duration-500 ease-in-out delay-[300ms] group-hover:delay-[200ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-3.png"
                    sizes="338px"
                />
              </div>

              {/* Big centered text */}
              <div className="absolute top-[548px] left-0 right-100 text-center z-10">
                <p className="font-tomboy-lp-bold text-[120px] capitalize leading-[1.1] tracking-[1.2px]">
                  <span className="text-white">Find what Moves You. </span>
                </p>
                <p className="font-tomboy-lp-bold text-[120px] capitalize leading-[1.1] tracking-[1.2px] text-darkorange-200">
                  We&apos;ll Meet You There.
                </p>
              </div>

              {/* Photo 4 — mid right */}
              <div className="absolute top-[560px] left-[1080px] w-[412px] h-[354px] overflow-hidden transition duration-500 ease-in-out delay-[200ms] group-hover:delay-[300ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-4.png"
                    sizes="412px"
                />
              </div>

              {/* Photo 5 — bottom center */}
              <div className="absolute top-[920px] left-[900px] w-[378px] h-[344px] overflow-hidden transition duration-500 ease-in-out delay-[100ms] group-hover:delay-[400ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-5.jpg"
                    sizes="378px"
                />
              </div>

              {/* Photo 6 — bottom left */}
              <div className="absolute top-[1050px] left-[600px] w-[345px] h-[333px] overflow-hidden transition duration-500 ease-in-out delay-[0ms] group-hover:delay-[500ms] group-hover:scale-110">
                <Image
                    className="object-cover"
                    fill
                    alt="Event photo"
                    src="/Discover Images/event-photo-6.png"
                    sizes="345px"
                />
              </div>
            </div>
          </div>

          {/* Where Places Meet People Section */}
          <div className="relative w-full bg-gray-200 py-[80px] mt-[80px]" style={{minHeight: '997px'}}>
            <div className="max-w-[1728px] mx-auto px-[165px] flex items-start gap-[60px]">
              {/* Text content — left side */}
              <div className="flex-1">
                <p className="font-tomboy-lp-bold text-[70px] text-white leading-[1.4] mb-[40px]">
                  <span>Where </span>
                  <span className="text-deepskyblue">Places Meet People</span>
                </p>

                <p className="font-brisbane font-bold text-[35px] text-white leading-[1.4] mb-[30px]">
                  From Event Discovery to Social Connection
                </p>

                <p className="font-brisbane font-bold text-[45px] text-deepskyblue leading-[1.4] mb-[20px]">
                  Degen helps you stay in sync when it matters most.
                </p>

                <p className="font-brisbane italic text-[30px] text-white leading-[1.4]">
                  Quickly and seamlessly tap into popular events and communities near you.
                </p>
              </div>

              {/* Video — right side */}
              <div className="shrink-0 w-[400px]">
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
          <div ref={signUpRef} className="relative w-full flex flex-col items-center mt-[200px]  ">
            <Image
                className="mb-[40px] mr-[700px]"
                width={583.5}
                height={169}
                sizes="100vw"
                alt="Coming Soon"
                src="/Info Sheet/coming-soon.svg"
            />

            <div className="relative bg-aliceblue border-3 border-solid border-deepskyblue rounded-[80px] w-[966px] max-w-full px-[60px] py-[50px]" style={{minHeight: '517px'}}>
              <p className="font-brisbane font-semibold text-[24px] text-gray-100 leading-[1.4] tracking-[-0.24px] mb-[60px]">
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
              <div className="flex items-center gap-[16px] mb-[20px] cursor-pointer" onClick={() => setFormOptIn(!formOptIn)}>
                <div className={`w-[36px] h-[36px] shrink-0 border-2 border-solid border-gray-100 rounded-[10px] flex items-center justify-center ${formOptIn ? "bg-darkorange-100" : "bg-aliceblue"}`}>
                  {formOptIn && <span className="text-white text-[20px] leading-none">✓</span>}
                </div>
                <p className="font-brisbane font-medium text-[20px] text-gray-100 tracking-[-0.2px] select-none">
                  Yes, I would like to sign up for the latest Degen Updates
                </p>
              </div>

              {/* Privacy notice */}
              <p className="font-brisbane text-[16px] text-gray-300 tracking-[-0.16px] leading-[1.4]">
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

          {/* Footer */}
          <Footer/>
        </motion.div>
      </div>
  );
}
