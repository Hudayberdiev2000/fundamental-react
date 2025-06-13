import { useState } from "react";

export function useFetch<T>(callback: () => Promise<T>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
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
