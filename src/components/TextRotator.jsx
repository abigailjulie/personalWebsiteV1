import React, { useState, useEffect } from "react";
import "./TextRotator.css";

export default function TextRotator({ toRotate, period }) {
    const [text, setText] = useState("");
    const [loopNum, setLoopNum] = useState(0);
    const [delta, setDelta] = useState(300 - Math.random() * 100);

    useEffect(() => {
        const tick = () => {
            const i = loopNum % toRotate.length;
            const fullText = toRotate[i];
            const updatedText = fullText.substring(0, text.length + 1);

            setText(updatedText);

            if (updatedText === fullText) {
                setDelta(null);
            } else {
                setDelta(period);
            }
        };

        // Start the text update process
        if (delta !== null) {
            const ticker = setTimeout(tick, delta);
            return () => clearTimeout(ticker);
        }

    }, [text, delta, loopNum, toRotate, period]);

    useEffect(() => {
        // Start text rotation once on mount
        const initialTicker = setTimeout(() => {
            setLoopNum(prev => prev + 1);
            setDelta(300 - Math.random() * 100);
        }, period);

        return () => clearTimeout(initialTicker);
    }, [period]);

    return (
            <h4 className="txt-rotate">
                <span className="wrap">{text}</span>
            </h4>
    );
};