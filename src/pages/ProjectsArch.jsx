import React, { useEffect } from "react";
import ArchProject from "../components/ArchProject";
import Back from "../components/Back";
import BackToTop from "../components/BackToTop";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectsArch.css";

//imported images
import ThirdPoint from "../assets/images/ArchImages/ThirdPoint_Overall.jpg";
import CampusCanal from "../assets/images/ArchImages/Canal_OverallWithPeople.png";
import OMH from "../assets/images/ArchImages/OMH_234Dune.jpg";
import Penn1 from "../assets/images/ArchImages/Penn1_CoEntry.jpg";
import Footer from "../components/Footer";

export default function ProjectsArch() {
  const title = useEffect(() => {
    document.title = "Architecture Projects | Abigail Figaro";
  }, []);

  return (
    <div className="archProjectsPage">
      <div className="headBlock pulldown">
        <div className="headText">
          <h1>Architecture Projects</h1>
          <h6>Featured projects showcasing my expertise in high-end, commerical interiors and more!</h6>
        </div>
        <div className="backBtn">
          <Back />
        </div>
      </div>
      <div className="archContainer">
        <ul className="archItems">
          <ArchProject
            src={OMH}
            text="Private Residence"
            path="/projects/architecture/OMH"
          />
          <ArchProject
            src={Penn1}
            text="Coworking Space"
            path="/projects/architecture/Penn1"
          />
          <ArchProject
            src={ThirdPoint}
            text="Financial Office"
            path="/projects/architecture/ThirdPoint"
          />
          <ArchProject
            src={CampusCanal}
            text="Thesis Project"
            path="/projects/architecture/CampusCanal"
          />
        </ul>
      </div>
      <BackToTop />
      <Footer />
    </div>
  )
};