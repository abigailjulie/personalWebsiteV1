import React from "react";
import github from "../assets/images/github.svg";
import linkedin from "../assets/images/linkedin.svg";
import email from "../assets/images/envelope-fill.svg";
import "./ContactIcons.css";

export default function ContactIcons () {
    return (
        <span className="contactIcons">
            <div className="socialIcons">
                <a href="https://github.com/abigailjulie/" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/abigailfigaro/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin" /></a>
                <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer"><img src={email} alt="email" /></a>
            </div>
        </span>
    )
}