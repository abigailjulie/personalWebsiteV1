import { useEffect, useCallback } from "react";

export default function useIntersectionObserver(onIntersect, options) {
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, options);
        const lazyVideos = document.querySelectorAll("video[data-lazy]");
        lazyVideos.forEach(video => observer.observe(video));

        return () => {
            lazyVideos.forEach(video => observer.unobserve(video));
        };
    }, [onIntersect, options]);
};
