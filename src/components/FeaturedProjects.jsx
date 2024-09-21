import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import YelpCamp from "../assets/images/YelpCamp.jpg";
import personalWebsite from "../assets/images/personalWebsite.jpg";
import ProjectBadge from "./ProjectBadge";
import { Link } from "react-router-dom";
import "./FeaturedProjects.css";

const projects = [
  {
    link:"https://github.com/abigailjulie/personalWebsiteV1",
    imgSrc: personalWebsite,
    imgAlt: "snapshot of personal website home page",
    title: "Personal Website V1",
    description: "web application showcasing multi-discipline project archive",
    badges: ["Javascript", "React", "Bootstrap", "Vercel"],
  },
  {
    link:"https://abigaildesignsyelpcamp.onrender.com",
    imgSrc: YelpCamp,
    imgAlt: "snapshot of YelpCamp home page",
    title: "YelpCamp",
    description: "blog application for campgrounds around the world",
    badges: ["Javascript", "Node.js", "Express", "MongoDB", "Render"],
  }
];

export default function FeaturedProjects() {
  return (
    <>
      <h5 className="mobileHeading">PROJECTS</h5>
      <div className="projects">
        <section className="featProjs">
          <ul id="projects">
            {projects.map((project, index) => (
              <li key={index}>
              <Link className="project" target="_blank" rel="noopener noreferrer" to={project.link}>
                <Row className="ms-auto align-items-top">
                  <Col md={4} className="proj-img">
                    <img src={project.imgSrc} width="200" height="125" alt="image" />
                  </Col>
                  <Col md={8} className="proj-text">
                    <h5>{project.title}</h5>
                    <p>{project.description}</p>
                    <ProjectBadge badges={project.badges} className="projectBadge" />
                  </Col>
                </Row>
              </Link>
            </li>
            ))}
          </ul>
        </section>
        <div className="featProjLinks">
          <Link className="link" to="/projects/software">View Software Projects Archive<i className="bi bi-arrow-right-short"></i></Link>
          <Link className="link" to="/projects/architecture">View Architecture Projects Archive<i className="bi bi-arrow-right-short"></i></Link>
        </div>
      </div>
    </>
  );
};