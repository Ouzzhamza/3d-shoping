import React from "react";
import { MdOutline3dRotation } from "react-icons/md";
import { CiImageOn } from "react-icons/ci";
import { IconSwitcherProps } from "@/types/global";


function IconSwitcher({ toggleRenderType, renderType }: IconSwitcherProps) {
  return (
    <div
      className="absolute top-5 right-5 cursor-pointer z-30 select-none "
      onClick={toggleRenderType}
      role="button"
      tabIndex={0}
      //   onKeyPress={(e) => {
      //     if (e.key === "Enter" || e.key === " ") {
      //       toggleRenderType();
      //     }
      //   }}
      aria-label="Toggle render type"
    >
      <div className="relative w-[30px] h-[30px]">
        <MdOutline3dRotation
          size={30}
          className={`absolute top-0 left-0 w-full h-full text-primary transition-opacity duration-500 transform origin-center ${
            renderType
              ? "opacity-100 scale-100 animate-[spin-z]"
              : "opacity-0 scale-75 "
          }`}
          style={{ animationDuration: "1.5s" }}
        />
        <CiImageOn
          size={30}
          className={`absolute top-0 left-0 w-full h-full text-primary transition-opacity duration-500 transform origin-center ${
            renderType
              ? "opacity-0 scale-75 "
              : "opacity-100 scale-100 animate-[spin-z]"
          }`}
          style={{ animationDuration: "1.5s" }}
        />
      </div>
    </div>
  );
}

export default IconSwitcher