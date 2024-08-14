import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col } from 'react-bootstrap';

import './Experience.css';

export default function Experience() {
  return (
    <>
      <h5 className='mobileHeading'>EXPERIENCE</h5>
      <div className="expContainer">
        <section className='mn expSection' >
          <Container>
            <Row id="resume">
              <Col xs={1} xl={1} className='year'>
                <p>22+</p>
              </Col>
              <Col xs={11} xl={11} className='job'>
                <h4>MN</h4>
                <h5>Senior Architectural Designer III</h5>
                <p>Spearheaded the production of the construction documents as the main point person for the team. Managed weekly design meetings with multi-disciplinary teams to resolve techincal challenges and create contextual design solutions. Mentored junior team members throughout their development.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='aplusi expSection'>
          <Container>
            <Row>
              <Col xs={1} xl={1} className='year'>
                <p>17-22</p>
              </Col>
              <Col xs={11} xl={11} className='job'>
                <h4 className='aplusi'>A+I</h4>
                <div className="expJobTitles">
                  <h5>Architectural Designer II</h5>
                  <h5 className='jobOld'>Architectural Designer I</h5>
                </div>
                <p>Developed robust 3D models using Building Information Modeling BIM software. Produced high quality presentation renderings and techincal drawings to communicate design concepts to Clients and external collaborators.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <a className="cvLink" href='/AbigailFigaroResume.pdf' target='_blank' rel='noopener noreferrer'> View Full Resume <i class="bi bi-arrow-right-short"></i></a>
      </div>
    </>
  )
}