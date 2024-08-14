import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProjectArch.css';
import BackToTop from '../components/BackToTop';

//imported images
import canalCurrent from '../assets/images/ArchImages/Canal_Current.jpg';
import canalSketch from '../assets/images/ArchImages/Canal_LibrarySketch.jpg';
import canalAfter from '../assets/images/ArchImages/Canal_AxonAfter.jpg';
import canalConcepts from '../assets/images/ArchImages/Canal_Catalog.jpg';
import canalViewFromBridge from '../assets/images/ArchImages/Canal_ViewFromBridge.png';
import canalBefore from '../assets/images/ArchImages/Canal_AxonBefore.jpg';
import canalBallNoWater from '../assets/images/ArchImages/Canal_BasketballNoWater.jpg';
import canalBallWithWater from '../assets/images/ArchImages/Canal_BasketballWithWater.jpg';
import canalMap from '../assets/images/ArchImages/Canal_Map.jpg';
import canalLibraryWithWater from '../assets/images/ArchImages/Canal_LibraryWithWater.jpg';
import canalOverall from '../assets/images/ArchImages/Canal_OverallWithPeople.png';
import canalLibrarySitePlan from '../assets/images/ArchImages/Canal_LibrarySitePlan.jpg';
import canalLibrarySection1 from '../assets/images/ArchImages/Canal_LibrarySection1.jpg';
import canalLibrarySection2 from '../assets/images/ArchImages/Canal_LibrarySection2.jpg';
import canalLibrarySection3 from '../assets/images/ArchImages/Canal_LibrarySection3.jpg';
import canalLibraryPlan1 from '../assets/images/ArchImages/Canal_LibraryPlan.jpg';
import canalLibraryPlan2 from '../assets/images/ArchImages/Canal_LibraryPlan2.jpg';
import canalLibraryAxon from '../assets/images/ArchImages/Canal_LibraryAxon.jpg';
import canalLibraryRender2 from '../assets/images/ArchImages/Canal_LibraryRender2.jpg';
import canalLibraryRender3 from '../assets/images/ArchImages/Canal_LibraryRender3.jpg';
import canalSketch1 from '../assets/images/ArchImages/Canal_Sketch1.jpg';
import canalProgram from '../assets/images/ArchImages/Canal_ProgramBars.jpg';
import canalLibrarySketch from '../assets/images/ArchImages/Canal_LibrarySketch.jpg';
import canalLandUseRec from '../assets/images/ArchImages/Canal_LandUseRec.jpg';
import canalLandUseMixed from '../assets/images/ArchImages/Canal_LandUseMixed.jpg';
import canalDiagram04 from '../assets/images/ArchImages/Canal_Diagram04.png';
import canalConceptDiagram from '../assets/images/ArchImages/Canal_ConceptDiagram.jpg';
import canalClassroomNoWater from '../assets/images/ArchImages/Canal_ClassroomNoWater.jpg';
import canalClassroomWithWater from '../assets/images/ArchImages/Canal_ClassroomFilled.jpg';
import canalAerial from '../assets/images/ArchImages/Canal_Aerial.jpg';


