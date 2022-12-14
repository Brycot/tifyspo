import React from "react";
import {
    PlayerSection,
    PlayerControlButtons,
    Button,
    Svg,
    PlayBackbar,
    PlaybackNumber,
} from "./Player.styled";
function Player() {
    return (
        <PlayerSection>
            <PlayerControlButtons>
                <div className="playerControls-left">
                    <Button>
                        <Svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.356A2.25 2.25 0 01.39 12.5H0V14h.391a3.75 3.75 0 002.873-1.34l6.173-7.356a2.25 2.25 0 011.724-.804h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 00.39 3.5z"></path>
                            <path d="M7.5 10.723l.98-1.167.957 1.14a2.25 2.25 0 001.724.804h1.947l-1.017-1.018a.75.75 0 111.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 13H11.16a3.75 3.75 0 01-2.873-1.34l-.787-.938z"></path>
                        </Svg>
                    </Button>
                    <Button>
                        <Svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"></path>
                        </Svg>
                    </Button>
                </div>

                <Button playPause>
                    <Svg
                        playPause
                        role="img"
                        height="16"
                        width="16"
                        viewBox="0 0 16 16"
                    >
                        <path d="M2.7 1a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7H2.7zm8 0a.7.7 0 00-.7.7v12.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-2.6z"></path>
                    </Svg>
                </Button>

                <div className="playerControls-right">
                    <Button>
                        <Svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"></path>
                        </Svg>
                    </Button>
                    <Button>
                        <Svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                        >
                            <path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 111.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"></path>
                        </Svg>
                    </Button>
                </div>
            </PlayerControlButtons>
            <PlayBackbar>
                <PlaybackNumber>1:30</PlaybackNumber>
                <input type="range" min="0" max="10" step="0.01" />
                <PlaybackNumber>4:00</PlaybackNumber>
            </PlayBackbar>
        </PlayerSection>
    );
}

export default Player;
