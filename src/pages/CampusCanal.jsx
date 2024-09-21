import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectArch.css";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

//imported images
import canalCurrent from "../assets/images/ArchImages/Canal_Current.jpg";
import canalAfter from "../assets/images/ArchImages/Canal_AxonAfter.jpg";
import canalConcepts from "../assets/images/ArchImages/Canal_Catalog.jpg";
import canalBefore from "../assets/images/ArchImages/Canal_AxonBefore.jpg";
import canalBallNoWater from "../assets/images/ArchImages/Canal_BasketballNoWater.jpg";
import canalBallWithWater from "../assets/images/ArchImages/Canal_BasketballWithWater.jpg";
import canalLibraryWithWater from "../assets/images/ArchImages/Canal_LibraryWithWater.jpg";
import canalOverall from "../assets/images/ArchImages/Canal_OverallWithPeople.png";
import canalLibrarySitePlan from "../assets/images/ArchImages/Canal_LibrarySitePlan.jpg";
import canalLibrarySection1 from "../assets/images/ArchImages/Canal_LibrarySection1.jpg";
import canalLibrarySection2 from "../assets/images/ArchImages/Canal_LibrarySection2.jpg";
import canalLibrarySection3 from "../assets/images/ArchImages/Canal_LibrarySection3.jpg";
import canalLibraryAxon from "../assets/images/ArchImages/Canal_LibraryAxon.jpg";
import canalProgram from "../assets/images/ArchImages/Canal_ProgramBars.jpg";
import canalLandUseRec from "../assets/images/ArchImages/Canal_LandUseRec.jpg";
import canalLandUseMixed from "../assets/images/ArchImages/Canal_LandUseMixed.jpg";
import canalConceptDiagram from "../assets/images/ArchImages/Canal_ConceptDiagram.jpg";
import canalClassroomWithWater from "../assets/images/ArchImages/Canal_ClassroomFilled.jpg";
import canalAerial from "../assets/images/ArchImages/Canal_Aerial.jpg";

