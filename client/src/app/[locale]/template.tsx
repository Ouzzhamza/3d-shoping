"use client"

import { animationPageIn } from "@/lib/utils"
import { useEffect, useRef } from "react"
import { setBannersRef } from "@/lib/utils";

export default function Template({children}: {children: React.ReactNode}) {

     const bannersRef = useRef<HTMLDivElement>(null);
     const contentRef = useRef<HTMLDivElement>(null);

     
    useEffect(() => {
        console.log("Template mounted");
        setBannersRef(bannersRef);
        animationPageIn(bannersRef);
    }, [])

    return (
      <div className="relative">
        {/* Enhanced banners with gradients */}
        <div
          ref={bannersRef}
          className="fixed inset-0 z-999 pointer-events-none"
        >
          <div className="min-h-screen bg-neutral-950 fixed top-0 left-0 w-1/4 shadow-lg" />
          <div className="min-h-screen bg-neutral-950 fixed top-0 left-1/4 w-1/4 shadow-lg" />
          <div className="min-h-screen bg-neutral-950 fixed top-0 left-2/4 w-1/4 shadow-lg" />
          <div className="min-h-screen bg-neutral-950 fixed top-0 left-3/4 w-1/4 shadow-lg" />
        </div>
        <div ref={contentRef}>{children}</div>
      </div>
    );
}