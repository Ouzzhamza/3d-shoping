"use client";

import React, { useEffect, useRef, useState } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import images from "../../assets/data";
import Image from "next/image";

function Categories() {
  const t = useTranslations("Categories");

  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);

  const radius = useRef(250);

  const imgWidth = 230;
  const imgHeight = 290;

  // Rotation state: only Y rotation matters here
  const [tY, setTY] = useState(10);

  // Drag tracking refs
  const isDragging = useRef(false);
  const lastX = useRef(0);
  const desX = useRef(0);
  const momentumInterval = useRef<NodeJS.Timeout | null>(null);

  // Wheel momentum refs
  const wheelVelocity = useRef(0);
  const wheelMomentumInterval = useRef<NodeJS.Timeout | null>(null);

  // Initialize carousel items transform
  const init = (delayTime?: number) => {
    console.log("here", radius.current);
    if (!spinRef.current) return;
    const aEle = Array.from(
      spinRef.current.querySelectorAll("img")
    ) as HTMLElement[];

    aEle.forEach((el, i) => {
      el.style.transform = `rotateY(${
        i * (360 / aEle.length)
      }deg) translateZ(${260}px)`;
      el.style.transition = `transform 1s`;
      el.style.transitionDelay = delayTime
        ? `${delayTime}s`
        : `${(aEle.length - i) / 4}s`;
    });
  };

  // Apply rotation transform to drag container, only around Y axis
  const applyTransform = (nextTY: number) => {
    if (!dragRef.current) return;

    dragRef.current.style.transform = `rotateY(${nextTY}deg)`;

    setTY(nextTY);
  };

  // Play or pause spin animation
  const playSpin = (yes: boolean) => {
    if (!spinRef.current) return;
    spinRef.current.style.animationPlayState = yes ? "running" : "paused";
  };

  // Handle drag start
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!dragRef.current) return;
    if (momentumInterval.current) clearInterval(momentumInterval.current);
    if (wheelMomentumInterval.current)
      clearInterval(wheelMomentumInterval.current);

    isDragging.current = true;
    lastX.current = e.clientX;

    desX.current = 0;

    playSpin(false);
  };

  // Handle drag move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const nX = e.clientX;

    desX.current = nX - lastX.current;

    const nextTY = tY + desX.current * 0.3; // rotation speed multiplier

    applyTransform(nextTY);

    lastX.current = nX;
  };

  // Handle drag end / leave
  const handlePointerUpOrLeave = () => {
    if (!dragRef.current) return;
    if (!isDragging.current) return;

    isDragging.current = false;

    if (momentumInterval.current) clearInterval(momentumInterval.current);

    let currentTY = tY; // capture latest rotation Y state locally

    momentumInterval.current = setInterval(() => {
      desX.current *= 0.95; // slowly decay momentum velocity

      currentTY += desX.current * 0.05; // increment rotation by current velocity

      applyTransform(currentTY);

      // stop when velocity is very low
      if (Math.abs(desX.current) < 0.1) {
        clearInterval(momentumInterval.current!);
        playSpin(true);
      }
    }, 17);
  };

  // Handle wheel zoom with momentum (affects radius)
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();

    wheelVelocity.current = e.deltaY * -0.5;

    // Apply immediately
    radius.current = Math.min(
      Math.max(100, radius.current + wheelVelocity.current),
      500
    );
    init(1);

    if (wheelMomentumInterval.current)
      clearInterval(wheelMomentumInterval.current);

    wheelMomentumInterval.current = setInterval(() => {
      wheelVelocity.current *= 0.95;
      radius.current = Math.min(
        Math.max(100, radius.current + wheelVelocity.current),
        500
      );
      init();

      if (Math.abs(wheelVelocity.current) < 0.1) {
        clearInterval(wheelMomentumInterval.current!);
      }
    }, 17);
  };

  useEffect(() => {
    if (!spinRef.current || !groundRef.current || !dragRef.current) return;

    spinRef.current.style.width = `${imgWidth}px`;
    spinRef.current.style.height = `${imgHeight}px`;
    groundRef.current.style.width = `${radius.current * 3}px`;
    groundRef.current.style.height = `${radius.current * 3}px`;

    init();

    // Auto rotate animation logic (if needed)
  }, []);

  return (
    <section className="max-padd-container mt-32 h-[400px]">
      <div className="max-padd-container2">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      </div>
      <div
        className="w-full h-full overflow-hidden flex justify-center items-center [perspective:1000px] [transform-style:preserve-3d]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUpOrLeave}
        onPointerLeave={handlePointerUpOrLeave}
        onWheel={handleWheel}
        style={{ touchAction: "none" }}
      >
        {/* Drag container - handles manual rotation */}
        <div
          className="relative flex mx-auto w-full h-full justify-center items-center [transform-style:preserve-3d]"
          ref={dragRef}
        >
          {/* Spin container - handles auto animation */}
          <div
            className="relative flex justify-center items-center [transform-style:preserve-3d] animate-spin-revert"
            ref={spinRef}
          >
            {images.map((image, index) => {
              return (
                <Image
                  src={`${image.image}`}
                  key={index}
                  alt=""
                  width={imgWidth}
                  height={imgHeight}
                  className="
                              [transform-style:preserve-3d]
                              absolute
                              left-0
                              top-0
                              w-full
                              h-full
                              object-cover
                              leading-[200px]
                              text-[50px]
                              text-center
                              rounded-3xl
                              !border-2
                              border-primary-2
                              cursor-pointer
                              transition-all
                              duration-300
                              [box-reflect:below_10px_linear-gradient(transparent,transparent,#0005)]
"
                  style={{
                    WebkitBoxReflect:
                      "below 10px linear-gradient(transparent, transparent, #0005)",
                  }}
                />
              );
            })}
          </div>
          a{/* Ground */}
          <div
            ref={groundRef}
            className="absolute top-full left-1/2 [transform:translate(-50%,-50%)_rotateX(90deg)] bg-[radial-gradient(center_center,farthest-side,#9993,transparent)]"
          />
        </div>
      </div>
    </section>
  );
}

export default Categories;
