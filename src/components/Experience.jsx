import { Container, Row, Col } from 'react-bootstrap';

export default function Experience() {
    return (
        <>
        <section className='aplusi mt-5'>
          <Container className='d-flex'>
            <Row className='ms-auto align-items-center'>
              <Col xs={12} md={3} className='year p-0 me-0'>
                <p>2017-2022</p>
              </Col>
              <Col xs={12} md={9} className='job-text align-items-end'>
                <p>Spearheaded the production of the construction documents as the main point person for the team. Managed weekly design meetings with multi-disciplinary teams to resolve techincal challenges and create contextual design solutions. Mentored junior team members throughout their development.</p>
              </Col>
            </Row>
          </Container>
        </section>
        <section className='mn mt-5' id='jobs'>
          <Container className='d-flex'>
            <Row className='ms-auto align-items-center'>
              <Col xs={12} md={3} className='year p-0 me-0'>
                <p>2022-present</p>
              </Col>
              <Col xs={12} md={9} className='proj-text align-items-end'>
                <p>Developed robust 3D models using Building Information Modeling BIM software. Produced high quality presentation renderings and techincal drawings to communicate design concepts to Clients and external collaborators.</p>
              </Col>
            </Row>
          </Container>
        </section>
        </>
    )
}