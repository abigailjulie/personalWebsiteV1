import { useState, useEffect } from 'react';
import './Scrollable.css';
import ContactIcons from './ContactIcons';
import { Container, Row, Col } from 'react-bootstrap';
import Projects from '../pages/Projects';
import Experience from './Experience';

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

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <header className='banner' id='home'>
            <Container className='d-flex'>
                <Row className='align-items-center'>
                    <Col xs={12} md={6} xl={5} className='name'>
                        <h1>Abigail Figaro</h1>
                        <h3>Full Stack Developer</h3>
                        <p>I design a digital environments that bridge the gap of accessibility with creativity.</p>
                        <div className='mt-4'>
                            <nav className={scrolled && 'scrolled'}>
                                <ul>
                                    <li><a href="/home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</a></li>
                                    <li><a href="/resume" className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</a></li>
                                    <li><a href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='contactIcons'>
                            <ContactIcons />
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={6} className='aboutMe ms-auto'>
                        <p>I have over 7 years experience working in boutique architecture firms as an Architectural Designer and I have been building software for a year.</p>
                        <p>I believe that the key to improving the quality of life of marginalized people is access. Greater accessibility to education and knowledge leads to transformative opportunity. As an architect I’ve realized that the demographic of the benefactor or end-user group was too narrow. The people who have access to a highly curated, built environment are often the top 2% of the world. By turning my focus to a digital realm, I can lower the threshold of entry to someone with access to wifi. </p>
                        <p>As a Designer, my experience has been focused on creating spatial solutions using innovative technology to provide a functional and cohesive space that improves the workflow of the end user. I led projects from end to end working closely with the client, external consultants and managing a five person team of designers. As a Developer, my experience is in building RESTful applications with a focus on scalability and legibility. I’ve successfully built and deployed custom web applications using reusable and responsive UI components. </p>
                        <Experience />
                        <Projects />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}