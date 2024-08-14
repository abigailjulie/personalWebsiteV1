import React, { useEffect, useRef, useCallback } from 'react';
import Project from './Project';
import Back from '../components/Back';
import BackToTop from '../components/BackToTop';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Projects.css';

//imported images
import PrjCat from '../assets/images/PrjCat.jpg';
import PrjSkyline_Bright from '../assets/images/PrjSkyline_Bright.jpg';
import PrjSkyline_Dark from '../assets/images/PrjSkyline_Dark.jpg';

//imported videos
import VidPrjGame from '../assets/videos/VidPrjGame.mp4';
import VidPrjCounter from '../assets/videos/VidPrjCounter.mp4';
import VidPrjPenguin from '../assets/videos/VidPrjPenguin.mp4';
import VidPrjPlaylist from '../assets/videos/VidPrjPlaylist.mp4';
import VidPrjWheel from '../assets/videos/VidPrjFerrisWheel.mp4';
import VidPrjBinaryConvertor from '../assets/videos/VidPrjBinaryConvertor.mp4';
import VidPrjDateFormatter from '../assets/videos/VidPrjDateFormatter.mp4';
import VidPrjNumberSorter from '../assets/videos/VidPrjNumberSorter.mp4';
import VidPrjSpamFilter from '../assets/videos/VidPrjSpamFilter.mp4';
import VidPrjStatCal from '../assets/videos/VidPrjStatCal.mp4';
import VidPrjTeamCards from '../assets/videos/VidPrjTeamCards.mp4';
import VidPrjToDo from '../assets/videos/VidPrjToDo.mp4';

export default function Projects() {
    // Intersection Observer callback
    const onIntersect = useCallback((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.play();
                video.removeAttribute('data-lazy');
                observer.unobserve(video);
            }
        });
    }, []);

    // Set up Intersection Observer
    useEffect(() => {
        const observer = new IntersectionObserver(onIntersect, { threshold: 0.5 });
        const lazyVideos = document.querySelectorAll('video[data-lazy]');
        lazyVideos.forEach(video => observer.observe(video));
        return () => {
            lazyVideos.forEach(video => observer.unobserve(video));
        };
    }, [onIntersect]);

    useEffect(() => {
        document.title = 'Software Projects | Abigail Figaro';
    }, []);

    const projectData = [
        { src: VidPrjCounter, text: 'Managing client validation and performing calculations', label: 'Component', path: 'https://github.com/abigailjulie/calorieCounter' },
        { src: VidPrjStatCal, text: 'Handling user input, DOM manipulation, and method chaining', label: 'Component', path: 'https://github.com/abigailjulie/statCal' },
        { src: VidPrjPlaylist, text: 'A digital music archive with play functionalities', label: 'Audio Player', path: 'https://github.com/abigailjulie/musicPlayer' },
        { src: VidPrjPenguin, text: 'Discovering absolute positioning, the z-index property, and the transform property', label: 'Animation', path: 'https://github.com/abigailjulie/helloPenguin' },
        { src: VidPrjNumberSorter, text: 'Studying the basics of algorithms', label: 'Component', path: 'https://github.com/abigailjulie/numberSorter' },
        { src: VidPrjWheel, text: 'Configuring CSS to animate elements, transform them and adjust their speed', label: 'Animation', path: 'https://github.com/abigailjulie/ferrisWheel' },
        { src: VidPrjBinaryConvertor, text: 'Builds the fundamental concepts of recursion, explore the call stack', label: 'Component', path: 'https://github.com/abigailjulie/binaryConvertor' },
        { src: VidPrjTeamCards, text: 'Managing DOM manipulation, object destructing, event handling, and data filtering', label: 'Exercise', path: 'https://github.com/abigailjulie/teamCards' },
        { src: VidPrjToDo, text: 'Developing CRUD operations on tasks, implement event listeners, and toggle UI', label: 'Component', path: 'https://github.com/abigailjulie/toDo' },
        { src: VidPrjGame, text: 'Explores JavaScript fundamentals like objects, function and if/else statements', label: 'Game', path: 'https://github.com/abigailjulie/rolePlayGame' },
        { src: VidPrjSpamFilter, text: 'Exploring regular expressions', label: 'Component', path: 'https://github.com/abigailjulie/spamFilter' },
        { src: VidPrjDateFormatter, text: 'Discovering date formatting techniques', label: 'Component', path: 'https://github.com/abigailjulie/dateFormatter' },
        { src: PrjCat, text: 'A playful cat image showcasing CSS properties', label: 'Component', path: 'https://github.com/abigailjulie/catSelfie' },
        { src: PrjSkyline_Bright, text: 'Configuring CSS variables in light mode', label: 'Exercise', path: 'https://github.com/abigailjulie/skylineDarkLight' },
        { src: PrjSkyline_Dark, text: 'Configuring CSS variables in dark mode', label: 'Exercise', path: 'https://github.com/abigailjulie/skylineDarkLight' }
    ];

    return (
        <div className="softwareProjectsPage">
            <div className="headBlock pullDown">
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
        </div>
    )
};