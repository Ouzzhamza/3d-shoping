import Title from "@/components/dom/Title";
import { ProductType } from "@/types/global";
import { useTranslations } from "next-intl";
import React from "react";

function Page(product: ProductType) {
  const t = useTranslations("Details");

  return (
    <section className="max-padd-container mt-36">
      <div className="max-padd-container2 h-screen">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
        <div className="rounded-3xl border-[1px] border-primary h-[550px] flex justify-center items-center mt-16 backdrop-blur-3xl">
          {/* <Descripption/> */}
          {/* <Product/> */}
          
        </div>
      </div>
    </section>
  );
}

export default Page;
