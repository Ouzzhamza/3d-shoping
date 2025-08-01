"use client"

import React from "react";
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


const View = dynamic(
  () => import("@/components/canvas/controls/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => <Spinner size="h-14 w-14" />,
  }
);

const City = dynamic(
  () => import("@/components/canvas/controls/View").then((mod) => mod.City),
  {
    ssr: false,
  }
);

function Categories() {

  const  t  = useTranslations("Categories");
  const router = useRouter();


  return (
    <section className="max-padd-container mt-32">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2 " />
        <div className="relative mx-auto max-padd-container2">
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
                onClick={() =>
                  router.push(`/collection/${categorie.name.toLowerCase()}`)
                }
                className="cursor-pointer group"
              >
                <div className="flexCenter bg-bluish-green/20 hover:bg-primary-deep/30 transition-all duration-300 ">
                  <View className="relative w-[250px] h-[300px] bg-transparent border-primary-2 rounded-3xl  flex justify-center items-center">
                    <City/>
                  </View>
                </div>
                <h5 className="mt-6 h5 uppercase text-primary-deep bold-18 ">
                  {categorie.name}
                </h5>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
    
    </section>
  );
}

export default Categories;