export default function CampusCanal() {
  return (
    <div className="container">
      <div className="black pullDown">
        <div className="blackText riseUp">
          <h1>Campus Canal</h1>
        </div>
      </div>
      <div className="head">
        <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
        <img src={canalAerial} alt='Diagram of landmarks in Atlantic City, NJ' width='1300px' height='700px' className='images' />
      </div>
      <div className="challenge">
        <h3>The Challenge</h3>
        <img src={canalCurrent} alt="Sketch of Proposed Open Canal" width='800px' height='500px' />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus eum qui reprehenderit laudantium aliquam necessitatibus impedit voluptas recusandae aliquid distinctio nisi architecto, neque voluptatem, asperiores quo, blanditiis voluptatum. Dolore.
          Dolore voluptatum provident aliquid ex recusandae nobis veniam eius alias, enim harum asperiores tempore natus ipsum tempora voluptatibus voluptas porro optio odio, illo accusantium neque nostrum illum quidem accusamus. Tenetur!
          Excepturi ut esse nam quia laudantium ullam dolorum rerum magnam quidem, natus animi voluptatem nobis aperiam blanditiis, fugiat fuga doloremque maxime eius, necessitatibus error. Minima deleniti magni aliquid illo consequuntur.
          Exercitationem ratione nam doloremque odio magni recusandae dolores iure consequuntur ullam maiores corrupti consequatur esse rerum, et maxime temporibus aspernatur obcaecati qui sunt reiciendis beatae atque. Recusandae aperiam eos magnam.</p>
        <div className='workPaired'>
          <img src={canalConceptDiagram} alt="Sketch of Proposed Open Canal" width='1000px' height='500px' />
          <div className='scope centered'>
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
        <div className="problemImgs">
          <div className="landUse">
            <img src={canalLandUseMixed} alt='Diagram of Mixed Use Locations in the city' width='800px' height='600px' className='imgBorder' />
            <img src={canalLandUseRec} alt='Diagram of Mixed Use Locations in the city' width='800px' height='600px' />
          </div>
          {/* <img src={canalBefore} alt="Diagram of Current Conditions" width='500px' height='350px' /> */}
        </div>
        <p>Talk about how this place is a food desert and has several schools on Baltic Ave. Cum, eius ad beatae perferendis vero ex velit quaerat. Laboriosam minima ex, nostrum repudiandae soluta natus officia, perferendis deleniti quidem tenetur molestiae?
          Nam aut, dicta voluptatem ipsa ea voluptates fugit blanditiis adipisci quasi culpa labore nihil. Ipsam maiores, et aperiam voluptatem recusandae quo ipsum debitis, omnis odio eveniet cum, dolorum iure ducimus.
          Sunt nulla harum, tempore saepe cum assumenda molestias, placeat sint, doloremque eveniet molestiae modi velit quo veniam. Accusamus laboriosam, blanditiis unde, minus cum optio id excepturi tempore, rem consectetur sint.
          Impedit quia error aut eos architecto alias repudiandae consequuntur minima suscipit sint autem ad, vero vitae eius possimus. Dolorum inventore iusto nisi quam ea explicabo modi a debitis! Voluptatibus, officiis.</p>
      </div>
      <div className="process">
        <p className='overview'><b>Reimagine the existing infrastructure to be a greater resource to the community.</b></p>
        <h3>The Process</h3>
        <div className='processImgs'>
          <img src={canalConcepts} alt='Concept Sketches' width='800px' height='800px' />
          <img src={canalProgram} alt="" width='300px' height='200px' />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ex reiciendis deserunt adipisci praesentium animi aperiam veritatis, possimus saepe, amet quasi aliquid quibusdam iusto blanditiis fuga eligendi, quam placeat natus.
          Minima provident cum in i consequuntur fugiat nesciunt est voluptatum cupiditate, fugit commodi non aut autem eveniet molestiae, dolore eum fuga, nemo omnis quasi!
          Alias aliquid cupiditate temporeuiam quam amet asperiores qui dolores rem reiciendis blanditiis ipsam a voluptatibus dignissimos numquam accusamus modi? At dolores facilis repellendus?
          Neque, rerum est hic, quam officia necessitatibus culpa in illo dolor tenetur assumenda quidem dolorem nostrum consequatur pariatur voluptates, adipisci quae expedita et. Voluptate sint, repellat explicabo dolore nihil commodi!
          Doloremque, repellat vel voluptate, laboriosam quas, reiciendis possimus soluta provident perferendis tempora quos porro eveniet alias? Quos aut modi voluptatum molestias possimus voluptatem nesciunt dolor quo? Quo esse repellat expedita!</p>
      </div>
      <div className="solution">
        <h3>The Solution</h3>
        <div className='solutionGraphic'>
          <img src={canalBefore} alt="Diagram of Current Conditions" width='500px' height='350px' />
          <i class="bi bi-arrow-right"></i>
          <img src={canalAfter} alt="Diagram of Proposed Conditions" width='500px' height='350px' />
        </div>
        <div className="carousel">
          <Carousel fade controls={false} wrap={true} interval={800}>
            <Carousel.Item>
              <img src={canalBallNoWater} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
            <Carousel.Item>
              <img src={canalBallWithWater} alt="..." width='1300px' height='700px' />
            </Carousel.Item>
          </Carousel>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing eli natus, at voluptatibus? Exercitationem consectetur a nesciunt, eum alias, veniam quibusdam quisquam earum suscipit, aspernatur id quas eaque numquam illum.
          Minima perspiciatis alias amet, eius aspernatur hic, a dolorum repellat, voluptatum quis soluta. Adipisci exercitationem quibusdam eos provident quasi? Officia qui magnam eos commodi consectetur neque possimus quisquam. Voluptas, cumque?
          Officiis adipisci cumque aliquid, laudantium nesciunt libero, ipsam exercitationem provident possimus modi amet quas unde eaque quisquam quidem facilis omnis corrupti maxime, fugiat cupiditate tenetur aspernatur illo expedita dolorem! Ab.
          Ex recusandae, culpa id atque, repudiandae aliquid facilis distinctio impedit accusamus dicta cumque error exercitationem corrupti adipisci non modi corporis ratione, suscipit amet. Quas sint id error, esse laudantium omnis.
          A est quaerat optio quam, velit dolore eveniet commodi nesciunt vitae, officia quos repudiandae cupiditate incidunt ipsa! Perspiciatis quo omnis, harum amet aliquam fugiat neque, dolorum sequi reprehenderit, sapiente adipisci.</p>
        <p className='overview'><b>A city that's turned it's back to the environment.</b></p>
      </div>
      <div className="lessons">
        <h3>Lessons Learned</h3>
        <img src={canalOverall} alt='Overall' width='1300px' height='700px' />
        <img src={canalClassroomWithWater} alt='' width='1300px' height='700px' />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum hic accusamus eos id minima perferendis quos, at officia quidem. Quisquam magnam odit facere exercitationem quod accusantium vitae? Minima, aspernatur dolorem?
          Voluptate iure fuga similique dolorum, excepturi placeat officia suscipit laborum vero blanditiis ut perferendis reiciendis cum neque ab eos omnis consectetur nisi voluptates quae inventore at facere alias? Saepe, voluptatem?
          Libero rem explicabo quisquam enim quidem quod ut deleniti eos molestiae quos accusantium magnam blanditiis atque asperiores, nam voluptatibus ratione ad! Esse, modi? Neque provident commodi quisquam aut ut eius?</p>
      </div>
      <div className="caseStudy">
        <h1>Case Study</h1>
        <img src={canalLibraryWithWater} alt='Section Through Library' width='850px' height='100px' className='case1' />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sunt facilis id enim necessitatibus ab ullam incidunt commodi obcaecati cumque, ipsum veritatis illo delectus iusto eveniet, deleniti harum rerum quidem?
          In eaque asperiores deleniti est. Dolores dolor repellat earum. Labore quibusdam voluptas ut adipisci expedita eos maxime ad perferendis! Magni cupiditate sed sunt explicabo aliquid laboriosam tempore, blanditiis ex aliquam.
          Debitis natus minus quia exercitationem harum. Ipsa unde nisi distinctio architecto eligendi accusantium hic molestias maxime odit? Magnam cum, doloribus, eos fuga, corrupti minus quos repellendus qui ea similique molestiae?
          Tenetur rerum rem assumenda, nemo culpa quibusdam modi exercitationem saepe adipisci veniam odit dolorum accusamus inventore officiis at necessitatibus maxime qui quis voluptatem distinctio reprehenderit illo voluptates? Quasi, nisi distinctio!</p>
        <img src={canalLibrarySitePlan} alt='' width='400px' height='300px' />
      </div>
      <div className='sections'>
        <img src={canalLibrarySection1} alt='' />
        <img src={canalLibrarySection2} alt='' />
        <img src={canalLibrarySection3} alt='' />
      </div>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi inventore explicabo accusantium. At iste a error dolor? Possimus, ad fugit! Nobis aliquid neque ducimus consequuntur dolor, quos fuga cum quis.
        Debitis repellat incidunt distinctio, odio ratione, et error aliquid ipsam vero eius tempora maxime dignissimos consectetur voluptates aut asperiores placeat omnis doloremque quo eos molestiae recusandae minus. Consequatur, quisquam nulla!
        Doloremque, earum sequi! Saepe quaerat cupiditate magnam nobis alias obcaecati mollitia voluptates sequi hic, omnis dignissimos natus est explicabo! Dolorum fuga autem, illum sapiente molestiae magni nesciunt inventore perspiciatis explicabo.</p>
      <img src={canalLibraryAxon} alt='' width='600px' height='500px' />
      <BackToTop />
    </div>
  )
};