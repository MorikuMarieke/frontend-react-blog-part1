import React from "react";
import './NavBar.css';
import {NavLink} from "react-router-dom";
import logoMedium from '../../assets/logo-medium.png';

function NavBar() {
    return (
        <header className="outer-container nav-outer-container">
            <nav className="inner-container nav-container">
                <div className="nav-image-wrapper">
                    <img
                        className="nav-bar-logo"
                        src={logoMedium}
                        alt="BIOgventure-logo"
                    />
                </div>
                <ul className="nav-links">
                    <li><NavLink to="/"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink>
                    </li>
                    <li><NavLink to="/alle-blog-posts"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle
                        posts</NavLink></li>
                    <li><NavLink to="/nieuwe-blog-post"
                                 className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe
                        post maken</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;