import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import ProjectCard from './ProjectCard';
import './Projects.css';
import YelpCamp from '../assets/images/YelpCamp.jpg';


export default function Projects() {
    const projects = [
        {
            title : 'YelpCamp',
            description: 'Web Application for visiualizing a blog of campgrounds around the world. Users can add campground information to a global map, upload photos and leave reviews. Create a Username and Password to ensure secruity and authenticity.',
            imgUrl : YelpCamp,
        },
    ]

    return (
        <section className='project' id='project'>
            <Container>
                <Row>
                    <Col xs={12} md={6} xl={5}>
                    <h3>YelpCamp</h3>
                    <p>YelpCamp description</p>
                    <TabContainer id='projects-tab' defaultActiveKey='first'>
                        <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id='pills-tab'>
                            <Nav.Item>
                                <Nav.Link eventKey='link-1'>YelpCamp</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey='link-2'>Project 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </TabContainer>
                    <TabContent>
                        <TabPane eventKey='link-1'>
                            <Row>
                                {
                                    projects.map((project, index) => {
                                        return (
                                            <ProjectCard
                                            key= { index }
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </TabPane>
                        <TabPane eventKey='link-2'>Coming Soon</TabPane>
                    </TabContent>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}