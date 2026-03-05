"use client";

import React, {useState} from "react";
import {motion} from "framer-motion";

export default function SplashScreen({
                                         onDoneAction,
                                         fadeInMs = 1000,
                                         zoomMs = 10,
                                         zoomScale = 15,
                                         zoomOriginX = 50,
                                         zoomOriginY = 50,
                                     }: {
    onDoneAction: () => void;
    fadeInMs?: number;
    zoomMs?: number;
    zoomScale?: number;
    /** 0..100 (percent of the element box) */
    zoomOriginX?: number;
    /** 0..100 (percent of the element box) */
    zoomOriginY?: number;
}) {
    const [isZooming, setIsZooming] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const startZoom = () => {
        if (isZooming) return;
        setIsZooming(true);

        // Trigger carousel visibility after fade-in completes (600ms)
        window.setTimeout(() => {
            onDoneAction();
        }, 600);

        // Mark splash as done after full zoom animation
        window.setTimeout(() => {
            setIsDone(true);
        }, zoomMs);
    };

    if (isDone) return null;

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex cursor-pointer items-center justify-center bg-gray-200 bg-grid"
            onClick={startZoom}
            role="button"
            tabIndex={0}
            aria-label="Enter site"
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") startZoom();
            }}
            initial={{opacity: 0}}
            animate={{
                opacity: isZooming ? 0 : 1
            }}
            transition={{
                opacity: {
                    duration: isZooming ? .6 : fadeInMs / 1000,
                    ease: [0.33, 0, 0.2, 1]
                }
            }}
        >
            <motion.img
                src="/Splash/full-image.svg"
                alt="Powering the Future of Adventure"
                className="w-[96vw] h-[92vh] object-contain select-none"
                draggable={false}
                initial={{scale: 1}}
                animate={{
                    scale: isZooming ? zoomScale : 1
                }}
                transition={{
                    duration: zoomMs / 1000,
                    ease: [0.33, 0, 0.2, 1]
                }}
                style={{
                    transformOrigin: `${zoomOriginX}% ${zoomOriginY}%`
                }}
            />
        </motion.div>
    );
}