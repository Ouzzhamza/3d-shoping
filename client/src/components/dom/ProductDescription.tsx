import React from "react";

function ProductDescription({
  Title,
  Description,
}: {
  Title?: string;
  Description?: string;
}) {
const skeletonClass = "!bg-text-light animate-pulse rounded-md";

  return (
    <div className="h-full p-10 w-full flex flex-col justify-center">
      {Title ? (
        <h2 className="leading-none lg:bold-64 text-3xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4 break-words">
          {Title}
        </h2>
      ) : (
        <div
          className={`h-12 sm:h-14 lg:h-20 mb-3 sm:mb-4 w-3/4 ${skeletonClass}`}
        />
      )}

      {Description ? (
        <h2 className="bold-14 text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3">
          {Description}
        </h2>
      ) : (
        <div className={`h-6 sm:h-7 lg:h-9 w-full ${skeletonClass}`} />
      )}
    </div>
  );
}

export default ProductDescription;
