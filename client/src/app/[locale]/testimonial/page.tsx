import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import React from "react";
import { FaStar } from "react-icons/fa";
import { testimonials } from "../../../../public/data";

function Page() {
  
  const t = useTranslations("Testimonial");

  return (
    <section className="max-padd-container  mt-36">
      <div className="max-padd-container2 min-h-[calc(100vh-200px)]">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        <div className="flex flex-wrap gap-18 justify-between  mt-24">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-[420px] space-y-4 p-3 border border-primary  text-light bold-14 backdrop-blur-2xl"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} size={16} className="text-[#FFD700]" />
                  ))}
                </div>
                <p>{testimonial.date}</p>
              </div>
              <p>{testimonial.message}</p>
              <div className="flex items-center gap-2">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full"
                />
                <p className="bold-14">{testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Page;
