import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col } from "react-bootstrap";
import MobileName from "../components/MobileName";
import ContactIcons from "../components/ContactIcons";
import Experience from "../components/Experience";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";
import "./Home.css";

const sections = ["aboutMe", "resume", "projects"];

export default function Home() {
  return (
    <div className="main">
      <MobileName />
      <Container className="banner" id="aboutMe">
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5} className="name">
                        <h1>Abigail Figaro</h1>
                        <div className="jobTitles">
                            <h2 className="jobNew">Full Stack Developer</h2>
                            <h2 className="jobOld">Architectural Designer</h2>
                        </div>
                        <p className="tagline">I leverage design thinking to craft seamless digital experiences, <br />merging innovative design with practical functionality <br />to make sophisticated solutions accessible to all.</p>
                        <div className="mt-4">
                            <nav>
                                <ul>
                                    {sections.map((section) => (
                                        <li key={section} className="nameNav">
                                            <a href={`#${section}`} className="navbar-link">
                                                {section.charAt(0).toUpperCase() + section.slice(1)} <i className="bi bi-arrow-right-short"></i>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="contactIcons">
                            <ContactIcons />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6} className="aboutMe ms-auto">
                        <h5 className="mobileHeading">ABOUT</h5>
                        <p className="aboutMeP">I have <b>over 7 years of experience </b>working in award-winning, boutique architecture firms as an Architectural Designer and have spent the past year building software.</p>
                        <p className="aboutMeP">I believe that <b>enhancing the quality of life</b> for marginalized communities hinges on access. Greater accessibility to education and knowledge unlocks transformative opportunities.
                            As an architect, I recognized that the traditional focus on a highly curated built environment often served only a narrow demographic—primarily the <b>top 2%</b> of the world’s population. Shifting my focus to the digital realm allows me to lower the entry threshold, <b>making high-quality design accessible </b> to anyone with an internet connection.</p>
                        <p className="aboutMeP">In my role as a Designer, I have concentrated on developing spatial solutions through innovative technologies, with a focus on creating functional and cohesive environments that optimize user workflow.
                            Most recently, I led an interior renovation project for a culinary program at an inner-city school in East Orange, NJ, managing the project from inception to completion. This involved close collaboration with clients and <b>coordinating cross-functional teams</b> of external consultants. </p>
                        <p className="aboutMeP">As a Developer, my experience encompasses building RESTful APIs and applications with an emphasis on <b>scalability and maintainability</b>. I’ve successfully designed and deployed custom web applications using reusable and responsive UI components, ensuring that the software adapts seamlessly to different devices and user needs.</p>
                        <Experience />
                        <FeaturedProjects />
                    </Col>
                </Row>
            </Container>
            <Footer />
    </div>
  );
};