export default function CampusCanal() {
    return (
        <div className="container">
            <div className="black pullDown">
                <div className="blackText">
                    <h1>Campus Canal</h1>
                </div>
            </div>
            <div className="head">
                <p className="overview">A city that's turned it's back to the environment.</p>
                <img src={canalAerial} alt="Overhead view of site in Atlantic City, NJ" width="1300px" height="700px" className="images" />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <img src={canalCurrent} alt="Photo from Baltic Avenue" width="800px" height="500px" />
                <p>Campus Canal is a capstone project in my graduate portfolio. It began in the fall semester of my final year at the University of Virginia as a group project.
                    I extracted one building from the campus to further develop as a case study below. The popular children’s board game, Monopoly, was based on the neighborhoods of Atlantic City, NJ.
                    Known for its casinos and boardwalks, Atlantic City was once a major hub of entertainment and economic activity.
                    In the game, players bid for properties that mirrored real socio-economic classes of the time, with properties like “Boardwalk” and “Park Place” representing the most prestigious and costly real estate.</p>
                <p>Unfortunately, over time, corruption and a declining casino industry diminished Atlantic City's appeal, leading to numerous infrastructural challenges.
                    Our assignment was to analyze the socio-cultural landscape of the city and propose a revitalization strategy aimed at restoring its former glory.
                    This task involved applying principles akin to urban renewal and system design to address legacy systems to enhance functionality and performance.</p>
                <div className="workPaired">
                    <img src={canalConceptDiagram} alt="Diagram of landmaarks along existing canal" width="1000px" height="500px" />
                    <div className="scope centered">
                        <h4>Scope Of Work</h4>
                        <ul className="roles">
                            <li><i className="bi bi-chevron-compact-right"></i>User Research</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Future Vision</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Concept Development</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Research Analysis</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Physical Modeling</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Prototyping</li>
                            <li><i className="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <div className="problemImgs">
                    <div className="landUse">
                        <img src={canalLandUseMixed} alt="Diagram of Mixed Use Locations in the city" width="800px" height="600px" className="imgBorder" />
                        <img src={canalLandUseRec} alt="Diagram of Recreational Locations in the city" width="800px" height="600px" />
                    </div>
                </div>
                <p>I was part of a group of three, and each of us chose to research different aspects of the city’s landscape that aligned with our interests. Ben found that much of the city could be classified as a "food desert" because of the distance to groceries with affordable, healthy food options.
                    Chris focused on the political history and the corruption's impact on city infrastructure. Unfortunately Atlantic city was devastated by Hurricane Sandy because the infrastructure was not built to withstand the wind and rain.
                    The hurricane damaged much of the boardwalk and caused significant flooding in many neighborhoods. Houses elevated on stilts to mitigate damage were often deemed structurally unsound for reoccupation. My focus was on the education system, and my research revealed low graduation rates, which is a critical indicator of the community’s overall health.</p>
            </div>
            <div className="process">
                <p className="overview">Reimagine the existing infrastructure to be a greater resource to the community.</p>
                <h3>The Process</h3>
                <div className="processImgs">
                    <img src={canalConcepts} alt="Concept sketches of designed human and water interactions" width="800px" height="800px" />
                    <img src={canalProgram} alt="Concept diagram of program and it's ratio to the whole" width="300px" height="200px" />
                </div>
                <p>We noticed that Baltic Ave, one of the more affordable properties in Monopoly, featured schools for all ages, from daycare and elementary through to community college. It appeared that this street was a central hub for education in the city.
                    In addition, the street had a non-functioning canal running directly underneath it. So we proposed to create an open air canal that widened to the width of the entire street.
                    Unlike the casinos that turn your focus inwards, the new buildings that would populate its edges would serve as resources for students in their everyday lives.</p>
                <p className="reducedMargin">The proposed buildings in our master plan included an open-air market where fishermen could catch fish from the state marina and sell them fresh to residents and restaurants.
                    We also envisioned a recreation center and library where students could study and exercise after school, as well as affordable housing and hotels to attract visitors and new residents to underpopulated areas.
                    Given the canal's proximity, it was crucial to consider the impact of water and rising sea levels on the architecture of these buildings.</p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <div className="solutionGraphic">
                    <img src={canalBefore} alt="Axon diagram of current conditions" width="500px" height="350px" />
                    <i className="bi bi-arrow-right"></i>
                    <img src={canalAfter} alt="Axon diagram of proposed conditions" width="500px" height="350px" />
                </div>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={800}>
                        <Carousel.Item>
                            <img src={canalBallNoWater} alt="3D rendering of rec center without water" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={canalBallWithWater} alt="3D rendering of rec center with water" width="1300px" height="700px" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <p>Furthermore, we aimed to design each building with a dynamic relationship to the canal's water, adapting user experience to environmental input.
                    We envisioned the ebb and flow of natural elements influencing the spatial experience, celebrating Atlantic City’s natural resources rather than disregarding them.
                    We brainstormed various interaction models to determine how people could engage with the water—whether it would be above, below, or around them.</p>
                <p className="reducedMargin">In the slideshow above, you can see the recreation center’s design both with and without the presence of water, illustrating its impact on the space’s functionality.
                    The center's use cases adapt with water levels: when the water level is lowered, students can play basketball, and when it rises, the space transforms to accommodate swimming lessons.
                    We believed that the solution to the growing frustrations needed to be integral to the existing infrastructure. Atlantic City didn’t need a new, foreign fad but greater community engagement. </p>
                <p className="overview">A city that's turned it's back to the environment.</p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <img src={canalOverall} alt="3D rendering of overall project from above" width="1300px" height="700px" />
                <img src={canalClassroomWithWater} alt="3D rendering of overall project from classroom" width="1300px" height="700px" />
                <p>This project allowed me to enhance my skills in conducting thorough research on a neighborhood to make data-driven decisions about spatial interventions.
                    Addressing real-world issues provided a deeper context for applying strategic design thinking, giving our solutions meaningful impact.
                    Collaborating with a diverse team of designers, each bringing unique expertise and passions, mirrored the process of cross-functional team development that would become a huge part of my professional career.
                    This experience not only refined my problem-solving abilities but also highlighted the importance of effective communication and clear, well-structured ideas—key components in both architectural design and software development.</p>
            </div>
            <div className="caseStudy">
                <h1>Case Study</h1>
                <img src={canalLibraryWithWater} alt="Section drawing through Library" width="850px" height="100px" className="case1" />
                <p>For my final semester in graduate school, I decided to focus on the Library of Campus Canal and further develop its construction details. Education is the cornerstone of any society, and I aimed to reimagine what libraries of the future could look like as technology increasingly influences our daily lives.
                    While water and electricity don’t mix, I wanted to emphasize the proximity to this natural resource and enhance the connection. My primary design goal was to create a quiet room fully surrounded by water. This liquid barrier not only provided acoustic isolation but also fostered a meditative state conducive to focused work.</p>
                <img src={canalLibrarySitePlan} alt="Plan view  of Library" width="400px" height="300px" />
            </div>
            <div className="sections">
                <img src={canalLibrarySection1} alt="Wall section through library at meeting room" />
                <img src={canalLibrarySection2} alt="Wall section through library at open area" />
                <img src={canalLibrarySection3} alt="Wall section through library at water's edge" />
            </div>
            <p>I believe the impact of technology on the libraries of the future will be transformative. Architects and building engineers will face increasing demands for building services and must address the effects of AI on social interactions and learning.
                For this project, I aimed to return to the fundamental elements necessary for a space dedicated to focused work: light, air, sound, and water. The lower level features a series of meeting spaces of varying sizes, which will be partly submerged during higher water levels.
                The second floor offers an open floor plan with a variety of seating arrangements and a central skylight. The building’s envelope is designed with custom linear stripes that draw attention upward while maintaining privacy through carefully measured transparencies.</p>
            <img src={canalLibraryAxon} alt="Exploded Axon of library in context" width="600px" height="500px" className="axon" />
            <BackToTop />
            <Footer />
        </div>
    )
};