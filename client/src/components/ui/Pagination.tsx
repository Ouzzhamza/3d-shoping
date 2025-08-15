// components/Pagination.tsx
import { useTranslations } from "next-intl";
import React from "react";


interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  totalItems: number;
  className?: string;
  showPageJump?: boolean;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  totalItems,
  className = "",
  showPageJump = true,
  maxVisiblePages = 5,
}) => {
  const t = useTranslations("Pagination");

  // Move state hooks to the top, before any conditional logic
  const [pageInputValue, setPageInputValue] = React.useState<string>(
    currentPage.toString()
  );

  // Update input value when currentPage changes
  React.useEffect(() => {
    setPageInputValue(currentPage.toString());
  }, [currentPage]);

  // Calculate display range
  // const startIndex = (currentPage - 1) * itemsPerPage;
  // const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Generate page numbers to display
  const getVisiblePages = (): number[] => {
    const pages: number[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Show pages around current page
      let start = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
      let end = Math.min(
        totalPages,
        currentPage + Math.floor(maxVisiblePages / 2)
      );

      // Adjust if we're near the beginning or end
      if (currentPage <= Math.ceil(maxVisiblePages / 2)) {
        end = Math.min(totalPages, maxVisiblePages);
      } else if (currentPage >= totalPages - Math.floor(maxVisiblePages / 2)) {
        start = Math.max(1, totalPages - maxVisiblePages + 1);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const visiblePages = getVisiblePages();

  const handlePageJump = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const value = event.target.value;
    setPageInputValue(value);

    // Only update page if it's a valid number within range
    const page = parseInt(value);
    if (!isNaN(page) && page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handlePageInputBlur = (): void => {
    // Reset to current page if input is invalid
    const page = parseInt(pageInputValue);
    if (isNaN(page) || page < 1 || page > totalPages) {
      setPageInputValue(currentPage.toString());
    }
  };

  const handlePageInputKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    if (event.key === "Enter") {
      const page = parseInt(pageInputValue);
      if (!isNaN(page) && page >= 1 && page <= totalPages) {
        onPageChange(page);
      } else {
        setPageInputValue(currentPage.toString());
      }
    }
  };

  // Move the conditional return to the end, after all hooks have been called
  if (totalPages <= 1) return null;

  return (
    <div className={`flex flex-col items-center space-y-4 pt-14 ${className}`}>
      {/* Pagination controls */}
      <div className="flex items-center space-x-4">
        {/* Previous button */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="w-[90px] px-3 py-2 text-sm bg-tertiary/30 text-primary-deep rounded-md hover:bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {t("Previous")}
        </button>

        {/* First page + ellipsis */}
        {visiblePages[0] > 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              1
            </button>
            {visiblePages[0] > 2 && (
              <span className="px-2 py-2 text-gray-500">...</span>
            )}
          </>
        )}

        {/* Page numbers */}
        {visiblePages.map((page: number) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 text-sm rounded-md transition-colors ${
              currentPage === page
                ? "bg-tertiary text-white"
                : "bg-tertiary/20 text-primary-deep hover:bg-tertiary"
            }`}
          >
            {page}
          </button>
        ))}

        {/* Last page + ellipsis */}
        {visiblePages[visiblePages.length - 1] < totalPages && (
          <>
            {visiblePages[visiblePages.length - 1] < totalPages - 1 && (
              <span className="px-2 py-2 text-gray-500">...</span>
            )}
            <button
              onClick={() => onPageChange(totalPages)}
              className="px-3 py-2 text-sm bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              {totalPages}
            </button>
          </>
        )}

        {/* Next button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="w-[90px] px-3 py-2 text-sm bg-tertiary/30 text-primary-deep rounded-md hover:bg-tertiary disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {t("Next")}
        </button>
      </div>

      {/* Page jump input (optional) */}
      {showPageJump && totalPages > 10 && (
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">
            {t("goToPage")}
          </span>
          <input
            type="number"
            min="1"
            max={totalPages}
            value={pageInputValue}
            onChange={handlePageJump}
            onBlur={handlePageInputBlur}
            onKeyDown={handlePageInputKeyDown}
            className="w-16 px-2 py-1 border border-gray-300 rounded text-center focus:outline-none focus:ring-2 focus:ring-primary-deep focus:border-primary-deep"
            placeholder="1"
          />
          <span className="text-gray-600">
            {t("pagination", {
              total: totalPages,
              defaultValue: `of ${totalPages}`,
            })}
          </span>
        </div>
      )}
    </div>
  );
};

export default Pagination;
