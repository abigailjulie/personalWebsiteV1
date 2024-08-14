import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import YelpCamp from '../assets/images/YelpCamp.jpg';
import Project1Badge from './Project1Badge';
import { Link } from 'react-router-dom';
import './FeaturedProjects.css';

export default function FeaturedProjects() {
  return (
    <>
      <h5 className='mobileHeading'>PROJECTS</h5>
      <div className='projects'>
        <section className='featProjs'>
          <ul id="projects">
            <li>
              <Link className='project' target='_blank' rel='noopener noreferrer' to="https://abigaildesignsyelpcamp.onrender.com/">
                <Row className='ms-auto align-items-center'>
                  <Col md={4} className='proj-img'>
                    <img src={YelpCamp} width='200' height='125' alt='image' />
                  </Col>
                  <Col md={8} className='proj-text'>
                    <p>blog application for campgrounds around the world!</p>
                    <Project1Badge />
                  </Col>
                </Row>
              </Link>
            </li>
          </ul>
        </section>
        <div className='featProjLinks'>
          <Link className="link" to="/projects">View Software Projects Archive<i class="bi bi-arrow-right-short"></i></Link>
          <Link className="link" to="/projects/architecture">View Architecture Projects Archive<i class="bi bi-arrow-right-short"></i></Link>
        </div>
      </div>
    </>
  );
};