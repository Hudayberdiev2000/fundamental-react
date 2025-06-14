import {type RefObject, useEffect, useRef} from "react";

interface UseInfiniteScrollProps<T extends Element> {
    isLoading: boolean;
    hasMore: boolean;
    onIntersect: () => void;
    ref: RefObject<T>;
}

export function useInfiniteScroll<T extends Element>({
         isLoading,
         hasMore,
         onIntersect,
         ref,
     }: UseInfiniteScrollProps<T>) {
    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (isLoading || !ref.current) return;

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
