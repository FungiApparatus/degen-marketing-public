"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Header() {
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
        <div className="fixed top-0 bg-gray-200 w-full flex items-center px-[clamp(16px,2.31vw,40px)] box-border gap-[clamp(16px,1.74vw,30px)] shrink-0 z-50">
            <Link href="/" onClick={handleLogoClick}>
                <div className="h-[26.3px] w-[98.6px] relative cursor-pointer">
                    <Image
                        src="/Header/Logo.svg"
                        className="absolute h-full w-full top-0 left-0 max-w-full overflow-hidden max-h-full"
                        width={98.6}
                        height={26.3}
                        alt="Degen Logo"
                    />
                </div>
            </Link>

            <Link href="/about">
                <div className="flex items-center justify-center py-2 px-4 box-border">
                    <div className="relative leading-[120%] lowercase font-medium cursor-pointer">
                        about
                    </div>
                </div>
            </Link>
        </div>
    );
}
