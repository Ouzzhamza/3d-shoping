import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";



function EmptyCart() {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const decorRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Set initial states
    gsap.set(
      [
        iconRef.current,
        titleRef.current,
        descriptionRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    gsap.set(decorRef.current, {
      opacity: 0,
      scale: 0,
    });

    // Animation sequence
    tl.to(decorRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "back.out(1.7)",
    })
      .to(
        iconRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
        },
        "-=0.4"
      )
      .to(
        titleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.3"
      )
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "-=0.2"
      )
     

    // Floating animation for the cart icon
    gsap.to(iconRef.current, {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 1,
    });

    // Pulse animation for decorative elements
  

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative max-padd-container2 min-h-[calc(100vh-160px)] flex justify-center items-center  overflow-hidden"
    >
      {/* Main content */}
      <div className="relative z-10 text-center mx-auto px-6 w-[800px] h-[700px] flex flex-col justify-center items-center rounded-3xl backdrop-blur-3xl">
        {/* Cart Icon */}
        <div ref={iconRef} className="mb-8">
          <div className="relative inline-block">
            <AiOutlineShoppingCart className="w-24 h-24 mx-auto text-text-light" />

            {/* Empty indicator */}
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/70 rounded-full flex items-center justify-center">
              <span className="text-red-500 text-sm font-semibold">0</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold text-text-light mb-4 leading-tight"
        >
          Your Cart is
          <span className="block text-primary mt-1">Empty</span>
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-text-light text-lg mb-8 leading-relaxed"
        >
          Looks like you haven't added any items to your cart yet.
          <span className="block mt-2">
            Discover amazing products and start shopping!
          </span>
        </p>

        {/* Call to action button */}
        <button
          className="relative inline-flex items-center justify-center px-8 py-4 w-[250px] font-semibold text-black bg-primary rounded-full shadow-lg overflow-hidden cursor-pointer"
          onClick={() => {
            // Add navigation logic here
            console.log("Navigate to shop");
          }}
        >
          <span className="relative z-10 flex items-center ">
            <BsBag className="w-5 h-5 mr-2" />
            Start Shopping
          </span>
        </button>
      </div>
    </div>
  );
}

export default EmptyCart;
