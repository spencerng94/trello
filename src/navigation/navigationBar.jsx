import React from 'react';
import LeftNavBar from './leftNavigationBar.jsx';
import RightNavBar from './rightNavigationBar.jsx';

const NavBar = () => {

    return (
        <div class="navbar-header-container">
            <LeftNavBar></LeftNavBar>
            <div class="nav-filler-one"></div>
            <div>Trello</div>
            <RightNavBar></RightNavBar>

        </div>
    )
}

export default NavBar;