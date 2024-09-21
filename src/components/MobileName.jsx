import React from "react";
import ContactIcons from "../components/ContactIcons";
import "./MobileName.css";

export default function MobileName() {
    return (
        <section className="mobileName">
            <h1>Abigail Figaro</h1>
            <div className="jobTitles">
                <h2 className="jobNew">Full Stack Developer</h2>
                <h2 className="jobOld">Architectural Designer</h2>
            </div>
            <p className="tagline">I leverage design thinking to craft seamless digital experiences, <br />merging innovative design with practical functionality <br />to make sophisticated solutions accessible to all.</p>
            <div className="contactIcons"><ContactIcons /></div>
        </section>
    )
}