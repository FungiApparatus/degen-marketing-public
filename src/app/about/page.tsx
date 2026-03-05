"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            {/* Our Story Section */}
            <div className="relative w-full max-w-[1728px] mx-auto px-[206px] mt-[130px]">
                <p className="font-tomboy-lp-bold text-[80px] text-darkorange-200 leading-[1.4] relative z-10">
                    Our Story
                </p>

                {/* Mila illustration — top right */}
                <img
                    src="/About/Mila.svg"
                    alt=""
                    className="absolute top-[-40px] right-[230px] w-[320px] h-auto z-0"
                    draggable={false}
                />

                {/* Story intro */}
                <p className="text-[24px] tracking-[-0.24px] leading-normal mt-[40px] w-[646px] relative z-10">
                    For us at Degen, this isn&apos;t just about building an app.
                </p>

                {/* Story body with pink highlights */}
                <p className="text-[32px] tracking-[-0.32px] leading-normal mt-[20px] max-w-full relative z-10">
                    It&apos;s about shaping a new way people{" "}
                    <span className="text-[#ff67d4]">step out, connect, </span>
                    and <span className="text-[#ff67d4]">play </span>
                    in a city full of possibility.
                </p>

                {/* Italic question */}
                <p className="font-bold italic text-[20px] text-aliceblue tracking-[-0.25px] leading-[60px] mt-[60px] relative z-10">
                    What if discovering and joining experiences could be effortless, social, and genuinely fun?
                </p>

                {/* Body paragraphs */}
                <div className="mt-[30px] w-[1051px] max-w-full text-[24px] text-aliceblue tracking-[-0.24px] leading-[32px] relative z-10">
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
            <div className="relative w-full max-w-[1728px] mx-auto mt-[100px] flex justify-center gap-[40px] px-[50px]">
                {/* Built for the City */}
                <div className="flex flex-col items-center">
                    <img src="/About/Built-for-city-mice.svg" alt="" className="w-[150px] h-auto mb-[-100px] ml-[90px] z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[384px] h-[363px] flex flex-col items-center justify-center text-center text-white px-[26px]">
                        <p className="font-brisbane font-bold text-[36px] tracking-[-0.36px] leading-normal">
                            Built for the City
                        </p>
                        <p className="font-brisbane font-medium text-[24px] leading-[29px] mt-[16px] w-[332px]">
                            We design for real human connection and serendipity, not endless scrolling
                        </p>
                    </div>
                </div>

                {/* Connection over Consumption */}
                <div className="flex flex-col items-center">
                    <img src="/About/connection-mice.svg" alt="" className="w-[150px] h-auto mb-[-90px] ml-[-130px] relative z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[385px] h-[363px] flex flex-col items-center justify-center text-center text-white px-[26px]">
                        <p className="font-brisbane font-bold text-[36px] tracking-[-0.36px] leading-[42px]">
                            Connection over<br/>Consumption
                        </p>
                        <p className="font-brisbane font-medium text-[24px] leading-[29px] mt-[16px] w-[322px]">
                            Fast, social, and spontaneous for real places and real experiences
                        </p>
                    </div>
                </div>

                {/* Yes by Design */}
                <div className="flex flex-col items-center">
                    <img src="/About/yes-mice.svg" alt="" className="w-[200px] h-auto mb-[-60px] ml-[100px] relative z-10"/>
                    <div className="bg-[#ff7a1c] rounded-[300px] w-[384px] h-[363px] flex flex-col items-center justify-center text-center text-white px-[26px]">
                        <p className="font-brisbane font-bold text-[36px] tracking-[-0.36px] leading-normal">
                            Yes by Design
                        </p>
                        <p className="font-brisbane font-medium text-[24px] leading-[29px] mt-[16px] w-[362px]">
                            Our low friction design makes for fewer excuses to say yes to new connections and experiences
                        </p>
                    </div>
                </div>
            </div>

            {/* Contact Us Section */}
            <div id="contact" className="w-full max-w-[1728px] mx-auto px-[206px] mt-[120px]">
                <p className="font-tomboy-lp-bold text-[80px] text-darkorange-200 leading-[1.4]">
                    Contact Us
                </p>
            </div>

            <div className="relative w-full max-w-[1728px] mx-auto mt-[60px] flex justify-center mb-[100px]">
                <div className="bg-white rounded-[24px] w-[1008px] max-w-full px-[60px] py-[80px] relative overflow-hidden">
                    <p className="font-brisbane font-bold text-[40px] text-black leading-[1.4] text-center">
                        For general inquiries:
                    </p>
                    <p className="font-brisbane font-bold text-[40px] text-darkorange-200 leading-[1.4] text-center mt-[10px]">
                        <a href="mailto:info@degenstudiolab.com">info@degenstudiolab.com</a>
                    </p>

                    <p className="font-brisbane font-bold text-[40px] text-black leading-[1.4] text-center mt-[60px]">
                        For media and partnerships:
                    </p>
                    <p className="font-brisbane font-bold text-[40px] text-darkorange-200 leading-[1.4] text-center mt-[10px]">
                        <a href="mailto:press@degenstudiolab.com">press@degenstudiolab.com</a>
                    </p>

                    {/* Contact mice illustration */}
                    <img
                        src="/About/contact-mice.svg"
                        alt=""
                        className="absolute bottom-[20px] right-[30px] w-[160px] h-auto"
                    />
                </div>
            </div>

            <Footer className="!mt-0 w-full"/>
        </div>
    );
}
