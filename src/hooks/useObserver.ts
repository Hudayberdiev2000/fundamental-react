import { useEffect, useRef } from "react";

interface UseInfiniteScrollProps {
    isLoading: boolean;
    hasMore: boolean;
    onIntersect: () => void;
    ref?: React.RefObject<Element>;
}

export function useInfiniteScroll({
                                      isLoading,
                                      hasMore,
                                      onIntersect,
                                      ref,
                                  }: UseInfiniteScrollProps) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading || !ref?.current) return;

        if (observer.current) {
            observer.current.disconnect();
        }

        observer.current = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && hasMore) {
                onIntersect();
            }
        });

        observer.current.observe(ref.current);

        return () => {
            observer.current?.disconnect();
        };
    }, [isLoading, hasMore, onIntersect, ref]);
}
