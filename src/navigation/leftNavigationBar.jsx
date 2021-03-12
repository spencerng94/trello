import react from 'react';

const LeftNavBar = () => {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item active">
                <a class="nav-link" href="#">9 Buttons <span class="sr-only"></span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only"></span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Boards</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Search Bar</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default LeftNavBar;