import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './ProjectArch.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//images
import ThirdPointData from '../assets/images/ArchImages/ThirdPoint_DataElev.jpg';
import ThirdPointDataPlan from '../assets/images/ArchImages/ThirdPoint_DataPlan.jpg';
import ThirdPointDataPlan2 from '../assets/images/ArchImages/ThirdPoint_DataPlan2.jpg';
import ThirdPointDataStations from '../assets/images/ArchImages/ThirdPoint_DataStations.jpg';
import ThirdPointDataWall from '../assets/images/ArchImages/ThirdPoint_DataWall.jpg';
import ThirdPointLevel49 from '../assets/images/ArchImages/ThirdPoint_FloorPlanLevel49.jpg';
import ThirdPointLevel50 from '../assets/images/ArchImages/ThirdPoint_FloorPlanLevel50.jpg';
import ThirdPointLevel51 from '../assets/images/ArchImages/ThirdPoint_FloorPlanLevel51.jpg';
import ThirdPointHydro from '../assets/images/ArchImages/ThirdPoint_HydrationStation.jpg';
import ThirdPointHydroSection from '../assets/images/ArchImages/ThirdPoint_HydroSection.jpg';
import ThirdPointOverall from '../assets/images/ArchImages/ThirdPoint_Overall.jpg';
import ThirdPointPrint from '../assets/images/ArchImages/ThirdPoint_PrintStation.jpg';
import ThirdPointOffice from '../assets/images/ArchImages/ThirdPoint_PrivateOffice.jpg';
import ThirdPointCloset from '../assets/images/ArchImages/ThirdPoint_Closet.jpg';
import ThirdPointDraws from '../assets/images/ArchImages/ThirdPoint_Draws.jpg';
import ThirdPointIntegratedSink from '../assets/images/ArchImages/ThirdPoint_IntegratedSink.jpg';
import ThirdPointGrip from '../assets/images/ArchImages/ThirdPoint_Grip.jpg';
import ThirdPointSink from '../assets/images/ArchImages/ThirdPoint_Sink.jpg';
import ThirdPointPhoto1 from '../assets/images/ArchImages/ThirdPoint_Photo1.jpg';
import ThirdPointPhoto2 from '../assets/images/ArchImages/ThirdPoint_Photo2.jpg';
import ThirdPointPhoto3 from '../assets/images/ArchImages/ThirdPoint_Photo3.jpg';
import ThirdPointPhoto4 from '../assets/images/ArchImages/ThirdPoint_Photo4.jpg';
import BackToTop from '../components/BackToTop';

export default function ThirdPoint() {
  return (
    <div className='container'>
      <div className="black pullDown">
        <div className="blackText riseUp">
          <h1>Third Point</h1>
        </div>
      </div>
      <div className="head">
        <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
        <img src={ThirdPointOverall} alt="" width='1300px' height='700px' className='images' />
      </div>
      <div className="challenge">
        <h3>The Challenge</h3>
        <div className="ThirdPointSections">
          <img src={ThirdPointLevel49} alt="" width='400px' height='400px' />
          <img src={ThirdPointLevel50} alt="" width='400px' height='400px' />
          <img src={ThirdPointLevel51} alt="" width='400px' height='400px' />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eum qui reprehenderit laudantium aliquam necessitatibus impedit voluptas recusandae aliquid distinctio nisi architecto, neque voluptatem, asperiores quo, blanditiis voluptatum. Dolore.
          Dolore voluptatum provident aliquid ex recusandae nobis veniam eius alias, enim harum asperiores tempore natus ipsum tempora voluptatibus voluptas porro optio odio, illo accusantium neque nostrum illum quidem accusamus. Tenetur!
          Excepturi ut esse nam quia laudantium ullam dolorum rerum magnam quidem, natus animi voluptatem nobis aperiam blanditiis, fugiat fuga doloremque maxime eius, necessitatibus error. Minima deleniti magni aliquid illo consequuntur.
          Exercitationem ratione nam doloremque odio magni recusandae dolores iure consequuntur ullam maiores corrupti consequatur esse rerum, et maxime temporibus aspernatur obcaecati qui sunt reiciendis beatae atque. Recusandae aperiam eos magnam.</p>
        <div className="work">
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
        <img src={ThirdPointDataPlan} alt="" width='400px' height='300px' className='problemImg' />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
          Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
          Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
          Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
      </div>
      <div className="process">
        <h3>The Process</h3>
        <div className='dataPlans'>
          <img src={ThirdPointDataPlan} alt="" width='400px' height='300px' />
          <img src={ThirdPointDataPlan2} alt="" width='400px' height='300px' />
        </div>
        <div className='dataElevs'>
          <img src={ThirdPointDataStations} alt="" width='300px' height='175px' />
          <img src={ThirdPointData} alt="" width='1000px' height='200px' />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
          Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
          Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
          Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
      </div>
      <div className="solution">
        <h3>The Solution</h3>
        <div>
          <img src={ThirdPointDataWall} alt="" width='800px' height='400px' />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
          Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
          Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
          Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
      </div>
      <div className="lessons">
        <h3>Lessons Learned</h3>
        <div>
          <img src={ThirdPointOffice} alt="" width='800px' height='400px' />
        </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat fuga consequatur nulla blanditiis cumque, voluptatem, expedita aspernatur reiciendis a sint aperiam quae. Molestias nesciunt aliquam iure veritatis, minima repellendus? Odio.
          Alias accusamus eos quisquam, omnis, adipisci maxime, aspernatur sequi numquam quasi delectus ipsa temporibus impedit? Corrupti fuga quis non maiores dolorem aliquam molestiae. Ab, sunt placeat ducimus aspernatur laborum autem?
          Ea labore, qui optio ex repellendus temporibus beatae eligendi natus asperiores at, molestias fugiat ipsum magnam architecto quidem aspernatur maxime aliquid eum nemo quo quasi ipsam! Suscipit culpa expedita molestias?
          Rerum, omnis. Voluptatem molestiae officiis debitis repellendus doloremque vel quaerat commodi quasi sed id corrupti labore, repudiandae, illo ad sequi odit delectus! Consequatur voluptas optio corporis labore alias aliquid iste.</p>
      </div>
      <div className="status">
        <h3>Project Status</h3>
        <h6>Completed</h6>
        <div className="carousel">
          <Carousel fade controls={false} wrap={true} interval={1100}>
            <Carousel.Item>
              <img src={ThirdPointPhoto1} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={ThirdPointPhoto2} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={ThirdPointPhoto3} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={ThirdPointPhoto4} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <BackToTop />
    </div>
  )
};