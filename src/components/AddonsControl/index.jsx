import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpotify } from '../../hooks/useSpotify';
import Devices from '../Devices';
import ProgressBar from '../ProgressBar';
import { AddonsControlSection, Button, Svg } from './AddonsControl.styled';

function AddonsControl() {
    const [viewDevices, setViewDevices] = useState(false);
    const [volume, setVolume] = useState(50);
    const { handleVolume } = useSpotify();

    const handleView = () => {
        setViewDevices(!viewDevices);
    };
    const onChangeVolume = () => {
        handleVolume(volume, setVolume);
    };
    return (
        <AddonsControlSection>
            {viewDevices && <Devices></Devices>}
            <NavLink
                to="/queue"
                className={({ isActive }) => (isActive ? 'activo' : 'inactivo')}
            >
                <Svg
                    role="img"
                    height="16"
                    width="16"
                    viewBox="0 0 16 16"
                    className="Svg-ytk21e-0 eqtHWV"
                >
                    <path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"></path>
                </Svg>
            </NavLink>
            <Button
                onClick={() => {
                    handleView();
                }}
            >
                <Svg
                    role="presentation"
                    height="16"
                    width="16"
                    aria-hidden="true"
                    className="Svg-sc-ytk21e-0 uPxdw"
                    viewBox="0 0 16 16"
                    data-encore-id="icon"
                >
                    <path d="M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0114.25 15h-6.5A1.75 1.75 0 016 13.25V2.75zm1.75-.25a.25.25 0 00-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25V2.75a.25.25 0 00-.25-.25h-6.5zm-6 0a.25.25 0 00-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 010 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z"></path>
                    <path d="M13 10a2 2 0 11-4 0 2 2 0 014 0zm-1-5a1 1 0 11-2 0 1 1 0 012 0z"></path>
                </Svg>
            </Button>
            <div className="volumeSection">
                <Button>
                    <Svg
                        role="presentation"
                        height="16"
                        width="16"
                        aria-label="Volumen alto"
                        id="volume-icon"
                        viewBox="0 0 16 16"
                        className="Svg-ytk21e-0 eqtHWV"
                    >
                        <path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"></path>
                        <path d="M11.5 13.614a5.752 5.752 0 000-11.228v1.55a4.252 4.252 0 010 8.127v1.55z"></path>
                    </Svg>
                </Button>
                <ProgressBar
                    value={volume}
                    setValue={setVolume}
                    handleChange={onChangeVolume}
                    min={0}
                    max={100}
                />
            </div>
        </AddonsControlSection>
    );
}

export default AddonsControl;
