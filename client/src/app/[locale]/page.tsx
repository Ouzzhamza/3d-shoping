// import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "@/components/dom/Hero";
import "../globals.css";
import Features from "@/components/dom/Features";
import Categories from "@/components/dom/Categories";
import PopularProducts from "@/components/dom/PopularProducts";
import banner from "/public/images/Banner.png";
import Image from "next/image";
import Blog from "@/components/dom/Blog";

export default function HomePage() {

  return (
    <div className="min-h-screen relative z-10 pb-20">
      <Hero />
      <Features />
      <Categories />
      <PopularProducts />
      <div className="max-padd-container lg:py-8 overflow-hidden h-[500px] rounded-2xl mt-32">
        <div className="relative w-full h-full max-padd-container2 p-4">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={banner}
              alt="BannerImg"
              fill
              className="object-cover object-left"
              sizes="50vw"
              priority
            />
          </div>
        </div>
      </div>
      <Blog/>
    </div>
  );
}

