"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";
import type {JSX} from "react";

export interface FooterProps {
    className?: string;
}

export default function Footer({className}: FooterProps): JSX.Element {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogoClick = (e: React.MouseEvent) => {
        e.preventDefault();

        if (pathname === "/") {
            window.scrollTo({top: 0, left: 0, behavior: "smooth"});
            return;
        }

        router.push("/");
    };

    return (
        <div
            className={`relative mb-[20px] w-full px-[clamp(16px,2.31vw,40px)] box-border h-auto md:h-[200px] shrink-0 text-base flex flex-col gap-6 md:block py-8 md:py-0 ${className || ""}`}>
            <Link href="/" onClick={handleLogoClick}>
                <div className="static md:absolute md:bottom-[147px] md:left-10 w-[57.5px] h-[53px] cursor-pointer">
                    <Image src="/Footer/Group.svg" width={57.5} height={53} alt="Footer Logo"/>
                </div>
            </Link>

            <div className="static md:absolute md:bottom-[81.9px] md:left-10 w-[143.3px] h-[25.1px] relative">
                <Image
                    className="absolute bottom-[0px] left-[0px] w-[25.1px] h-[25.1px]"
                    width={25.1}
                    height={25.1}
                    sizes="100vw"
                    alt="Social 1"
                    src="/Footer/Socials.svg"
                />
                <Image
                    className="absolute bottom-[0.1px] left-[122.29px] w-[21px] h-[25px]"
                    width={21}
                    height={25}
                    sizes="100vw"
                    alt="Social 2"
                    src="/Footer/TikTok.svg"
                />
                <Link
                    href="https://www.instagram.com/milinhchi/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        className="absolute bottom-[0px] left-[61.14px] w-[25.1px] h-[25.1px] cursor-pointer"
                        width={25.1}
                        height={25.1}
                        sizes="100vw"
                        alt="Social 3"
                        src="/Footer/icon.svg"
                    />
                </Link>
            </div>

            <div className="static md:absolute md:bottom-[81.9px] md:right-10 leading-[140%]">
                <Link href="/about#contact" className="cursor-pointer hover:text-darkorange transition-colors">Contact Us</Link>
            </div>
            <div className="static md:absolute md:bottom-[0px] md:right-10 flex gap-[clamp(16px,1.74vw,30px)] flex-wrap leading-[140%]">
                <Link href="/standards" className="cursor-pointer hover:text-darkorange transition-colors">Standards</Link>
                <Link href="/terms" className="cursor-pointer hover:text-darkorange transition-colors">Terms of Use</Link>
                <Link href="/privacy" className="cursor-pointer hover:text-darkorange transition-colors">Privacy</Link>
            </div>
            <div className="static md:absolute md:bottom-[0px] md:left-10 leading-[140%]">
                © 2026 Studio Degen Labs, LLC. All rights reserved.
            </div>
        </div>
    );
}
