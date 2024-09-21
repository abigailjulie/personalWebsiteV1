import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack, Badge } from "react-bootstrap";
import "./VerticalStack.css";

export default function VerticalStack( { showHomeLink = true } ) {
    const email = "abigail.figaro@gmail.com";

    return (
        <Stack direction="vertical" className="errContBadges">
            {showHomeLink && (
                <Link to="/">
                    <Badge pill bg="light" text="dark" className="errContBadge">Back to Home</Badge>
                </Link>
            )}
            <a href="https://www.linkedin.com/in/abigailfigaro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Badge pill bg="light" text="dark" className="errContBadge">LinkedIn</Badge>
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><Badge pill bg="light" text="dark" className="errContBadge">Email</Badge></a>
        </Stack>
    );
};