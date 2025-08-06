// CategoriesMarkup.tsx
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRouter } from 'next/navigation';
import { handleTransitionClick } from "@/lib/utils";


type ImageType = {
  image: string;
  // add other image data props here if any
};

type CategoriesMarkupProps = {

  
  dragRef: React.RefObject<HTMLDivElement | null>;
  spinRef: React.RefObject<HTMLDivElement | null>;
  groundRef: React.RefObject<HTMLDivElement | null>;
  imgWidth: number;
  imgHeight: number;
  images: ImageType[];
  handlePointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  handlePointerUpOrLeave: () => void;
  handleWheel: (e: React.WheelEvent<HTMLDivElement>) => void;
};

const CategoriesMarkup: React.FC<CategoriesMarkupProps> = ({
  dragRef,
  spinRef,
  groundRef,
  imgWidth,
  imgHeight,
  images,
  handlePointerDown,
  handlePointerMove,
  handlePointerUpOrLeave,
  handleWheel,
}) => {

    const t = useTranslations("Categories");
  
  return (
    <section className="max-padd-container mt-32 h-[400px]">
      <div className="max-padd-container2">
        <Title title={t("Title")} titleStyle="w-fit" HeaderStyle="h2" />
      </div>
      <div
        className="w-full h-full overflow-hidden flex justify-center items-center [perspective:1000px] [transform-style:preserve-3d]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUpOrLeave}
        onPointerLeave={handlePointerUpOrLeave}
        onWheel={handleWheel}
        style={{ touchAction: "none" }}
      >
        <div
          className="relative flex mx-auto w-full h-full justify-center items-center [transform-style:preserve-3d]"
          ref={dragRef}
        >
          <div
            className="relative flex justify-center items-center [transform-style:preserve-3d] animate-spin-revert"
            ref={spinRef}
          >
            {images.map((image, index) => (
              <Image
                src={`${image.image}`}
                key={index}
                alt=""
                width={imgWidth}
                height={imgHeight}
                className="
                  [transform-style:preserve-3d]
                  absolute
                  left-0
                  top-0
                  w-full
                  h-full
                  object-cover
                  leading-[200px]
                  text-[50px]
                  text-center
                  rounded-3xl
                  !border-2
                  border-primary-2
                  cursor-pointer
                  transition-all
                  duration-300
                  [box-reflect:below_10px_linear-gradient(transparent,transparent,#0005)]"
                style={{
                  userSelect: "none",
                  WebkitUserSelect: "none",
                  MozUserSelect: "none",
                }}
                onDragStart={(e) => e.preventDefault()}
                onClick={() => handleTransitionClick("/collection") }
              />
            ))}
          </div>
          <div
            ref={groundRef}
            className="absolute top-full left-1/2 [transform:translate(-50%,-50%)_rotateX(90deg)] bg-[radial-gradient(center_center,farthest-side,#9993,transparent)]"
          />
        </div>
      </div>
    </section>
  );
};

export default CategoriesMarkup;
