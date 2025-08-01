"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/Spinner";

const Hero3D = dynamic(
  () => import("@/components/canvas/Tshirt").then((mod) => mod.Tshirt),
  {
    ssr: false,
    // loading: () => {
    //   console.log("Dynamic component loading...");
    //   return null;
    // },
  }
);

const View = dynamic(
  () => import("@/components/canvas/controls/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <Spinner size="h-14 w-14" />,
  }
);

const Common = dynamic(
  () => import("@/components/canvas/controls/View").then((mod) => mod.Common),
  {
    ssr: false,
  }
);

function Hero() {

  const [isLoading, setIsLoading] = useState(true);

  const t = useTranslations("Hero");
  return (
    <section className="max-padd-container w-full h-screen flex flex-col md:flex-row gap-8 md:gap-0 mt-24">
      {/* Text Content Section */}
      <div className="text-primary-deep flex flex-col justify-center w-full md:w-1/2 h-1/2 md:h-full max-padd-container2">
        <h1 className="h1 font-family-display font-thin text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
          {t("headline")}
        </h1>

        <h1 className="h1 uppercase !mb-0 lg:bold-40 break-words leading-tight text-2xl sm:text-3xl lg:text-4xl sm:mb-2">
          {t("subheadline")}
        </h1>

        <h2 className="h1 leading-none lg:bold-64 text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 break-words">
          {t("promoDetail")}
        </h2>

        <div className="flex items-center lg:mb-4 sm:mb-6">
          <h3 className="h3 text-base sm:text-lg">{t("pricePrefix")}</h3>
          <span className="bg-tertiary px-1 inline-block rotate-2 ml-2.5 bold-40 text-xl sm:text-2xl">
            <span className="text-lg sm:text-xl relative bottom-2 sm:bottom-3">
              $
            </span>
            99.
            <span className="text-lg sm:text-xl">99</span>
          </span>
        </div>

        <Link
          href={"/collections"}
          className="inline-flex btn-dark text-white flexCenter bold-20 w-40 sm:w-48 lg:w-52 text-sm sm:text-base py-2 sm:py-3 !rounded-full"
        >
          Shop now
        </Link>
      </div>

      {/* Video/Content Section */}
      <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 h-1/2 md:h-full ">
        <View
          className="relative w-[300px] h-[400px] md:w-[400px] md:h-[600px] bg-transparent border-primary-2 rounded-3xl flex justify-center items-center"
          loading={isLoading}
        >
          <Hero3D
            scale={2}
            position={[0, -1.6, 0]}
            path="/Tshirt.glb"
            onLoad={() => setIsLoading(false)}
          />
          <Common
            color={""}
            jsonPath={"/camera_coordinates.json"}
            enableOrbitControls={true}
            enableZoom={false}
            lockVerticalOrbit={false}
          />
        </View>
      </div>
    </section>
  );
}

export default Hero;
