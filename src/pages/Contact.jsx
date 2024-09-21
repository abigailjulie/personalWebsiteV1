import React from "react";
import "../pages/ErrCont.css";
import VerticalStack from "../components/VerticalStack";
import Abigail from "../assets/images/AbigailPhoto.jpg";
import TextRotator from "../components/TextRotator";

export default function Contact() {
  return (
    <div className="errContContainer">
        <img src={Abigail} alt="Photo of Abigail"  className="selfImg" />
        <div className="errCont">
          <h1>Want More?</h1>
          <TextRotator toRotate={[`let's connect`]} period={200} />
          <VerticalStack showHomeLink={false} />
        </div>
    </div>
  )
};