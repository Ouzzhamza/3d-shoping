// hooks/useProductProgress.ts
import { useState, useCallback } from "react";

interface ProductProgress {
  [productId: number]: {
    progress: number;
    loaded: boolean;
    error?: string;
  };
}

export function useProductProgress() {
  const [productProgress, setProductProgress] = useState<ProductProgress>({});

  const setProgress = useCallback((productId: number, progress: number) => {
    setProductProgress((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        progress,
        loaded: progress >= 100,
      },
    }));
  }, []);

  const setError = useCallback((productId: number, error: string) => {
    setProductProgress((prev) => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        error,
        loaded: false,
      },
    }));
  }, []);

  const resetProgress = useCallback((productId: number) => {
    setProductProgress((prev) => ({
      ...prev,
      [productId]: {
        progress: 0,
        loaded: false,
      },
    }));
  }, []);

  return {
    productProgress,
    setProgress,
    setError,
    resetProgress,
  };
}
