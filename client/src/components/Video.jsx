import React from "react";
import ReactPlayer from 'react-player';

import VidPrjCounter from '../assets/videos/VidPrjGame.mp4';

export default function Video() {
    return (
        <>
            <ReactPlayer
                playing={true}
                loop={true}
                height='100%'
                width='100%'
                url={VidPrjCounter}
            />
        </>
    )
}