import React, { useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./ProjectsSoft.css";
import "../components/Footer.css";

import Project from "../components/Project";
import Back from "../components/Back";
import BackToTop from "../components/BackToTop";

//imported videos
import VidPrjGame from "../assets/videos/VidPrjGame.mp4";
import VidPrjCounter from "../assets/videos/VidPrjCounter.mp4";
import VidPrjPenguin from "../assets/videos/VidPrjPenguin.mp4";
import VidPrjPlaylist from "../assets/videos/VidPrjPlaylist.mp4";
import VidPrjWheel from "../assets/videos/VidPrjFerrisWheel.mp4";
import VidPrjBinaryConvertor from "../assets/videos/VidPrjBinaryConvertor.mp4";
import VidPrjDateFormatter from "../assets/videos/VidPrjDateFormatter.mp4";
import VidPrjNumberSorter from "../assets/videos/VidPrjNumberSorter.mp4";
import VidPrjSpamFilter from "../assets/videos/VidPrjSpamFilter.mp4";
import VidPrjStatCal from "../assets/videos/VidPrjStatCal.mp4";
import VidPrjTeamCards from "../assets/videos/VidPrjTeamCards.mp4";
import VidPrjToDo from "../assets/videos/VidPrjToDo.mp4";
import Footer from "../components/Footer";

export default function ProjectsSoft() {
    useEffect(() => {
        document.title = "Software Projects | Abigail Figaro";
    }, []);

    const projectData = [
        { src: VidPrjCounter, text: "Managing client validation and performing calculations", label: "Component", path: "https://github.com/abigailjulie/calorieCounter" },
        { src: VidPrjStatCal, text: "Handling user input, DOM manipulation, and method chaining", label: "Component", path: "https://github.com/abigailjulie/statCal" },
        { src: VidPrjPlaylist, text: "A digital music archive with play functionalities", label: "Audio Player", path: "https://github.com/abigailjulie/musicPlayer" },
        { src: VidPrjPenguin, text: "Discovering absolute positioning, the z-index property, and the transform property", label: "Animation", path: "https://github.com/abigailjulie/helloPenguin" },
        { src: VidPrjNumberSorter, text: "Studying the basics of algorithms", label: "Component", path: "https://github.com/abigailjulie/numberSorter" },
        { src: VidPrjWheel, text: "Configuring CSS to animate elements, transform them and adjust their speed", label: "Animation", path: "https://github.com/abigailjulie/ferrisWheel" },
        { src: VidPrjBinaryConvertor, text: "Builds the fundamental concepts of recursion, explore the call stack", label: "Component", path: "https://github.com/abigailjulie/binaryConvertor" },
        { src: VidPrjTeamCards, text: "Managing DOM manipulation, object destructing, event handling, and data filtering", label: "Exercise", path: "https://github.com/abigailjulie/teamCards" },
        { src: VidPrjToDo, text: "Developing CRUD operations on tasks, implement event listeners, and toggle UI", label: "Component", path: "https://github.com/abigailjulie/toDo" },
        { src: VidPrjGame, text: "Explores JavaScript fundamentals like objects, function and if/else statements", label: "Game", path: "https://github.com/abigailjulie/rolePlayGame" },
        { src: VidPrjSpamFilter, text: "Exploring regular expressions", label: "Component", path: "https://github.com/abigailjulie/spamFilter" },
        { src: VidPrjDateFormatter, text: "Discovering date formatting techniques", label: "Component", path: "https://github.com/abigailjulie/dateFormatter" }
    ];

    return (
        <div className="softwareProjectsPage">
            <div className="headBlock">
                <div className="headText">
                    <h1>Software Projects</h1>
                    <h6>Coding exercises of programming, graphics and more!</h6>
                </div>
                <div className="backBtn">
                    <Back />
                </div>
            </div>
            <div className="SPPContainer">
                <ul className="SPPItems">
                    {projectData.map((project, index) => (
                        <Project
                            key={index}
                            src={project.src}
                            text={project.text}
                            label={project.label}
                            path={project.path}
                        />
                    ))}
                </ul>
            </div>
            <BackToTop className="SPPBackToTop" />
            <Footer />
        </div>
    )
};