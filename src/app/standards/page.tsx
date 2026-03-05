"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StandardsPage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            <div className="relative w-[1728px] h-[2453px] shrink-0">
                {/* Title */}
                <div
                    className="absolute top-[200px] left-[140px] text-[80px] leading-[140%] font-tomboy-lp-bold text-darkorange">
                    Degen Standards
                </div>

                {/* Effective Date */}
                <div className="absolute top-[345px] left-[163px] text-[28px] leading-[140%]">
                    <span>Effective: 02 March 2026. </span>
                    <span className="italic">Last revised: 02 March 2026.</span>
                </div>

                {/* Introduction */}
                <div className="absolute top-[427px] left-[163px] text-[28px] leading-[140%] w-[1409px]">
                    INTRODUCTION
                </div>

                {/* User Responsibilities Section */}
                <div
                    className="absolute top-[636px] left-[163px] text-[50px] leading-[140%] font-tomboy-lp-bold">
                    User Responsibilities
                </div>

                <div className="absolute top-[753px] left-[163px] text-[28px] leading-[140%] w-[1409px]">
                    SOMETHING
                </div>

                {/* Reporting Section */}
                <div
                    className="absolute top-[854px] left-[163px] text-[50px] leading-[140%] font-tomboy-lp-bold">
                    Reporting
                </div>

                <div className="absolute top-[969px] left-[163px] text-[28px] leading-[140%] w-[1409px]">
                    SOMETHING
                </div>

                {/* Bottom Acknowledgment */}
                <div
                    className="absolute top-[2342px] left-1/2 -translate-x-1/2 text-[30px] leading-[140%] font-tomboy-lp-bold text-center w-[1225px]">
                    By using the Degen platform and participating in events, you acknowledge that you have read,
                    understood, and agree to be bound by these Terms &amp; Conditions.
                </div>
            </div>

            <Footer className="!mt-0 w-full"/>
        </div>
    );
}
