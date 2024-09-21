import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "react-bootstrap";

export default function ArchProject(props) {
  return (
    <li className="archItem">
      <Link className="archItemLink" to={props.path}>
        <Figure className="archItemPicWrap">
            <img src={props.src} alt="Project Image" className="archItemImg" />
        </Figure>
        <div className="archItemInfo">
          <h5 className="archItemText">{props.text}</h5>
        </div>
      </Link>
    </li>
  )
};