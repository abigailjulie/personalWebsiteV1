import React from "react";
import { useLocation, Link } from "react-router-dom";
import { Stack, Badge } from "react-bootstrap";
import "./BackToTop.css";

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    const email = "abigail.figaro@gmail.com";
    const location = useLocation();
    const hideHomeLink = location.pathname === "/";
    const hideProjectsLink = location.pathname === "/projects/architecture";


    const isProjectsPage = location.pathname === "/projects";

    return (
        <Stack direction="horizontal" gap={2} className="badges">
            <Badge pill bg="dark" className="customBadge" onClick={scrollToTop}>Back to Top</Badge>
            {!hideProjectsLink && (
                <Link to="/projects/architecture" className="customBadgeLink projectsLink">
                    <Badge pill bg="dark" className="customBadge">Back to Projects</Badge>
                </Link>
            )}
            {!hideHomeLink && (
                <Link to="/" className="customBadgeLink homeLink">
                    <Badge pill bg="dark" className="customBadge">Back to Home</Badge>
                </Link>
            )}
            <Link to="https://www.linkedin.com/in/abigailfigaro/" className="customBadgeLink" target="_blank" rel="noopener noreferrer"><Badge pill bg="dark" className="customBadge">LinkedIn</Badge></Link>
            <a href={`mailto:${email}`}><Badge pill bg="dark" className="customBadge">Email</Badge></a>
        </Stack>
    )
};