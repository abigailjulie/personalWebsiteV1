import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VerticalStack from "../components/VerticalStack";
import TextRotator from "../components/TextRotator";
import "./ErrCont.css";

export default function Error() {
   const email = "abigail.figaro@gmail.com";

   return (
      <div className="errContContainer">
         <div className="errCont">
            <h1>Whoops!</h1>
            <TextRotator toRotate={[`Something went wrong`]} period={200} className="textRotateWrap" />
            <VerticalStack showHomeLink = {true}/>
         </div>
      </div>
   )
};