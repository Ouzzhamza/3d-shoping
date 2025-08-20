import { useTranslations } from "next-intl";
import React from "react";


const Footer = () => {
  const t  = useTranslations();
  return (
    <footer className="bg-gradient-to-r from-white/10 via-black to-white/10 relative overflow-hidden max-padd-container py-10 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flexBetween flex flex-col md:flex-row gap-10">
        <div className="">
          <div className="flex gap-6 flex-col">
            <h2 className="h2 font-family-display ">SHOPE.</h2>
            <p className="h5 text-white leading-relaxed mb-6 max-w-md">
              {t("Footer.Discover")}
            </p>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: "📘", href: "#", label: "Facebook" },
              { icon: "🐦", href: "#", label: "Twitter" },
              { icon: "📷", href: "#", label: "Instagram" },
              { icon: "💼", href: "#", label: "LinkedIn" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-slate-300 hover:bg-gradient-to-r hover:from-primary hover:to-primary-deep hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg backdrop-blur-sm"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className=" self-auto grid grid-cols-3 gap-20">
          {/* Shop links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("Footer.Shop")}
            </h3>
            <ul className="space-y-3">
              {[
                t("Footer.NewArrivals"),
                t("Footer.BestSellers"),
                t("Footer.SaleItems"),
                t("Footer.GiftCards"),
                t("Footer.Collections"),
                t("Footer.Brands"),
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-primary text-sm transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Support links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("Footer.Support")}
            </h3>
            <ul className="space-y-3">
              {[
                t("Footer.HelpCenter"),
                t("Footer.TrackOrder"),
                t("Footer.Returns"),
                t("Footer.Exchanges"),
                t("Footer.SizeGuide"),
                t("Footer.ContactUs"),
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-primary text-sm transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* Company links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              {t("Footer.Company")}
            </h3>
            <ul className="space-y-3">
              {[
                t("Footer.AboutUs"),
                t("Footer.Careers"),
                t("Footer.Press"),
                t("Footer.Sustainability"),
                t("Footer.Affiliates"),
                t("Footer.Wholesale"),
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-primary text-sm transition-all duration-300 hover:translate-x-2 inline-block relative group"
                  >
                    <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © 2025 ShopVibe. All rights reserved. | Designed with ❤️ for amazing
            shoppers
          </p>
          {/* Payment methods */}
          <div className="flex items-center space-x-2">
            <span className="text-slate-400 text-sm mr-3">We Accept:</span>
            {["VISA", "MC", "AMEX", "PP", "GPay"].map((payment, index) => (
              <div
                key={index}
                className="w-12 h-8 bg-white/10 rounded flex items-center justify-center text-slate-300 text-xs font-semibold backdrop-blur-sm"
              >
                {payment}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
