import React from "react";
import { Link } from "react-router-dom";
import { Figure } from "react-bootstrap";

export default function Project(props) {
  const isVideo = props.src.endsWith(".mp4") || props.src.endsWith(".webm");
  return (
    <li className="cardsItem">
      <Link
        className="cardsItemLink"
        to={props.path}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Figure className="cardsItemPicWrap" data-category={props.label}>
          {isVideo ? (
            <video className="cardsItemImg" preload="metadata" muted>
              <source src={props.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={props.src} alt="Project Image" className="cardsItemImg" />
          )}
        </Figure>
        <div className="cardsItemInfo">
          <h5 className="cardsItemText">{props.text}</h5>
        </div>
      </Link>
    </li>
  )
};