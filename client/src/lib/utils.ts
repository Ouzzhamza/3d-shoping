import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import gsap from "gsap";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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

export const handleTransitionClick = (
  href: string,
  pathname: string,
  router: AppRouterInstance
) => {

  console.log("here", pathname, href)
  if (pathname === href){
    
    return;
  } 

  const bannersRef = getBannersRef();
  if (bannersRef) {
    animationPageOut(href, bannersRef, router);
  }
};

// Solution 1: Add delay parameter and ensure proper timing
export const animationPageIn = (
  bannersRef: React.RefObject<HTMLDivElement | null>,
  delay: number = 0.4 // Default delay to ensure page has loaded
) => {
  const banners = bannersRef.current?.children;
  if (!banners || banners.length < 4) return;

  const tl = gsap.timeline({ delay });
  tl.set(banners, {
    yPercent: 0,
  }).to(banners, {
    yPercent: 100,
    stagger: 0.2,
    ease: "power2.out",
  });
};

// Solution 2: Better timing control with delays
export const animationPageOut = (
  href: string,
  bannersRef: React.RefObject<HTMLDivElement | null>,
  router: AppRouterInstance
) => {
  const banners = bannersRef.current?.children;
  if (!banners || banners.length < 4) return;

  const tl = gsap.timeline();

  tl.set(banners, {
    yPercent: -100,
  }).to(banners, {
    yPercent: 0,
    stagger: 0.2,
    // duration: 1,
    ease: "power2.out",
    onComplete: () => {
      router.push(href);
    },
  });
};

export const getPathWithoutLocale = (path: string) => {
  const segments = path.split("/");
  if (segments.length > 1 && segments[1].length <= 3) {
    return "/" + segments.slice(2).join("/") || "/";
  }
  return path;
};

