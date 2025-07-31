// import { unstable_setRequestLocale } from "next-intl/server";
import Hero from "@/components/dom/Hero";
import "../globals.css";
import Features from "@/components/dom/Features";
import Categories from "@/components/dom/Categories";

export default function HomePage() {



  return (
    <div className="h-full">
      <Hero />
      <Features />
      <Categories />
    </div>
  );
}

