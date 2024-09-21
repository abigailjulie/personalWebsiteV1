import React from "react";
import Carousel from "react-bootstrap/Carousel";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectArch.css";

//images
import OMHBedroom from "../assets/images/ArchImages/OMH_230Bedroom.jpg";
import OMHCircularBar from "../assets/images/ArchImages/OMH_230CircularBar.jpg";
import OMHCircularBar2 from "../assets/images/ArchImages/OMH_230CircularBar2.jpg";
import OMH230Entry from "../assets/images/ArchImages/OMH_230Entry.jpg";
import OMH230Entry4 from "../assets/images/ArchImages/OMH_230Entry4.jpg";
import OMH230Entry5 from "../assets/images/ArchImages/OMH_230Entry5.jpg";
import OMHMotherBedroom from "../assets/images/ArchImages/OMH_230MotherBedroom2.jpg";
import OMHSpa from "../assets/images/ArchImages/OMH_230Spa.jpg";
import OMHSpaOverhead from "../assets/images/ArchImages/OMH_230SpaOverhead.jpg";
import OMHSpaSection from "../assets/images/ArchImages/OMH_230SpaSection.jpg";
import OMHDune from "../assets/images/ArchImages/OMH_234Dune.jpg";
import OMHKitchen from "../assets/images/ArchImages/OMH_234Kitchen3.jpg";
import OMHPool3 from "../assets/images/ArchImages/OMH_234Pool2-2.jpg";
import OMHWestOverhead from "../assets/images/ArchImages/OMH_234WestElevationOverhead.jpg";
import OMHFullOverhead2 from "../assets/images/ArchImages/OMH_FullOverhead2.jpg";
import OMHSpaPlan from "../assets/images/ArchImages/OMH_SpaPlan.jpg";
import OMHSpaSection3 from "../assets/images/ArchImages/OMH_SpaSection3.jpg";
import OMHSpaSection2 from "../assets/images/ArchImages/OMH_SpaSection2.jpg";
import OMHSpaSection1 from "../assets/images/ArchImages/OMH_SpaSection1.jpg";
import OMHSiteDiagram from "../assets/images/ArchImages/OMH_SiteDiagram.jpg";
import OMHLiving2 from "../assets/images/ArchImages/OMH_234Living2.jpg";
import OMHMaster from "../assets/images/ArchImages/OMH_234Master.jpg";
import OMHMedia from "../assets/images/ArchImages/OMH_234Media.jpg";
import OMHOffice from "../assets/images/ArchImages/OMH_234Office.jpg";
import OMHMotherBed from "../assets/images/ArchImages/OMH_230MotherBed.jpg";
import OMH230Living from "../assets/images/ArchImages/OMH_230Living.jpg";
import OMH230Living2 from "../assets/images/ArchImages/OMH_230Living2.jpg";
import OMH230Library from "../assets/images/ArchImages/OMH_230Library.jpg";
import OMH230Roof from "../assets/images/ArchImages/OMH_230Roof.jpg";
import OMH230Overall from "../assets/images/ArchImages/OMH_230Overall.jpg";

