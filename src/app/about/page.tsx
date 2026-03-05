"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            {/* Our Story Section */}
            <div className="relative w-full max-w-[1728px] mx-auto px-[clamp(24px,11.92vw,206px)] mt-[clamp(80px,7.52vw,130px)]">
                <p className="font-tomboy-lp-bold text-[clamp(40px,4.63vw,80px)] text-darkorange-200 leading-[1.4] relative z-10">
                    Our Story
                </p>

                {/* Mila illustration */}
                <img
                    src="/About/Mila.png"
                    alt=""
                    className="hidden md:block absolute top-[-40px] right-[230px] w-[320px] h-auto z-0"
                    draggable={false}
                />

                {/* Story intro */}
                <p className="text-[clamp(18px,1.39vw,24px)] tracking-[-0.24px] leading-normal mt-[40px] w-full md:w-[646px] relative z-10">
                    For us at Degen, this isn&apos;t just about building an app.
                </p>

                {/* Story body */}
                <p className="text-[clamp(22px,1.85vw,32px)] tracking-[-0.32px] leading-normal mt-[20px] max-w-full relative z-10">
                    It&apos;s about shaping a new way people{" "}
                    <span className="text-[#ff67d4]">step out, connect, </span>
                    and <span className="text-[#ff67d4]">play </span>
                    in a city full of possibility.
                </p>

                <p className="font-bold italic text-[clamp(18px,1.16vw,20px)] text-aliceblue tracking-[-0.25px] leading-normal md:leading-[60px] mt-[clamp(40px,3.47vw,60px)] relative z-10">
                    What if discovering and joining experiences could be effortless, social, and genuinely fun?
                </p>

                <div className="mt-[30px] w-full md:w-[1051px] max-w-full text-[clamp(18px,1.39vw,24px)] text-aliceblue tracking-[-0.24px] leading-[clamp(28px,1.85vw,32px)] relative z-10">
                    <p className="mb-[32px]">
                        Degen explores this question through a new age technology that narrows in on what truly matters
                        in making the magic happen: chance.
                    </p>
                    <p>
                        By intentionally creating space for serendipity, we help people step out of their comfort zones,
                        discover what&apos;s happening around them, and connect in ways that feel real, effortless, and
                        alive.
                    </p>
                </div>
            </div>

            {/* Three Pillars Section */}
            <div className="relative w-full max-w-[1728px] mx-auto mt-[clamp(60px,5.79vw,100px)] flex flex-col md:flex-row items-center justify-center gap-[40px] px-[clamp(24px,2.89vw,50px)]">
                {/* Built for the City */}
                <div className="flex flex-col items-center">
                    <img src="/About/Built-for-city-mice.svg" alt="" className="w-[clamp(100px,8.68vw,150px)] h-auto mb-[clamp(-100px,-5.79vw,-60px)] ml-[clamp(60px,5.21vw,90px)] z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[clamp(280px,22.22vw,384px)] h-[clamp(280px,21vw,363px)] flex flex-col items-center justify-center text-center text-white px-[clamp(20px,1.50vw,26px)]">
                        <p className="font-brisbane font-bold text-[clamp(28px,2.08vw,36px)] tracking-[-0.36px] leading-normal">
                            Built for the City
                        </p>
                        <p className="font-brisbane font-medium text-[clamp(18px,1.39vw,24px)] leading-[clamp(24px,1.68vw,29px)] mt-[clamp(12px,0.93vw,16px)] w-[clamp(240px,19.21vw,332px)]">
                            We design for real human connection and serendipity, not endless scrolling
                        </p>
                    </div>
                </div>

                {/* Connection over Consumption */}
                <div className="flex flex-col items-center">
                    <img src="/About/connection-mice.svg" alt="" className="w-[clamp(100px,8.68vw,150px)] h-auto mb-[clamp(-90px,-5.21vw,-60px)] ml-[clamp(-130px,-7.52vw,-80px)] relative z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[clamp(280px,22.28vw,385px)] h-[clamp(280px,21vw,363px)] flex flex-col items-center justify-center text-center text-white px-[clamp(20px,1.50vw,26px)]">
                        <p className="font-brisbane font-bold text-[clamp(28px,2.08vw,36px)] tracking-[-0.36px] leading-[clamp(36px,2.43vw,42px)]">
                            Connection over<br/>Consumption
                        </p>
                        <p className="font-brisbane font-medium text-[clamp(18px,1.39vw,24px)] leading-[clamp(24px,1.68vw,29px)] mt-[clamp(12px,0.93vw,16px)] w-[clamp(240px,18.63vw,322px)]">
                            Fast, social, and spontaneous for real places and real experiences
                        </p>
                    </div>
                </div>

                {/* Yes by Design */}
                <div className="flex flex-col items-center">
                    <img src="/About/yes-mice.svg" alt="" className="w-[clamp(130px,11.57vw,200px)] h-auto mb-[clamp(-60px,-3.47vw,-40px)] ml-[clamp(60px,5.79vw,100px)] relative z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[clamp(280px,22.22vw,384px)] h-[clamp(280px,21vw,363px)] flex flex-col items-center justify-center text-center text-white px-[clamp(20px,1.50vw,26px)]">
                        <p className="font-brisbane font-bold text-[clamp(28px,2.08vw,36px)] tracking-[-0.36px] leading-normal">
                            Yes by Design
                        </p>
                        <p className="font-brisbane font-medium text-[clamp(18px,1.39vw,24px)] leading-[clamp(24px,1.68vw,29px)] mt-[clamp(12px,0.93vw,16px)] w-[clamp(240px,20.95vw,362px)]">
                            Our low friction design makes for fewer excuses to say yes to new connections and experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact" className="w-full max-w-[1728px] mx-auto px-[clamp(24px,11.92vw,206px)] mt-[clamp(60px,6.94vw,120px)]">
                <p className="font-tomboy-lp-bold text-[clamp(40px,4.63vw,80px)] text-darkorange-200 leading-[1.4]">
                    Contact Us
                </p>
            </div>

            <div className="relative w-full max-w-[1728px] mx-auto mt-[clamp(40px,3.47vw,60px)] flex justify-center mb-[clamp(60px,5.79vw,100px)] px-4 md:px-0">
                <div className="bg-white rounded-[24px] w-full md:w-[1008px] max-w-full px-[clamp(24px,3.47vw,60px)] py-[clamp(40px,4.63vw,80px)] relative overflow-hidden">
                    <p className="font-brisbane font-bold text-[clamp(20px,2.31vw,40px)] text-black leading-[1.4] text-center">
                        For general inquiries:
                    </p>
                    <p className="font-brisbane font-bold text-[clamp(20px,2.31vw,40px)] text-darkorange-200 leading-[1.4] text-center mt-[10px] break-all md:break-normal">
                        <a href="mailto:info@degenstudiolab.com">info@degenstudiolab.com</a>
                    </p>

                    <p className="font-brisbane font-bold text-[clamp(20px,2.31vw,40px)] text-black leading-[1.4] text-center mt-[clamp(30px,3.47vw,60px)]">
                        For media and partnerships:
                    </p>
                    <p className="font-brisbane font-bold text-[clamp(20px,2.31vw,40px)] text-darkorange-200 leading-[1.4] text-center mt-[10px] break-all md:break-normal">
                        <a href="mailto:press@degenstudiolab.com">press@degenstudiolab.com</a>
                    </p>

                    {/* Contact mice illustration */}
                    <img
                        src="/About/contact-mice.svg"
                        alt=""
                        className="hidden md:block absolute bottom-[20px] right-[30px] w-[160px] h-auto"
                    />
                </div>
            </div>

            <Footer className="!mt-0 w-full"/>
        </div>
    );
}
