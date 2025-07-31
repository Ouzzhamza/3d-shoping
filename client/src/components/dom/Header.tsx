"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  NavControllers,

} from "@/components/ui/Navbar";
import { useAuthStore } from "@/zustand/store";
import { useState } from "react";

import { useTranslations } from "next-intl";

export function Header() {

  const isAuthonticated = useAuthStore((state) => state.isAuthonticated);

  const navItems = [
    { name: "home", link: "/" },
    { name: "collection", link: "/collection" },
    { name: "testimponial", link: "/testimponial" },
    { name: "contact", link: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const t = useTranslations("Header");

  return (
      <Navbar>
        <NavBody visible={true}>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavControllers isAuthonticated={isAuthonticated} />
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 p-4"
              >
                <span className="block">{t(item.name)}</span>
              </a>
            ))}
            <NavControllers isAuthonticated={isAuthonticated} />
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
  );
}