export default function OMH() {
    return (
        <div className="container">
            <div className="black pullDown">
                <div className="blackText">
                    <h1>OMH</h1>
                </div>
            </div>
            <div className="head">
                <p className="overview">A house carved out of a dune</p>
                <img src={OMHDune} alt="3D Rendering of man-made dune at Entry" width="1300px" height="700px" className="images" />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <img src={OMHSiteDiagram} alt="Diagram of site plan" width="800px" height="400px" />
                <p>This private residence was the second residential project ever commissioned by Architecture plus Information. Located in the quiet suburbs of Montauk, NY, the owner, a repeat client and friend of the firm, sought to create a multi-property compound reminiscent of World War II bunkers. He owned the lot directly east of these two plots and wanted to design two houses—one main and one guest house—that appeared submerged in the landscape and hidden from the road. To achieve this, we partnered with local landscape designers to create a one-story drop in grade and build up the surrounding soil to form dunes that would “shelter” the houses. The guest house, or tree house, was designed as a lookout, elevated on “stilts” with a focus on transparency. Additionally, the guest house featured a sauna and Hammam adjacent to the pool area. Developing and coordinating this spa area was my primary role and main focus on the project.</p>
                <div className="workPaired">
                    <img src={OMHSpaPlan} alt="Plan drawing of Spa and Pool area" width="800px" height="400px" />
                    <div className="scope">
                        <h4>Scope Of Work</h4>
                        <ul className="roles">
                            <li><i className="bi bi-chevron-compact-right"></i>User Research</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Future Vision</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Concept Development</li>
                            <li><i className="bi bi-chevron-compact-right"></i>High Fidelity Prototyping</li>
                            <li><i className="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Construction Documents</li>
                            <li><i className="bi bi-chevron-compact-right"></i>Collaboration with Engineering Team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <img src={OMHSpa} alt="Side profile of spa area and guest house" width="800px" height="400px" className="image" />
                <p>The spa area consists of three separate spaces: a restroom, a hammam, and a sauna. Similar to the main house, these spaces were designed to feel grounded in the earth, positioned about 2 feet below grade.
                    To maintain maximum natural light while preserving privacy, we incorporated a skylight in the sauna and a large window in the hammam.
                    I was responsible for collaborating with the spa consultant to ensure that the specified materials would effectively maintain proper heat and manage moisture.</p>
                <img src={OMHSpaSection} alt="Section perspective view into the saune and hammam" width="800px" height="400px" className="image" />
            </div>
            <div className="process">
                <p className="overview">seamlessly integrated into the architectural design</p>
                <h3>The Process</h3>
                <div className="sections">
                    <img src={OMHSpaSection1} alt="Wall section at Hammam door" width="200px" height="350px" />
                    <img src={OMHSpaSection2} alt="Wall section at sauna door" width="200px" height="350px" />
                    <img src={OMHSpaSection3} alt="Wall section at sauna seating" width="200px" height="350px" />
                </div>
                <p>After the initial kickoff meeting with the spa consultant, we meticulously reviewed the detailed specifications for the specialized skylight, seating, sink, and coal basin used in the hammam.
                    I created wireframes of the wall sections and developed representational elements within our 3D model, rendering them to ensure alignment with the design intent and to validate functionality with the client.
                    Throughout this process, I employed CI/CD principles to streamline the integration of these elements, allowing for iterative testing and refinement with the spa consultant and design team.
                    Additionally, I collaborated with mechanical, electrical, and plumbing consultants to ensure that their systems were seamlessly integrated into the architectural design, avoiding any conflicts and ensuring optimal performance.</p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <p className="overview">interconnected spaces that foster wellness</p>
                <img src={OMHSpaOverhead} alt="Overhead view of spa area and guest house" width="800px" height="400px" />
                <p>The result was a series of interconnected spaces that fostered meditation in a serene environment. By leveraging reusable components and design patterns from other areas of the project, we created a unique user experience for the spa.
                    Placing portions of the spa on the exterior behind custom shades preserved the connection to nature while maintaining privacy. Successfully integrating these elements—akin to implementing APIs and managing state in full-stack development—allowed
                    us to create immersive environments while ensuring cohesive design and material consistency throughout the larger compound, ultimately delivering a result that pleased the client.</p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <img src={OMHFullOverhead2} alt="Overhead view of all client properties in rendered context" width="800px" height="500px" />
                <p>The main takeaway for me was the experience of collaborating with highly specialized consultants and manufacturers within the Montauk environment. Each detail and product required in-depth knowledge and specificity of temperature and moisture.
                    Our primary challenge as architects was to integrate these components in a way that adhered to the project's conceptual design while meeting industry standards and local code regulations.
                    Working in a small architecture team, with just three designers under the project manager, gave me a foundational understanding of how to effectively manage and integrate various elements to ensure cohesive functionality and compliance.</p>
            </div>
            <div className="status">
                <h3>Project Status</h3>
                <h6>Coming Soon 2026</h6>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={2000}>
                        <Carousel.Item>
                            <img src={OMH230Entry5} alt="3D Rendering of dune entry at main house" width="1300px" height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Entry4} alt="3D Rendering of front door to main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHLiving2} alt="3D Rendering of living room at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHKitchen} alt="3D Rendering of kitchen at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMedia} alt="3D Rendering of media room at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMaster} alt="3D Rendering of master bedroom at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHOffice} alt="3D Rendering of office at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHWestOverhead} alt="3D Rendering of rooftop at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHPool3} alt="3D Rendering of pool at main house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHBedroom} alt="3D Rendering of lower level at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Entry} alt="3D Rendering of entry at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Living} alt="3D Rendering of living room at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Living2} alt="3D Rendering of dining area at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHCircularBar} alt="3D Rendering of circular bar closed at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHCircularBar2} alt="3D Rendering of circular bar open at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMotherBedroom} alt="3D Rendering of bedroom at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMotherBed} alt="3D Rendering of mother-in-law suite at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Library} alt="3D Rendering of library at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Roof} alt="3D Rendering of rooftop at guest house" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Overall} alt="3D Rendering guest house overall" width="1300px" height="700px" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHFullOverhead2} alt="3D Rendering guest house overall in context" width="1300px" height="700px" />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <BackToTop />
            <Footer />
        </div >
    )
};