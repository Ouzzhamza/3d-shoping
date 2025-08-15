import { useState, useMemo, useEffect } from "react";

/**
 * usePagination hook provides paginated data from an array.
 * @template T - type of array element
 * @param data - The full data array to paginate
 * @param itemsPerPage - Number of items per page (default 12)
 * @param resetDeps - Dependencies array for when to reset the current page (optional)
 */
export function usePagination<T>(
  data: T[],
  itemsPerPage = 12,
  resetDeps: readonly unknown[] = []
) {
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page to 1 whenever dependencies change
  useEffect(() => {
    setCurrentPage(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, resetDeps);

  // Memoize pagination data for performance
  const paginationData = useMemo(() => {
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
    const currentData = data.slice(startIndex, endIndex);

    return {
      currentData,
      totalItems,
      totalPages,
      startIndex,
      endIndex,
      currentPage,
      itemsPerPage,
    };
  }, [data, currentPage, itemsPerPage]);

  // Page change handler typed to number
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= paginationData.totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return {
    ...paginationData,
    setCurrentPage: handlePageChange,
  };
}
