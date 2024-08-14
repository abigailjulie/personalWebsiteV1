import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectArch.css';
import BackToTop from '../components/BackToTop';


//images
import penn1Diagram from '../assets/images/ArchImages/Penn1_Diagram1.jpg';
import penn1Diagram2 from '../assets/images/ArchImages/Penn1_Diagram2.jpg';
import penn1ThirdFloorPlan from '../assets/images/ArchImages/Penn1_ThirdFloorPlan.jpg';
import penn1FinalRender from '../assets/images/ArchImages/Penn1_CoEntry.jpg';
import penn1Node1 from '../assets/images/ArchImages/Penn1_WorkSample1.jpg';
import penn1Node2 from '../assets/images/ArchImages/Penn1_WorkSample2.jpg';
import penn1Node3 from '../assets/images/ArchImages/Penn1_WorkSample3.jpg';
import penn1Node4 from '../assets/images/ArchImages/Penn1_WorkSample4.jpg';
import penn1Node5 from '../assets/images/ArchImages/Penn1_WorkSample5.jpg';
import penn1Node6 from '../assets/images/ArchImages/Penn1_WorkSample6.jpg';
import penn1Node7 from '../assets/images/ArchImages/Penn1_WorkSample7.jpg';
import penn1Node8 from '../assets/images/ArchImages/Penn1_WorkSample8.jpg';
import penn1Node9 from '../assets/images/ArchImages/Penn1_WorkSample9.jpg';
import penn1Node10 from '../assets/images/ArchImages/Penn1_WorkSample10.jpg';
import penn1Balcony00 from '../assets/images/ArchImages/Penn1_Balcony00.png';
import penn1Balcony01 from '../assets/images/ArchImages/Penn1_Balcony01.png';
import penn1Balcony02 from '../assets/images/ArchImages/Penn1_Balcony02.png';
import penn1Balcony03 from '../assets/images/ArchImages/Penn1_Balcony03.png';
import penn1Balcony04 from '../assets/images/ArchImages/Penn1_Balcony04.png';

export default function Penn1() {
    return (
        <div className='container'>
            <div className="black pullDown">
                <div className="blackText riseUp">
                    <h1>Penn 1 Plaza</h1>
                </div>
            </div>
            <div className="head">
                <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
                <img src={penn1ThirdFloorPlan} alt='Third Floor Plan Drawing' width='1300px' height='700px' className='images' />
            </div>
            <div className="challenge">
                <h3>The Challenge</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur repellendus non quo rem amet vitae ex! Accusamus, animi et. Explicabo beatae consequuntur quae eum, harum iusto minus magni asperiores doloremque!
                    Accusamus dignissimos voluptatem iste porro quo culpa ab laboriosam ex adipisci placeat perspiciatis asperiores saepe, provident autem nam voluptate? Laboriosam consequatur molestias quibusdam saepe error tempore dolor ex voluptatum aut.
                    Error laborum vitae quas illo, ex eius! Commodi optio voluptas itaque recusandae assumenda asperiores rerum aspernatur! Quibusdam, dolores delectus. Ratione ipsa libero commodi ipsam aliquid. Animi asperiores explicabo modi optio.
                    Numquam nobis quos, veritatis libero placeat nostrum quidem. Molestias facilis nemo quo. Iure possimus necessitatibus dolore! Officia earum iusto quos nihil! Perferendis eligendi labore, exercitationem sequi maiores hic accusantium nemo!</p>
                <div className="work">
                    <div className="scope">
                        <h4>Scope Of Work</h4>
                        <ul className="roles">
                            <li><i class="bi bi-chevron-compact-right"></i>User Research</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Office Analysis</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Stakeholder Workshop</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Future Vision</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Concept Development</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Research Analysis</li>
                            <li><i class="bi bi-chevron-compact-right"></i>High Fidelity Prototyping</li>
                            <li><i class="bi bi-chevron-compact-right"></i>3D Models, Rendering for Client Meeting</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Construction Documents</li>
                            <li><i class="bi bi-chevron-compact-right"></i>External Consultant Coordination</li>
                            <li><i class="bi bi-chevron-compact-right"></i>Collaboration with Engineering Team</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="problem">
                <h3>The Problem</h3>
                <div className="problemImgs">
                    <img src={penn1Diagram} alt="" width='300px' height='300px' />
                    <img src={penn1Diagram2} alt="" width='300px' height='300px' />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
                    Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="process">
                <p className='overview'><b>Reimagine the existing infrastructure to be a greater resource to the community.</b></p>
                <h3>The Process</h3>
                <div className='nodes'>
                    <img src={penn1Node2} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node1} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node3} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node6} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node5} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node8} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node4} className='node' alt="" width='400px' height='250px' />
                    <img src={penn1Node7} className='node' alt="" width='400px' height='250px' />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
                    Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="solution">
                <h3>The Solution</h3>
                <div className='solutionGraphic'>
                    <img src={penn1Node10} alt="" width='400px' height='240px' />
                    <img src={penn1Node9} alt="" width='800px' height='300px' />
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
                    Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
                <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
            </div>
            <div className="lessons">
                <h3>Lessons Learned</h3>
                <img src={penn1FinalRender} alt="" width='1300px' height='700px' />
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
                    Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
                    Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
                    Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
            </div>
            <div className="status">
                <h3>Project Status</h3>
                <h6>Phase 1 : Completed 2020</h6>
                <h6>Phase 2 : Under Construction</h6>
                <div className="carousel">
                    <Carousel fade controls={false} wrap={true} interval={1500}>
                        <Carousel.Item>
                            <img src={penn1Balcony00} alt="..." width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony01} alt="..." width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony02} alt="..." width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony03} alt="..." width='1300px' height='700px' />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={penn1Balcony04} alt="..." width='1300px' height='700px' />
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
        </div>
    )
};
