import { useState } from "react";

export function useFetch<T>(callback: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetching, isLoading, error };
}
