"use client";

import { cn, handleTransitionClick } from "@/lib/utils";
import {
  MobileNavHeaderProps,
  MobileNavMenuProps,
  MobileNavProps,
  MobileNavToggleProps,
  NavbarProps,
  NavBodyProps,
  NavControllersProps,
  NavItemsProps,
} from "@/types/global";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
} from "motion/react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { FaSearch, FaShoppingBasket } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import userImg from "/public/images/user.png";
import { usePathname, useRouter } from "next/navigation";
import { useCartStore } from "@/zustand/store";


export const useHeaderTranslations = () => {
  return useTranslations("Header");
};

export const useAppRouter = () => {
  const router = useRouter();
  return router;
};


export const Navbar: React.FC<NavbarProps> = ({ children, className }) => {
  const ref = useRef(null);
  
  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed top-0 left-0 right-0 w-full lg:pt-10 z-90",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavBody: React.FC<NavBodyProps> = ({
  children,
  className,
}) => {
  return (
    <motion.div
      
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full px-6 lg:flex border-primary-2 backdrop-blur-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems: React.FC<NavItemsProps> = ({
  items,
  className,
}) => {
  const [hovered, setHovered] = useState<number | null>(null);

  const t = useHeaderTranslations();
  const router = useAppRouter();

  const pathname = usePathname();
  const lastSegment = pathname.slice(pathname.lastIndexOf("/"));
  const onItemClick = (path: string) => {
    handleTransitionClick(path, lastSegment, router);
  };

  return (
    <motion.div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium transition duration-200 lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => (
        <Link
          href={item.link}
          key={`link-${idx}`}
          onClick={() => onItemClick(item.link)}
          onMouseEnter={() => setHovered(idx)}
          className="relative px-4 py-2"
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-full bg-primary-dark"
            />
          )}
          <span className="relative z-20 px-3 py-2 rounded-md uppercase text-md font-bold transition-colors duration-500 hover:bg-tertiary/50 hover:text-black">
            {t(item.name)}
          </span>
        </Link>
      ))}
    </motion.div>
  );
};


export const MobileNav: React.FC<MobileNavProps> = ({
  children,
  className,
  visible,
}) => {
  return (
    <motion.div
      className={cn(
        "relative z-50 mx-auto flex w-full  flex-col items-center justify-between px-0 py-2 backdrop-blur-md lg:hidden",
        visible ? "bg-white/80 dark:bg-neutral-950/80" : undefined,
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavControllers: React.FC<NavControllersProps> = ({ isAuthonticated }) => {

  const t = useHeaderTranslations();
  const router = useAppRouter();
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const {totalItems} = useCartStore();

  return (
    <div className="flex items-center gap-4 p-4">
      <div className="relative flex gap-4">
        <div
          className={`${
            showSearch
              ? "flex rounded-full border w-full pl-6 box-border border-primary"
              : "hidden"
          }`}
        >
          <input
            type="text"
            placeholder={t("placeholder")}
            className="bg-transparent w-full outline-none text-[14px] !text-white bold-16"
            onChange={(e) => {
              // setSearchQuery(e.target.value)
              e.stopPropagation();
            }}
          />
        </div>
        <div
          className="cursor-pointer bg-tertiary text-white rounded-full p-2.5"
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <FaSearch className="text-xl" />
        </div>
      </div>

      {/* Cart icon */}
      <Link
        href={"/cart"}
        className="flex gap-2 items-center p-2 cursor-pointer rounded-full bg-tertiary text-white relative"
      >
        <FaShoppingBasket size={25} className="text-xl" />
         <span
          className={`absolute bottom-6 -right-[-2px] text-xs font-bold ${totalItems > 0 ? "text-primary" : "text-tertiary"}`}
        > 
          {totalItems}
        </span>
      </Link>

      {/* Auth */}
      <div>
        {isAuthonticated ? (
          <div className="flex gap-2 items-center cursor-pointer rounded-full bg-tertiary">
            <Image src={userImg} alt="User" height={44} width={44} />
          </div>
        ) : (
          <button
            onClick={() => router.push("/login")}
            className="btn-dark bold-16 flexCenter gap-x-2 !rounded-full"
          >
            {t("login")}
            {/* Icon for mobile only */}
            <span className="xl:hidden">
              <RiUserLine className="text-xl" />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export const MobileNavHeader: React.FC<MobileNavHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4 py-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu: React.FC<MobileNavMenuProps> = ({
  children,
  className,
  isOpen,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute right-0 top-16 z-50 flex w-full md:w-[50%] uppercase text-md font-bold flex-col items-center justify-center gap-4 py-4 rounded-lg border-primary-2 backdrop-blur-md",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle: React.FC<MobileNavToggleProps> = ({
  isOpen,
  onClick,
}) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};



export const NavbarLogo = () => {
  return (
    <Link
      href={"/"}
      className="bold-22 uppercase font-family-display text-tertiary cursor-pointer z-50"
    >
      Shope
    </Link>
  );
};
