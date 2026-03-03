"use client";

import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div
            className="w-full bg-gray-200 min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            <div className="relative w-[1728px] h-[2450px] shrink-0">
                {/* Hero Section */}
                <div
                    className="absolute top-[200px] left-[140px] text-[50px] leading-[140%] font-tomboy-lp-bold text-darkorange whitespace-pre-wrap shrink-0">
                    {`From Tap to Together  `}
                </div>
                <div className="absolute top-[270px] left-[140px] text-[36px] leading-[140%] shrink-0">
                    Degen helps you stay in sync when it matters most.
                </div>

                {/* Feature List Section */}
                <div className="absolute top-[420px] left-[140px] w-[654px] h-[78px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] text-num-24 leading-[140%] font-medium">
                        Event Discovery to Social Connection
                    </div>
                    <div className="absolute top-[50px] left-[0px] text-[20px] leading-[140%]">
                        Quickly and seamlessly tap into popular nearby events and communities.
                    </div>
                </div>

                <div className="absolute top-[538px] left-[140px] w-[638px] h-[78px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] text-num-24 leading-[140%] font-medium">
                        Redefining Attendance
                    </div>
                    <div className="absolute top-[50px] left-[0px] text-[20px] leading-[140%]">
                        Transform any event into an opportunity for active social engagement.
                    </div>
                </div>

                <div className="absolute top-[656px] left-[140px] w-[557px] h-[78px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] text-num-24 leading-[140%] font-medium">
                        AI-Powered Curation
                    </div>
                    <div className="absolute top-[50px] left-[0px] text-[20px] leading-[140%]">
                        Personalized recommendations make choosing events simple.
                    </div>
                </div>

                <div className="absolute top-[774px] left-[140px] w-[707px] h-[78px] shrink-0">
                    <div className="absolute top-[0px] left-[0px] text-num-24 leading-[140%] font-medium">
                        Creator-Led Discovery
                    </div>
                    <div className="absolute top-[50px] left-[0px] text-[20px] leading-[140%]">
                        Trusted communities turn noisy event feeds into a premium, social experience.
                    </div>
                </div>

                {/* iPhone Image */}
                <Image
                    className="absolute top-[160px] left-[1163px] w-[405px] h-[820px] object-cover shrink-0"
                    width={405}
                    height={820}
                    sizes="100vw"
                    alt="Degen Interface on iPhone"
                    src="/About/source/iPhone 16 Pro Max.png"
                    priority
                />

                {/* Mood Board Section */}
                <div
                    className="absolute top-[980px] left-[calc(50%_-_300px)] text-[50px] leading-[140%] font-tomboy-lp-bold text-darkorange whitespace-pre-wrap shrink-0">
                    What are you in the mood for?
                </div>
                <div className="absolute top-[1000px] left-[calc(50%_-_400px)] w-[800px] flex justify-center py-16">
                    <Image
                        className="object-contain"
                        width={800}
                        height={400}
                        sizes="100vw"
                        alt="Mood Board"
                        src="/About/mood_board.webp"
                    />
                </div>

                {/* Features Cards Section */}
                <div className="absolute top-[1650px] left-[228px] w-[1272px] h-[191.5px] shrink-0">
                    <div className="absolute top-[5px] left-[0px] w-[342px] h-[152.5px]">
                        <div
                            className="absolute top-[84.5px] left-[13px] text-[24px] leading-[140%] inline-block w-[329px]">
                            Allowing you to focus on what matters most: being present.
                        </div>
                        <Image
                            className="absolute top-[0px] left-[0px] w-[165.5px] h-[54.5px]"
                            width={165.5}
                            height={54.5}
                            sizes="100vw"
                            alt="Intuitive icon background"
                            src="/About/intuitive.svg"
                        />
                        <div
                            className="absolute top-[4.5px] left-[13px] text-[36px] leading-[140%] font-medium text-gray-100">
                            Intuitive
                        </div>
                    </div>

                    <div className="absolute top-[0px] left-[463.5px] w-[343.5px] h-[191.5px]">
                        <div
                            className="absolute top-[89.5px] left-[14.5px] text-[24px] leading-[140%] inline-block w-[329px]">
                            Equipped with the latest in adaptive algorithms and next-gen matching technology.
                        </div>
                        <Image
                            className="absolute top-[0px] left-[0px] w-[198.5px] h-[69.5px]"
                            width={198.5}
                            height={69.5}
                            sizes="100vw"
                            alt="Optimized icon background"
                            src="/About/optimized.svg"
                        />
                        <div
                            className="absolute top-[9.5px] left-[14.5px] text-[36px] leading-[140%] font-medium text-gray-100">
                            Optimized
                        </div>
                    </div>

                    <div className="absolute top-[3.5px] left-[924.5px] w-[347.5px] h-[188px]">
                        <div
                            className="absolute top-[86px] left-[18.5px] text-[24px] leading-[140%] inline-block w-[329px]">
                            Built in security features that ensures both you and your data are always protected.
                        </div>
                        <Image
                            className="absolute top-[0px] left-[0px] w-[147px] h-[58px]"
                            width={147}
                            height={58}
                            sizes="100vw"
                            alt="Secure icon background"
                            src="/About/secure.svg"
                        />
                        <div
                            className="absolute top-[6px] left-[18.5px] text-[36px] leading-[140%] font-medium text-gray-100">
                            Secure
                        </div>
                    </div>
                </div>

                {/* Big Text Section */}
                <div
                    className="absolute top-[1971.5px] left-[calc(50%_-_704px)] text-[140px] tracking-[0.01em] leading-[110%] font-tomboy-lp-bold text-center shrink-0">
                    <span className="capitalize">{`Unlock `}</span>
                    <span className="lowercase">the</span>
                    <span className="capitalize">{` joy `}</span>
                    <span className="lowercase">o</span>
                    <span className="capitalize">{`f `}</span>
                    <br/>
                    <span className="capitalize">{`discovery `}</span>
                    <span className="lowercase">and</span>
                    <span className="capitalize"> community</span>
                    <br/>
                    <span className="capitalize">anywhere!</span>
                </div>
            </div>

            <Footer className="!mt-0 w-full"/>
        </div>
    );
}
