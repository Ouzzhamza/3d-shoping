// import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "@/components/dom/Hero";
import "../globals.css";
import Features from "@/components/dom/Features";
import Categories from "@/components/dom/Categories";
import PopularProducts from "@/components/dom/PopularProducts";

export default function HomePage() {



  return (
    <div className="min-h-screen relative z-10 pb-20">
      <Hero />
      <Features />
      <Categories />
      <PopularProducts/>
    </div>
  );
}

