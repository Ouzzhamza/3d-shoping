"use client";

import React, { useState } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import { categories } from "../../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Spinner } from "../ui/Spinner";
import { ProductType } from "@/types/global";

const View = dynamic(
  () => import("@/components/canvas/controls/Common").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <Spinner size="h-14 w-14" />,
  }
);

const Hero3D = dynamic(
  () => import("@/components/canvas/Tshirt").then((mod) => mod.Tshirt),
  {
    ssr: false,
  }
);

const Common = dynamic(
  () => import("@/components/canvas/controls/Common").then((mod) => mod.Common),
  {
    ssr: false,
  }
);

function Categories() {
  const t = useTranslations("Categories");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      </div>
      <div className="w-full mt-16">
        <div className="absolute z-90 left-0 w-44 h-[300px] bg-gradient-to-r from-black via-black/90 to-transparent pointer-events-none backdrop-blur-sm" />
        <div className="absolute z-90 right-0 w-44 h-[300px] bg-gradient-to-l from-black via-black/90 to-transparent pointer-events-none backdrop-blur-sm" />

        <div className="relative max-padd-container2">
          <Swiper
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            // autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800}
            effect="slide"
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              555: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              800: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1150: { slidesPerView: 4, spaceBetween: 50 },
              1350: { slidesPerView: 5, spaceBetween: 50 },
            }}
            modules={[Autoplay]}
          >
            {categories.map((categorie) => (
              <SwiperSlide
                key={categorie.name}
                // onClick={() =>
                //   router.push(`/collection/${categorie.name.toLowerCase()}`)
                // }
                className="cursor-pointer group"
              >
                <div className="flexCenter bg-bluish-green/20 hover:bg-primary-deep/30 transition-all duration-300 ">
                  {/* <View
                    className="relative w-[250px] h-[300px] bg-transparent border-primary-2 rounded-3xl  flex justify-center items-center"
                    loading={isLoading}
                  >
                    <Hero3D
                      scale={0.5}
                      position={[0, 0, 0]}
                      path={categorie.object}
                      onLoad={() => setIsLoading(false)}
                      speed={0}
                    />

                    <Common
                      // productType={
                      //   categorie.name.toLocaleLowerCase() as ProductType
                      // }
                      enableOrbitControls={true}
                      enableZoom={false}
                      lockVerticalOrbit={false}
                      // enableRotation={true}
                      // enableFloating={true}
                    />
                  </View> */}
                </div>
                <h5 className="mt-6 h5 uppercase text-primary-deep bold-18 ">
                  {categorie.name}
                </h5>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Categories;
