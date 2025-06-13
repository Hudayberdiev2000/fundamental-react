import { useState } from "react";

export function useFetch<T>(callback: (args: T) => Promise<void>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetching = async (args: T) => {
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
