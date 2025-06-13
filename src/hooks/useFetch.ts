import { useState } from "react";
import type {PaginationType} from "../types/types.ts";

export function useFetch<T>(callback: (args: PaginationType) => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (args: PaginationType) => {
    try {
      setIsLoading(true);
      await callback(args);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else {
        setError(String(e));
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { fetching, isLoading, error };
}
