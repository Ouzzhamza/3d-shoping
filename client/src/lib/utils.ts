import {  clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export function cn(...inputs: (string | undefined)[]) {
  return twMerge(clsx(inputs));
}

let bannersRef: React.RefObject<HTMLDivElement | null> | null = null;

export function setBannersRef(ref: React.RefObject<HTMLDivElement | null>) {
  bannersRef = ref;
}

export function getBannersRef() {
  return bannersRef;
}

export const handleTransitionClick = (href: string) => {
  const pathname = usePathname();
  if (pathname === href) return;

  const bannersRef = getBannersRef();
  if (bannersRef) {
    animationPageOut(href, bannersRef);
  }
};

export const animationPageIn = (
  bannersRef: React.RefObject<HTMLDivElement | null>
) => {
  const banners = bannersRef.current?.children;
  if (!banners || banners.length < 4) return;

  const tl = gsap.timeline();

  tl.set(banners, {
    yPercent: 0,
  }).to(banners, {
    yPercent: 100,
    stagger: 0.2 ,
  
  });
};


export const animationPageOut = (href: string, bannersRef: React.RefObject<HTMLDivElement | null>) => {
  const banners = bannersRef.current?.children;
  const router = useRouter();
  if (!banners || banners.length < 4) return;

  const tl = gsap.timeline();

  tl.set(banners, {
    yPercent: -100,
  }).to(banners, {
    yPercent: 0,
    stagger: 0.2 ,
    onComplete: () => {
      router.push(href);
    }
  });
}
