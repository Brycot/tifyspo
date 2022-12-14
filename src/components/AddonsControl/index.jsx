import React from "react";
import { AddonsControlSection, Button, Svg } from "./AddonsControl.styled";

function AddonsControl() {
    return (
        <AddonsControlSection>
            <Button>
                <Svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ytk21e-0 eqtHWV"
                >
                    <path d="M13.426 2.574a2.831 2.831 0 00-4.797 1.55l3.247 3.247a2.831 2.831 0 001.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 004.74 9.075L2.065 12.12a1.287 1.287 0 001.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 114.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 01-3.933-3.933l2.676-3.045 3.505-3.99z"></path>
                </Svg>
            </Button>
            <Button>
                <Svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    class="Svg-ytk21e-0 eqtHWV"
                >
                    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
                </Svg>
            </Button>
            <div>
                <Button>
                    <Svg
                        role="presentation"
                        height="16"
                        width="16"
                        aria-label="Volumen alto"
                        id="volume-icon"
                        viewBox="0 0 16 16"
                        class="Svg-ytk21e-0 eqtHWV"
                    >
                        <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
                        <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
                    </Svg>
                </Button>
                <input type="range" min="0" max="100" step="1" />
            </div>
        </AddonsControlSection>
    );
}

export default AddonsControl;
