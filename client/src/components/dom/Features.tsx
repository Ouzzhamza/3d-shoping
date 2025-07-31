import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdCurrencyExchange } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { TbPackageImport } from "react-icons/tb";
import { useTranslations } from "next-intl";

function Features() {
  const t = useTranslations("Features");
  return (
    <section className="max-padd-container mt-10">
      <div className="max-padd-container2 flex flex-wrap justify-center md:justify-between gap-10">
        <div className="flexCenter gap-x-4 border-primary-2 rounded-3xl w-64 h-32 backdrop-blur-2xl ">
          <LiaShippingFastSolid className="text-4xl" />
          <div>
            <h5 className=" text-primary-deep bold-18">{t("shippingTitle")}</h5>
            <p className="text-bluish-green bold-16">
              {t("shippingDescription")}
            </p>
          </div>
        </div>
        <div className=" flexCenter gap-x-4 border-primary-2 rounded-3xl w-64 h-32 backdrop-blur-2xl">
          <MdCurrencyExchange className="text-4xl" />
          <div>
            <h5 className="text-primary-deep bold-18">{t("discountTitle")}</h5>
            <p className="text-bluish-green bold-16">
              {t("discountDescription")}
            </p>
          </div>
        </div>
        <div className=" flexCenter gap-x-4 border-primary-2 rounded-3xl w-64 h-32 backdrop-blur-2xl">
          <BiSupport className="text-4xl" />
          <div>
            <h5 className="text-primary-deep bold-18">{t("supportTitle")}</h5>
            <p className="text-bluish-green bold-16">
              {t("supportDescription")}
            </p>
          </div>
        </div>
        <div className=" flexCenter gap-x-4 border-primary-2 rounded-3xl w-64 h-32 backdrop-blur-2xl">
          <TbPackageImport className="text-4xl" />
          <div>
            <h5 className="text-primary-deep bold-18">{t("returnsTitle")}</h5>
            <p className="text-bluish-green bold-16">
              {t("returnsDescription")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
