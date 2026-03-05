"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsOfUsePage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            <div className="relative w-[1728px] h-[2453px] shrink-0">
                {/* Title */}
                <div
                    className="absolute top-[200px] left-[140px] text-[80px] leading-[140%] font-tomboy-lp-bold text-darkorange">
                    Terms of Use
                </div>

                {/* Effective Date */}
                <div className="absolute top-[345px] left-[163px] text-[28px] leading-[140%]">
                    <span>Effective: 02 March 2026. </span>
                    <span className="italic">Last revised: 02 March 2026.</span>
                </div>

                {/* Body Content */}
                <div className="absolute top-[427px] left-[163px] text-[28px] leading-[140%] w-[1409px]">
                    <p className="mb-0">
                        You may use the Degen site for lawful purposes only. You agree not to:
                    </p>
                    <ul className="list-disc ml-[42px] mt-6">
                        <li className="mb-2">
                            Violate any applicable laws or regulations
                        </li>
                        <li className="mb-2">
                            Infringe intellectual property rights
                        </li>
                        <li className="mb-2">
                            Interfere with the Site&#39;s operation or security
                        </li>
                        <li>
                            Attempt to gain unauthorized access to other accounts, systems, or networks
                        </li>
                    </ul>
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
