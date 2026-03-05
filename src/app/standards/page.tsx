"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StandardsPage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            <div className="w-full max-w-[1728px] mx-auto px-[clamp(24px,9.43vw,163px)] pt-[clamp(80px,11.57vw,200px)] pb-16">
                {/* Title */}
                <div
                    className="text-[clamp(36px,4.63vw,80px)] leading-[140%] font-tomboy-lp-bold text-darkorange">
                    Degen Standards
                </div>

                {/* Effective Date */}
                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] mt-6">
                    <span>Effective: 02 March 2026. </span>
                    <span className="italic">Last revised: 02 March 2026.</span>
                </div>

                {/* Introduction */}
                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] w-full md:w-[1409px] mt-6">
                    INTRODUCTION
                </div>

                {/* User Responsibilities Section */}
                <div
                    className="text-[clamp(28px,2.89vw,50px)] leading-[140%] font-tomboy-lp-bold mt-10">
                    User Responsibilities
                </div>

                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] w-full md:w-[1409px] mt-6">
                    SOMETHING
                </div>

                {/* Reporting Section */}
                <div
                    className="text-[clamp(28px,2.89vw,50px)] leading-[140%] font-tomboy-lp-bold mt-10">
                    Reporting
                </div>

                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] w-full md:w-[1409px] mt-6">
                    SOMETHING
                </div>

                {/* Bottom Acknowledgment */}
                <div
                    className="text-[clamp(18px,1.74vw,30px)] leading-[140%] font-tomboy-lp-bold text-center w-full md:w-[1225px] mx-auto mt-16">
                    By using the Degen platform and participating in events, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms &amp; Conditions.
                </div>
            </div>

            <Footer className="!mt-0 w-full"/>
        </div>
    );
}
