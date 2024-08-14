import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Menu from '../components/Menu';
import MobileName from '../components/MobileName';
import ContactIcons from '../components/ContactIcons';
import Experience from '../components/Experience';
import FeaturedProjects from '../components/FeaturedProjects';
import Footer from '../components/Footer';

import './Scrollable.css';

export default function Name() {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver((entries) => {
            let currentSection = '';
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    currentSection = entry.target.getAttribute("id");
                }
            });
            if (currentSection) {
                setActiveLink(currentSection);
            }
        }, {
            threshold: 0.6,  // Adjust to detect more or less of the section
            rootMargin: '0px 0px -50% 0px'  // Trigger when 50% of the section is out of view
        });

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    const onUpdateActiveLink = (value) => {
        document.querySelector(`#${value}`).scrollIntoView({ behavior: 'smooth' });
        setActiveLink(value);
    }

    return (
        <div className='main'>
            <Menu />
            <MobileName />
            <Container className='banner' id="aboutMe">
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5} className='name'>
                        <h1>Abigail Figaro</h1>
                        <div className='jobTitles'>
                            <h2 className='jobNew'>Full Stack Developer</h2>
                            <h2 className='jobOld'>Architectural Designer</h2>
                        </div>
                        <p className='tagline'>I design digital environments that creatviely bridge the gap of accessibility.</p>
                        <div className='mt-4'>
                            <nav className={scrolled && 'scrolled'}>
                                <ul>
                                    <li className='nameNav'>
                                        <a href="#aboutMe"
                                            className={activeLink === 'aboutMe' ? 'active navbar-link' : 'navbar-link'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onUpdateActiveLink('aboutMe');
                                            }}
                                        >
                                            About <i class="bi bi-arrow-right-short"></i>
                                        </a>
                                    </li>
                                    <li className='nameNav'>
                                        <a href="#resume"
                                            className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onUpdateActiveLink('resume');
                                            }}
                                        >
                                            Resume <i class="bi bi-arrow-right-short"></i>
                                        </a>
                                    </li>
                                    <li className='nameNav'>
                                        <a href="#projects"
                                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                onUpdateActiveLink('projects');
                                            }}
                                        >
                                            Projects <i class="bi bi-arrow-right-short"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className='contactIcons'>
                            <ContactIcons />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6} className='aboutMe ms-auto'>
                        <h5 className='mobileHeading'>ABOUT</h5>
                        <p className='aboutMeP'>I have over 7 years experience working in boutique architecture firms as an Architectural Designer and I have been building software for a year.</p>
                        <p className='aboutMeP'>I believe that the key to improving the quality of life of marginalized people is access. Greater accessibility to education and knowledge leads to transformative opportunity. As an architect I’ve realized that the demographic of the benefactor or end-user group was too narrow. The people who have access to a highly curated, built environment are often the top 2% of the world. By turning my focus to a digital realm, I can lower the threshold of entry to someone with access to wifi. </p>
                        <p className='aboutMeP'>As a Designer, my experience has been focused on creating spatial solutions using innovative technology to provide a functional and cohesive space that improves the workflow of the end user. I led projects from end to end working closely with the client, external consultants and managing a five person team of designers. As a Developer, my experience is in building RESTful applications with a focus on scalability and legibility. I’ve successfully built and deployed custom web applications using reusable and responsive UI components. </p>
                        <Experience />
                        <FeaturedProjects />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}