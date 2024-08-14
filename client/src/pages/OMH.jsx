import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import BackToTop from '../components/BackToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectArch.css';

//images
import OMHBedroom from '../assets/images/ArchImages/OMH_230Bedroom.jpg';
import OMHCircularBar from '../assets/images/ArchImages/OMH_230CircularBar.jpg';
import OMHCircularBar2 from '../assets/images/ArchImages/OMH_230CircularBar2.jpg';
import OMH230Entry from '../assets/images/ArchImages/OMH_230Entry.jpg';
import OMH230Entry4 from '../assets/images/ArchImages/OMH_230Entry4.jpg';
import OMH230Entry5 from '../assets/images/ArchImages/OMH_230Entry5.jpg';
import OMHMotherBedroom from '../assets/images/ArchImages/OMH_230MotherBedroom2.jpg';
import OMHSpa from '../assets/images/ArchImages/OMH_230Spa.jpg';
import OMHSpaOverhead from '../assets/images/ArchImages/OMH_230SpaOverhead.jpg';
import OMHSpaSection from '../assets/images/ArchImages/OMH_230SpaSection.jpg';
import OMHDune from '../assets/images/ArchImages/OMH_234Dune.jpg';
import OMHKitchen from '../assets/images/ArchImages/OMH_234Kitchen3.jpg';
import OMHPool1 from '../assets/images/ArchImages/OMH_234Pool1.jpg';
import OMHPool3 from '../assets/images/ArchImages/OMH_234Pool2-2.jpg';
import OMHWestOverhead from '../assets/images/ArchImages/OMH_234WestElevationOverhead.jpg';
import OMHFullOverhead2 from '../assets/images/ArchImages/OMH_FullOverhead2.jpg';
import OMHSpaPlan from '../assets/images/ArchImages/OMH_SpaPlan.jpg';
import OMHSpaSection3 from '../assets/images/ArchImages/OMH_SpaSection3.jpg';
import OMHSpaSection2 from '../assets/images/ArchImages/OMH_SpaSection2.jpg';
import OMHSpaSection1 from '../assets/images/ArchImages/OMH_SpaSection1.jpg';
import OMHSiteDiagram from '../assets/images/ArchImages/OMH_SiteDiagram.jpg';
import OMHLiving2 from '../assets/images/ArchImages/OMH_234Living2.jpg';
import OMHMaster from '../assets/images/ArchImages/OMH_234Master.jpg';
import OMHMedia from '../assets/images/ArchImages/OMH_234Media.jpg';
import OMHOffice from '../assets/images/ArchImages/OMH_234Office.jpg';
import OMHMotherBed from '../assets/images/ArchImages/OMH_230MotherBed.jpg';
import OMH230Living from '../assets/images/ArchImages/OMH_230Living.jpg';
import OMH230Living2 from '../assets/images/ArchImages/OMH_230Living2.jpg';
import OMH230Library from '../assets/images/ArchImages/OMH_230Library.jpg';
import OMH230Roof from '../assets/images/ArchImages/OMH_230Roof.jpg';
import OMH230Overall from '../assets/images/ArchImages/OMH_230Overall.jpg';

export default function OMH() {
    return (
        <div className='container'>
            <div className="black pullDown">
                <div className="blackText riseUp">
                    <h1>OMH</h1>
                </div>
            </div>
            <div className="head">
                <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
                <img src={OMHDune} alt='3D Rendering of Dune at Entry' width='1300px' height='700px' className='images' />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <img src={OMHSiteDiagram} alt="" width='800px' height='400px' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
                    Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
                <div className="workPaired">
                    <img src={OMHSpaPlan} alt="" width='800px' height='400px' />
                    <div className="scope">
                        <h4>Scope Of Work</h4>
                        <ul className="roles">
                            <li><i class="bi bi-chevron-compact-right"></i>User Research</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Future Vision</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Concept Development</li>
                            <li><i class="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Construction Documents</li>
                            <li><i class="bi bi-chevron-compact-right"></i>External Consultant Coordination</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <img src={OMHSpa} alt="" width='800px' height='400px' className='image' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, s beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
                <img src={OMHSpaSection} alt="" width='800px' height='400px' className='image' />
            </div>
            <div className="process">
                <p className='overview'><b>Reimagine the existing infrastructure to be a greater resource to the community.</b></p>
                <h3>The Process</h3>
                <div className="sections">
                    <img src={OMHSpaSection1} alt="" width='200px' height='350px' />
                    <img src={OMHSpaSection2} alt="" width='200px' height='350px' />
                    <img src={OMHSpaSection3} alt="" width='200px' height='350px' />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur as doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <p className='overview'><b>Reimagine the existing infrastructure to be a greater resource to the community.</b></p>
                <img src={OMHSpaOverhead} alt="" width='800px' height='400px' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <img src={OMHFullOverhead2} alt="" width='800px' height='500px' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adieatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="status">
                <h3>Project Status</h3>
                <h6>Coming 2026</h6>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={1100}>
                        <Carousel.Item>
                            <img src={OMH230Entry5} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Entry4} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHLiving2} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHKitchen} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMedia} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMaster} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHOffice} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHWestOverhead} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHPool3} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHBedroom} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Entry} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Living} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Living2} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHCircularBar} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHCircularBar2} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMotherBedroom} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHMotherBed} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Library} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Roof} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMH230Overall} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={OMHFullOverhead2} alt="" width='1300px' height='700px' />
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <BackToTop />
        </div >
    )
};
