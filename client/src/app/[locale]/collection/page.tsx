import Title from "@/components/dom/Title";
import { useTranslations } from "next-intl";
import React from "react";
import { useSearchStore } from "@/zustand/store";

function Page() {

  const t = useTranslations("Categories");
  const {searchQuery, setsearchQuery} = useSearchStore();

  return (
    <section className="max-padd-container py-16 mt-24">
      <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      <div className="grid gap-3 place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">

      </div>
    </section>
  );
}

export default Page;
