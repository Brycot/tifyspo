import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { ArrowBack, ArrowFront, OpenUserMenu } from '../../helpers/Icons';

import { Header } from './TopBar.styled';

function Topbar({ userInfo }) {
    const [searchQuery, setsearchQuery] = useState('');
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const handleToggleMenu = () => {
        console.log('dsdd');
    };

    const handleChange = ({ target }) => {
        setsearchQuery(target.value);
    };
    useEffect(() => {
        if (pathname.includes('/search')) {
            navigate(`search/${searchQuery}`);
        }
    }, [searchQuery]);
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Header>
            <div className="Historybuttons__Container">
                <ArrowBack />
                <ArrowFront />
            </div>

            {pathname.includes('/search') && (
                <div className="Input_Container">
                    <form onSubmit={onSubmit}>
                        <svg
                            role="img"
                            height="24"
                            width="24"
                            aria-hidden="true"
                            className="Svg-sc-ytk21e-0 uPxdw mOLTJ2mxkzHJj6Y9_na_"
                            viewBox="0 0 24 24"
                            data-encore-id="icon"
                        >
                            <path d="M10.533 1.279c-5.18 0-9.407 4.14-9.407 9.279s4.226 9.279 9.407 9.279c2.234 0 4.29-.77 5.907-2.058l4.353 4.353a1 1 0 1 0 1.414-1.414l-4.344-4.344a9.157 9.157 0 0 0 2.077-5.816c0-5.14-4.226-9.28-9.407-9.28zm-7.407 9.279c0-4.006 3.302-7.28 7.407-7.28s7.407 3.274 7.407 7.28-3.302 7.279-7.407 7.279-7.407-3.273-7.407-7.28z"></path>
                        </svg>
                        <input
                            type="text"
                            placeholder="¿Qué quieres escuchar?"
                            value={searchQuery}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            )}
            {pathname.includes('/collection') && (
                <div className="Input_Container_Links">
                    <NavLink
                        to="/collection/playlists"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }
                    >
                        Playlists
                    </NavLink>
                    <NavLink
                        to="/collection/artists"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }
                    >
                        Artistas
                    </NavLink>
                    <NavLink
                        to="/collection/albums"
                        className={({ isActive }) =>
                            isActive ? 'active' : 'inactive'
                        }
                    >
                        Álbumes
                    </NavLink>
                </div>
            )}
            <button onClick={handleToggleMenu} className="btnUser">
                {userInfo.images && (
                    <img
                        src={userInfo.images[0].url}
                        alt={userInfo.display_name}
                    />
                )}
                <span>{userInfo.display_name}</span>
                <OpenUserMenu />
            </button>
        </Header>
    );
}

export default Topbar;
