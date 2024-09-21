import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import "./ProjectArch.css";
import "bootstrap/dist/css/bootstrap.min.css";

//images
import ThirdPointData from "../assets/images/ArchImages/ThirdPoint_DataElev.jpg";
import ThirdPointDataPlan from "../assets/images/ArchImages/ThirdPoint_DataPlan.jpg";
import ThirdPointDataPlan2 from "../assets/images/ArchImages/ThirdPoint_DataPlan2.jpg";
import ThirdPointDataStations from "../assets/images/ArchImages/ThirdPoint_DataStations.jpg";
import ThirdPointDataWall from "../assets/images/ArchImages/ThirdPoint_DataWall.jpg";
import ThirdPointLevel49 from "../assets/images/ArchImages/ThirdPoint_FloorPlanLevel49.jpg";
import ThirdPointLevel50 from "../assets/images/ArchImages/ThirdPoint_FloorPlanLevel50.jpg";
import ThirdPointLevel51 from "../assets/images/ArchImages/ThirdPoint_FloorPlanLevel51.jpg";
import ThirdPointOverall from "../assets/images/ArchImages/ThirdPoint_Overall.jpg";
import ThirdPointOffice from "../assets/images/ArchImages/ThirdPoint_PrivateOffice.jpg";
import ThirdPointPhoto1 from "../assets/images/ArchImages/ThirdPoint_Photo1.jpg";
import ThirdPointPhoto2 from "../assets/images/ArchImages/ThirdPoint_Photo2.jpg";
import ThirdPointPhoto3 from "../assets/images/ArchImages/ThirdPoint_Photo3.jpg";
import ThirdPointPhoto4 from "../assets/images/ArchImages/ThirdPoint_Photo4.jpg";

export default function ThirdPoint() {
    return (
        <div className="container">
            <div className="black pullDown">
                <div className="blackText">
                    <h1>Third Point</h1>
                </div>
            </div>
            <div className="head">
                <p className="overview">Cultivating wellness in the workplace</p>
                <img src={ThirdPointOverall} alt="3D rendering of open desks within corridor" width="1300px" height="700px" className="images" />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <div className="ThirdPointSections">
                    <img src={ThirdPointLevel49} alt="Plan drawing of 49th floor plan" width="400px" height="400px" />
                    <img src={ThirdPointLevel50} alt="Plan drawing of 50th floor plan" width="400px" height="400px" />
                    <img src={ThirdPointLevel51} alt="Plan drawing of 51th floor plan" width="400px" height="400px" />
                </div>
                <p>Third Point is a New York-based hedge fund whose CEO commissioned Architecture plus Information to design their new headquarters with a focus on wellness.
                    While the financial industry is often criticized for poor work-life balance, our client at Third Point wanted their new headquarters at Hudson Yards to be different.
                    The early programming phase of the project was characterized by an emphasis on spiritual, mental, and physical wellness, and this focus was maintained throughout the entire design process.</p>
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
                            <li><i className="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Construction Documents</li>
                            <li><i className="bi bi-chevron-compact-right"></i>External Consultant Coordination</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <img src={ThirdPointDataPlan} alt="Plan of traders desks" width="400px" height="300px" className="problemImg" />
                <p>The element of wellness characterized every aspect of the design, from the inclusion of prayer rooms to the use of real plants and herbs in the “hydration stations” on every floor at every intersection.
                    Each intervention was seamlessly integrated, creating a fluidity of materials throughout the space, including the detailed design of the worktables that weave in and out of the main expanded corridor.
                    Coordinating these custom desks and workstations in the open office was my primary responsibility. The focus was to ensure that traders had everything they needed within arm’s reach of their workspace while still maintaining a cohesive environment.
                    The custom concrete desk needed to remain functional for various modes of working and sitting. Each trader had several monitors, printers, and required storage for their daily reports.</p>
            </div>
            <div className="process">
                <h3>The Process</h3>
                <div className="dataPlans">
                    <img src={ThirdPointDataPlan} alt="Plan of traders desks" width="400px" height="300px" />
                    <img src={ThirdPointDataPlan2} alt="Plan section of traders desks" width="400px" height="300px" />
                </div>
                <div className="dataElevs">
                    <img src={ThirdPointDataStations} alt="Section of traders desks" width="300px" height="175px" />
                    <img src={ThirdPointData} alt="Elevation of traders desks" width="1000px" height="200px" />
                </div>
                <p>The design team scheduled a series of workshops with the client representative and a spokesperson from each department. This allowed us to gather a clearer understanding of how they used their desks in the past and identify what did and didn’t work.
                    We mapped out the requirements and constraints using project management tools similar to Agile methodologies, allowing us to iterate and refine our approach more efficiently.
                    We sketched out ideas for the placement of various components within the desks and used design software, akin to wireframing tools in UI/UX design, to visualize and iterate on our concepts to streamline their workflows.
                    We then coordinated with mechanical and electrical engineers, as well as the lighting designer, to ensure that our custom perforated lighting strategy integrated effectively with the screens. </p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <div>
                    <img src={ThirdPointDataWall} alt="3D rendering of traders desk and data wall" width="800px" height="400px" />
                </div>
                <p>The above image shows the final result of the collaborative efforts between multiple client representatives and the architectural design team. The CEO requested that top-level traders be positioned directly outside his office, with screens dedicated to tracking global financial data.
                    He aimed to create a fully integrated and visible space to foster an open and collaborative environment. The artwork on the office wall, sourced from his personal collection, was intentionally incorporated throughout the space to inspire creativity.
                    Additionally, the conference table in front of the screens serves as an open meeting area, further emphasizing the goal of facilitating teamwork and collaboration.</p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <div>
                    <img src={ThirdPointOffice} alt="3D rendering of typical individual office" width="800px" height="400px" />
                </div>
                <p>Working with a client who not only had a compelling vision for implementing strong design concepts but also understood the requirements of that process was a privilege.
                    As designers, we leverage research and our lived experiences to craft a narrative through architectural elements. This project allowed me to explore and redefine wellness while designing solutions at multiple levels.
                    I had the opportunity to collaborate with external consultants for the first time, gaining insight into how they interpret our construction documents. This experience enhanced my understanding of the specific information needed by each party.
                    The client’s generosity in integrating his personal collection into the design and the thoughtful approach to incorporating it will be an experience I’ll cherish forever.</p>
            </div>
            <div className="status">
                <h3>Project Status</h3>
                <h6>Completed 2019</h6>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={1100}>
                        <Carousel.Item>
                            <img src={ThirdPointPhoto1} alt="Photo of open desks within corridor" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ThirdPointPhoto2} alt="Photo of Hydration Station" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ThirdPointPhoto3} alt="Photo of Hydration Station with corridor" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={ThirdPointPhoto4} alt="Detail Photo of custom grooves at hydration station" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div>
    )
};