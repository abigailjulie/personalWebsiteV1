import { useEffect, useState, useCallback } from "react";

export default function useScrollHandler() {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver((entries) => {
            let currentSection = "";
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSection = entry.target.getAttribute("id");
                }
            });
            if (currentSection) {
                setActiveLink(currentSection);
            }
        }, {
            threshold: 0.6,
            rootMargin: "0px 0px -50% 0px"
        });

        sections.forEach(section => observer.observe(section));
        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const onUpdateActiveLink = useCallback((value) => {
        document.querySelector(`#${value}`).scrollIntoView({ behavior: "smooth" });
        setActiveLink(value);
    }, []);


    return { activeLink, scrolled, onUpdateActiveLink };
};
