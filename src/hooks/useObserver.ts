import {useEffect, useRef} from "react";

// interface UseObserverProps {
//     ref: React.RefObject<HTMLDivElement>;
//     canLoad:
// }

export const useObserver = (
    ref: React.RefObject<HTMLDivElement>,
    canLoad: boolean,
    isLoading: boolean,
    callback: React.Dispatch<React.SetStateAction<number>>
) => {
    const observer = useRef<IntersectionObserver | null>(null)

    // useEffect(() => {
    //     if (isLoading || !lastElementRef.current) return;
    //     if(observer.current) observer.current.disconnect()
    //     const cb = function (entries: IntersectionObserverEntry[]) {
    //         if(entries[0].isIntersecting && canLoad) {
    //             callback(5)
    //         }
    //     }
    //
    //     observer.current = new IntersectionObserver(callback);
    //     observer.current.observe(ref.current!)
    // }, [isLoading]);
}