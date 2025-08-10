import React from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import { blogs } from "../../../public/data";
import Image from "next/image";

// interface Blogs {
//   title: string;
//   category: string;
//   image: string;
// }

interface Blog {
  title: string;
  category: string;
  image: string;
}

function Blog() {
  const t = useTranslations("Blog");

  return (
    <section className="max-padd-container pt-16 pb-16">
      <div className="max-padd-container2">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5  pt-16">
          {blogs.map((blog) => (
            <div
              key={blog.title}
              className="relative h-[300px] border-primary-2 overflow-hidden rounded-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
            >
              <Image
                src={blog.image}
                alt="BlogImg"
                fill
                className="object-cover object-left"
                sizes="50vw"
                priority
              />

              <div className="absolute top-0 right-0 left-0 h-full w-full bg-black/30" />
              <div className="absolute bottom-4 text-light left-4">
                <h3 className="font-[600px] text-[16px] pr-4 leading-5">
                  {blog.title}
                </h3>
                <h4 className="bold-20 pb-3 pt-1 text-secondary">
                  {blog.category}
                </h4>
                <button
                  // onClick={() => navigate(blog.title)}
                  className="bg-black/50 py-0.5 p-5 meduium-14 rounded-md cursor-pointer"
                >
                  {t("ContinueReading")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
