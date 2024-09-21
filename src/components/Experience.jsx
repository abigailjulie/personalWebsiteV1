import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./Experience.css";

export default function Experience() {
  return (
    <>
      <h5 className="mobileHeading">EXPERIENCE</h5>
      <div className="expContainer">
        <section className="expSection ad" >
          <Container>
            <Row id="resume" className="align-items-start">
              <a className="projectLink" href="https://github.com/abigailjulie/personalWebsiteV1">
                <Col xs={1} md={1} className="year">
                  <p>2023+</p>
                </Col>
                <Col xs={11} md={11} className="job">
                  <h4>Abigail Designs LLC</h4>
                  <h5>Full Stack Developer</h5>
                  <p>Established a strong foundation in full-stack development through an intensive bootcamp focused on the MERN stack. Since then, I've continuously expanded my expertise by building and optimizing scalable web applications, demonstrating a commitment to both technical excellence and innovative problem-solving.</p>
                </Col>
              </a>
            </Row>
          </Container>
        </section>
        <section className="expSection mn">
          <Container>
            <Row className="align-items-start">
              <a className="projectLink" href="https://moodynolan.com/" target="_blank" rel="noopener noreferrer">
                <Col xs={1} md={1} className="year">
                  <p>22-24</p>
                </Col>
                <Col xs={11} md={11} className="job">
                  <h4>MN</h4>
                  <h5>Senior Architectural Designer III</h5>
                  <p>Leveraged my experience in large, complex projects to manage my own project under the supervision of the Studio Director. Spearheaded the production of the construction documents and managed weekly design meetings with multi-disciplinary teams to resolve techincal challenges and create contextual design solutions.</p>
                </Col>
              </a>
            </Row>
          </Container>
        </section>
        <section className="expSection aplusi">
          <Container>
            <Row>
              <a className="projectLink" href="https://architectureplusinformation.com/" target="_blank" rel="noopener noreferrer">
                <Col xs={1} md={1} className="year">
                  <p>17-22</p>
                </Col>
                <Col xs={11} md={11} className="job">
                  <h4 className="aplusi">A+I</h4>
                  <div className="expJobTitles">
                    <h5>Architectural Designer II</h5>
                    <h5 className="jobOld">Architectural Designer I</h5>
                  </div>
                  <p>Created high-quality technical documents and 3D visualizations using industry leading software. Developed robust problem-solving skills and effective communication to ensure accuracy of design concepts to clients and external collaborators.</p>
                </Col>
              </a>
            </Row>
          </Container>
        </section>
        <a className="cvLink" href="/AbigailFigaroResume.pdf" target="_blank" rel="noopener noreferrer"> View Full Resume <i className="bi bi-arrow-right-short"></i></a>
      </div>
    </>
  )
};