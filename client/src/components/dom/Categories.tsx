"use client"

import React from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
// import { categories } from "../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

function Categories() {
  const  t  = useTranslations("Categories");


  return (
    <section className="max-padd-container mt-32">
      <div className="max-padd-container2">
        <Title
          title={t("Title")}
          titleStyle="w-fit"
          HeaderStyle="h2 "
        />

        <div className="relative mx-auto max-padd-container2">
          <Swiper
            slidesPerView={5}
            spaceBetween={100}
            loop={true}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            speed={800} // Smooth transition speed
            effect="slide" // Smooth slide effect
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
              1150: { slidesPerView: 4, spaceBetween: 10 },
              1350: { slidesPerView: 5, spaceBetween: 10 },
            }}
            modules={[Autoplay]}
            className="mySwiper flexCenter h-full bg"
          >
            {/* {categories.map((categorie) => (
            <SwiperSlide
              key={categorie.name}
              onClick={() =>
                navigate(`/collection/${categorie.name.toLowerCase()}`)
              }
              className="!flexCenter flex-col cursor-pointer group"
            >
              <div className="flexCenter bg-bluish-green/20 hover:bg-primary-deep/30 transition-all duration-300 ">
                <img
                  src={categorie.image}
                  alt={categorie.name}
                  height={201}
                  width={201}
                  loading="lazy"
                  className="object-cover rounded-2xl h-full"
                />
              </div>
              <h5 className="mt-6 h5 uppercase text-primary-deep bold-18 ">
                {categorie.name}
              </h5>
            </SwiperSlide>
          ))} */}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Categories;
