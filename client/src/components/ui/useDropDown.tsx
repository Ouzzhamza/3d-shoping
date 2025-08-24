"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { RiUserLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import { useAuthStore, useDialogStore } from "@/zustand/AuthStore";
import { gsap } from "gsap";
import { IoIosLogOut } from "react-icons/io";
import { useTranslations } from "next-intl";
import userImg from "/public/images/user.png";





const UserDropdown: React.FC = () => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { setisAuthenticated } = useAuthStore();
  const t = useTranslations("Header")
  const {isAuthenticated} = useAuthStore();
  const { openDialog } = useDialogStore(); 



  // 2. Properly typed refs
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  const openDropdown = () => {
    setIsDropdownOpen(true);

    if (menuRef.current) {
      gsap.set(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
      });

      gsap.to(menuRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    }
  };

  const closeDropdown = () => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.15,
        ease: "power2.in",
        onComplete: () => setIsDropdownOpen(false),
      });
    } else {
      setIsDropdownOpen(false);
    }
  };

  const handleMenuClick = (action: "orders" | "logout") => {
    closeDropdown();

    if (action === "orders") {
    } else if (action === "logout") {
      setisAuthenticated(false);
      localStorage.removeItem("user");
    }
  };

  if (!isAuthenticated) {
    return (
      <button
        onClick={() => openDialog("login")}
        className="btn-dark bold-16 flexCenter gap-x-2 !rounded-full"
      >
        {t("login")}
        <span className="xl:hidden">
          <RiUserLine className="text-xl" />
        </span>
      </button>
    );
  }

  return (
    <div ref={dropdownRef} className="relative">
      {/* User Avatar Button */}
      <button
        onClick={isDropdownOpen ? closeDropdown : openDropdown}
        className="flex gap-2 items-center cursor-pointer gap-x-2 rounded-full  group"
      >
        <Image
          src={userImg}
          alt="User"
          height={40}
          width={40}
          className="rounded-full"
        />
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          ref={menuRef}
          className="absolute right-0 top-full mt-8 w-48  border border-primary rounded-3xl shadow-2xl overflow-hidden z-50"
        >
          <div className="py-2 backdrop-blur-2xl bg-bg-gray/50">
            {/* Orders */}
            <button
              onClick={() => handleMenuClick("orders")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-primary/20 transition-all duration-200 group"
            >
              <BsBoxSeam className="text-lg group-hover:text-primary transition-c olors" />
              <span className="font-medium">{t("MyOrders")}</span>
            </button>

            <div className="h-px bg-primary mx-2 my-1" />

            {/* Logout */}
            <button
              onClick={() => handleMenuClick("logout")}
              className="w-full flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-red-400 hover:bg-red-500/10 transition-all duration-200 group"
            >
              <IoIosLogOut className="text-lg group-hover:text-red-400 transition-colors" />
              <span className="font-medium">{t("Logout")}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
