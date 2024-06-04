import { Row, Col, Container, Tab, TabContent, TabPane, Nav } from 'react-bootstrap';
import YelpCamp from '../assets/images/YelpCamp.jpg';
import '../pages/Projects.css';
import Project1Badge from '../components/Project1Badge';

export default function Projects() {
  const projects = [
    {
      title: 'YelpCamp',
      description: 'blog application for campgrounds around the world',
      imgUrl: YelpCamp,
    },
  ];

  return (
        <section className='project' id='projects'>
          <Container className='d-flex' id='container'>
            <Row className='ms-auto align-items-center'>
              <Col xs={12} md={5} className='proj-img p-0 me-0'>
                <img src={YelpCamp} width='200' height='125' alt='image' />
              </Col>
              <Col xs={12} md={7} className='proj-text align-items-end'>
                <p>blog application for campgrounds around the world!</p>
                <Project1Badge />
              </Col>
            </Row>
          </Container>
        </section>
  );
};