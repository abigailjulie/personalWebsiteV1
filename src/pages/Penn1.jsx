import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectArch.css";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";

//images
import penn1Diagram from "../assets/images/ArchImages/Penn1_Diagram1.jpg";
import penn1Diagram2 from "../assets/images/ArchImages/Penn1_Diagram2.jpg";
import penn1ThirdFloorPlan from "../assets/images/ArchImages/Penn1_ThirdFloorPlan.jpg";
import penn1FinalRender from "../assets/images/ArchImages/Penn1_CoEntry.jpg";
import penn1Node1 from "../assets/images/ArchImages/Penn1_WorkSample1.jpg";
import penn1Node2 from "../assets/images/ArchImages/Penn1_WorkSample2.jpg";
import penn1Node3 from "../assets/images/ArchImages/Penn1_WorkSample3.jpg";
import penn1Node4 from "../assets/images/ArchImages/Penn1_WorkSample4.jpg";
import penn1Node5 from "../assets/images/ArchImages/Penn1_WorkSample5.jpg";
import penn1Node6 from "../assets/images/ArchImages/Penn1_WorkSample6.jpg";
import penn1Node7 from "../assets/images/ArchImages/Penn1_WorkSample7.jpg";
import penn1Node8 from "../assets/images/ArchImages/Penn1_WorkSample8.jpg";
import penn1Node9 from "../assets/images/ArchImages/Penn1_WorkSample9.jpg";
import penn1Node10 from "../assets/images/ArchImages/Penn1_WorkSample10.jpg";
import penn1Balcony00 from "../assets/images/ArchImages/Penn1_Balcony00.png";
import penn1Balcony01 from "../assets/images/ArchImages/Penn1_Balcony01.png";
import penn1Balcony02 from "../assets/images/ArchImages/Penn1_Balcony02.png";
import penn1Balcony03 from "../assets/images/ArchImages/Penn1_Balcony03.png";
import penn1Balcony04 from "../assets/images/ArchImages/Penn1_Balcony04.png";

