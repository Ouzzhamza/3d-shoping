"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import images from "../../../public/data";
import CategoriesMarkup from "./CategoriesMarkup";

function Categories() {
  // const t = useTranslations("Categories");

  const dragRef = useRef<HTMLDivElement>(null);
  const spinRef = useRef<HTMLDivElement>(null);
  const groundRef = useRef<HTMLDivElement>(null);
  const radius = useRef<number>(250);

  const imgWidth = 230;
  const imgHeight = 290;

  const [tY, setTY] = useState<number>(10);

  const isDragging = useRef<boolean>(false);
  const lastX = useRef<number>(0);
  const desX = useRef<number>(0);
  const momentumInterval = useRef<NodeJS.Timeout | null>(null);
  const wheelVelocity = useRef<number>(0);
  const wheelMomentumInterval = useRef<NodeJS.Timeout | null>(null);

  const init = (delayTime?: number) => {
    if (!spinRef.current) return;
    const aEle = Array.from(
      spinRef.current.querySelectorAll("img")
    ) as HTMLElement[];
    aEle.forEach((el, i) => {
      el.style.transform = `rotateY(${
        i * (360 / aEle.length)
      }deg) translateZ(260px)`;
      el.style.transition = "transform 1s";
      el.style.transitionDelay = delayTime
        ? `${delayTime}s`
        : `${(aEle.length - i) / 4}s`;
    });
  };

  const applyTransform = (nextTY: number) => {
    if (!dragRef.current) return;
    dragRef.current.style.transform = `rotateY(${nextTY}deg)`;
    setTY(nextTY);
  };

  const playSpin = (yes: boolean) => {
    if (!spinRef.current) return;
    spinRef.current.style.animationPlayState = yes ? "running" : "paused";
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current) return;
    if (momentumInterval.current) clearInterval(momentumInterval.current);
    if (wheelMomentumInterval.current)
      clearInterval(wheelMomentumInterval.current);

    isDragging.current = true;
    lastX.current = e.clientX;
    desX.current = 0;
    playSpin(false);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    const nX = e.clientX;
    desX.current = nX - lastX.current;
    const nextTY = tY + desX.current * 0.3;
    applyTransform(nextTY);
    lastX.current = nX;
  };

  const handlePointerUpOrLeave = () => {
    if (!dragRef.current) return;
    if (!isDragging.current) return;

    isDragging.current = false;

    if (momentumInterval.current) clearInterval(momentumInterval.current);

    let currentTY = tY;

    momentumInterval.current = setInterval(() => {
      desX.current *= 0.95;
      currentTY += desX.current * 0.05;
      applyTransform(currentTY);

      if (Math.abs(desX.current) < 0.1) {
        clearInterval(momentumInterval.current!);
        playSpin(true);
      }
    }, 17);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();

    wheelVelocity.current = e.deltaY * -0.5;

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
  }, []);

  return (
    <CategoriesMarkup
      dragRef={dragRef}
      spinRef={spinRef}
      groundRef={groundRef}
      imgWidth={imgWidth}
      imgHeight={imgHeight}
      images={images}
      handlePointerDown={handlePointerDown}
      handlePointerMove={handlePointerMove}
      handlePointerUpOrLeave={handlePointerUpOrLeave}
      handleWheel={handleWheel}
    />
  );
}

export default Categories;
