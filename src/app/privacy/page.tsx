"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
    return (
        <div
            className="w-full bg-gray-200 bg-grid min-h-screen overflow-x-hidden text-left text-[20px] text-white font-brisbane flex flex-col items-center">
            <Header/>

            <div className="w-full max-w-[1728px] mx-auto px-[clamp(24px,9.43vw,163px)] pt-[clamp(80px,11.57vw,200px)] pb-16">
                {/* Title */}
                <div
                    className="text-[clamp(36px,4.63vw,80px)] leading-[140%] font-tomboy-lp-bold text-darkorange">
                    Privacy Policy
                </div>

                {/* Effective Date */}
                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] mt-6">
                    <span>Effective: 02 March 2026. </span>
                    <span className="italic">Last revised: 02 March 2026.</span>
                </div>

                {/* Intro Content */}
                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] w-full md:w-[1409px] mt-6">
                    <p className="mb-6">
                        Welcome to Degen! Here we believe that privacy is intimate and we&#39;re committed to ensuring
                        it stays that way.
                    </p>
                    <p className="mb-6">
                        We are committed to protecting your privacy and ensuring the security of your personal
                        information. This Privacy Policy explains how we collect, use, share, and protect information
                        when you use our mobile application and web services (collectively, the
                        &#34;Services&#34;).
                    </p>
                    <p>
                        By using our Services, you agree to the collection and use of information in accordance with
                        this policy. If you do not agree with our policies and practices, please do not use our
                        Services.
                    </p>
                </div>

                {/* Data Collection and Usage Section */}
                <div
                    className="text-[clamp(28px,2.89vw,50px)] leading-[140%] font-tomboy-lp-bold mt-10">
                    Data Collection and Usage
                </div>

                <div className="text-[clamp(18px,1.62vw,28px)] leading-[140%] w-full md:w-[1409px] mt-6">
                    <p className="mb-6">
                        Not dissimilar to how poor decisions can be made without the right information, Degen
                        can&#39;t operate at its best to serve you without the active use of data. Data that is
                        collected ranges from provided your account information and usage data to automatic analytics
                        data and log data. Please refer to the full document for a full list of these metrics and
                        their definitions.
                    </p>
                    <p className="mb-6">
                        This data is used primarily to keep our services up to date and improve your user experience,
                        but it may also be used for legal compliance and marketing communications (with your consent,
                        of course!). This information may be shared with other users (e.g., your profile) or relevant
                        third parties (e.g., data storage, analytics). This is especially important when it comes to
                        protecting your data. We implement appropriate technical and organizational security measures
                        to protect your personal information against unauthorized access, alteration, disclosure, or
                        destruction. Your data is stored on secure servers provided by our trusted third-party service
                        providers.
                    </p>
                    <p>
                        We retain your personal information for as long as necessary to fulfill the purposes outlined
                        in this Privacy Policy, unless a longer retention period is required or permitted by law. When
                        you delete your account, we will delete or anonymize your personal information, except where
                        we are required to retain it for legal purposes.
                    </p>
                </div>

                {/* Governing Law Section */}
                <div
                    className="text-[clamp(28px,2.89vw,50px)] leading-[140%] font-tomboy-lp-bold mt-10">
                    Governing Law
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
