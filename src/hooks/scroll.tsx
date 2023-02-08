import { useEffect, useState } from "react";

export function useSrcollY() {
    const [scrollY, setscrollY] = useState(window.scrollY);
    useEffect(() => {

        const handleScroll = () => {
            setscrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return { scrollY }
}