export default function Penn1() {
    return (
        <div className="container">
            <div className="black pullDown">
                <div className="blackText">
                    <h1>Penn 1</h1>
                </div>
            </div>
            <div className="head">
                <p className="overview">Rentable vs Usable Square Footage</p>
                <img src={penn1ThirdFloorPlan} alt="Third Floor Plan Drawing" width="1300px" height="700px" className="images" />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <p>Vornado Realty Trust previously collaborated with Architecture plus Information on Chicago’s iconic Merchandise Mart. "theMart" is an infrastructural
                    architecture project that envisions a new connection between the historic parts of the community and everyday workers in Chicago's bustling city center.
                    Penn 1 is our New York response. Formally known as One Penn Plaza, our intervention includes a renewed double-height interior lobby in Phase One.
                    The 225,000 sq. ft. interior renovation features an addition to the front and a completely new brand experience. This initiative aims to unify all of Vornado’s
                    properties across the country under a single app and brand identity, allowing users to explore them no matter where they are. Phase Two includes a second-floor conferencing center,
                    gym, and coworking space. I was heavily involved in both phases of this project over the course of two years, with major responsibility for the coworking spaces.</p>
                <div className="work">
                    <div className="scope">
                        <h4>Scope Of Work</h4>
                        <ul className="roles">
                            <li><i className="bi bi-chevron-compact-right"></i>User Research</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Office Analysis</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Stakeholder Workshop</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Future Vision</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Concept Development</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Research Analysis</li>
                            <li><i className="bi bi-chevron-compact-right"></i>High Fidelity Prototyping</li>
                            <li><i className="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Construction Documents</li>
                            <li><i className="bi bi-chevron-compact-right"></i>External Consultant Coordination</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Collaboration with Engineering Team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <div className="problemImgs">
                    <img src={penn1Diagram} alt="Plan drawing of typical intersection of offices" width="300px" height="300px" />
                    <img src={penn1Diagram2} alt="Plan drawing of proposed office square footage to be return to public corridor" width="300px" height="300px" />
                </div>
                <p>The entire third floor was designated as Vornado coworking space, where renters could temporarily lease various open offices for specific periods.
                    The concept was that companies of any size could rent these offices for short or long terms. The more desks there were, the more revenue it generated for the client.
                    To achieve maximum profit, we designed a series of small, medium, and large offices that were arranged to optimize the floor space.
                    Although this approach was highly profitable, it created a labyrinthine, fishbowl effect that was unsuitable for focused work.
                    I was tasked with developing a design solution that maintained as many desks as possible while incorporating architectural elements to break up the repetitive glass maze.</p>
            </div>
            <div className="process">
                <p className="overview">I was tasked with developing a design solution that maintained as many desks as possible</p>
                <h3>The Process</h3>
                <div className="nodes">
                    <img src={penn1Node2} className="node" alt="Perspective view of bench" width="400px" height="250px" />
                    <img src={penn1Node1} className="node" alt="Elevation view of bench" width="400px" height="250px" />
                    <img src={penn1Node3} className="node" alt="Perspective view of bookcase" width="400px" height="250px" />
                    <img src={penn1Node6} className="node" alt="Elevation view of bookcase" width="400px" height="250px" />
                    <img src={penn1Node5} className="node" alt="Perspective view of working bench" width="400px" height="250px" />
                    <img src={penn1Node8} className="node" alt="Elevation view of working bench" width="400px" height="250px" />
                    <img src={penn1Node4} className="node" alt="Perspective view of cafe bench" width="400px" height="250px" />
                    <img src={penn1Node7} className="node" alt="Elevation view of cafe bench" width="400px" height="250px" />
                </div>
                <p>Through design thinking and iterative sketching, I determined that the optimal intervention was to create an incision along the corridor at the intersection of a cluster of offices.
                    This location was ideal because it aligned with the elevator core, providing a wayfinding solution. The first tool used to achieve the most significant architectural impact was the introduction of warm-toned materials,
                    consistent with those used in other project areas. Integrating wood elements into this space added a touch of hospitality by conveying warmth.</p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <div className="solutionGraphic">
                    <img src={penn1Node10} alt="Elevation of angled bench" width="400px" height="240px" />
                    <img src={penn1Node9} alt="Plan of angled bench" width="800px" height="300px" />
                </div>
                <p>These “nodes” serve as pause points within the spatial algorithm to navigate the corporate maze of desks. I simulated a series of interactions in our 3D model, reimagining each intersection as a node designed to facilitate
                    social interactions around an architectural feature. In commercial real estate, the key metric is the ratio of rentable to usable square footage. While this is not purely a mathematical measurement,
                    usable space refers to the floor area a tenant can occupy, whereas rentable space includes corridors and communal areas. The final solution approved by the client preserved the maximum amount of usable space while effectively implementing the design concept.
                    Essentially, I "clipped" the corner, revealing a wood backdrop for an upright lounge bench and reading light.</p>
                <p className="overview">- 455 Sqaure Feet</p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <img src={penn1FinalRender} alt="3D perspective of coworking entry" width="1300px" height="700px" />
                <p>Penn 1 is the largest project in my portfolio. Over the span of two years, I worked on a team comprising 35 different professionals, including interior designers, metal fabricators, graphic designers, brand strategists, and landscape architects.
                    Together, we brought the first phase of this project to the New York landscape.</p>
                <p className="reducedMargin">My design work on the project was completed in November 2019. Just a few months later, we faced the unprecedented challenges of the COVID-19 pandemic. As a result, this portion of the project was put on hold as the needs for corporate offices evolved in the post-coronavirus era.
                    The coworking spaces were subsequently redesigned with a focus on social distancing and enhanced hygiene protocols.</p>
                <p className="reducedMargin">Nevertheless, the experience of collaborating on a complex, large-scale project with a diverse team of designers was invaluable and directly led to my ability to manage teams in the next phase of my career.</p>
            </div>
            <div className="status">
                <h3>Project Status</h3>
                <h6>Phase 1 : Completed 2020</h6>
                <h6>Phase 2 : Under Construction</h6>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={1500}>
                        <Carousel.Item>
                            <img src={penn1Balcony00} alt="Photo of bookcase in 2nd floor work lounge" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony01} alt="Photo of 2nd floor work lounge" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony02} alt="Photo of first floor stair from 2nd floor work lounge" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony03} alt="Photo of first floor stair" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony04} alt="Photo of amphitheatre seating at 2nd floor" width="1300px" height="700px" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className="awards">
                <h3>Awards</h3>
                <ul>
                    <li>Interior Design NYCxDesign Winner 2023 (Commercial Lobby / Amenity Space)</li>
                    <li>SARA NY Design Awards 2023 Finalist (Commercial Office Repositioning)</li>
                </ul>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
};