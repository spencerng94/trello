const RightNavBar = () => {

    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="#">+</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Info Icon</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Bell Icon</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">User Icon</a>
            </li>
            </ul>
        </div>
        </nav>
    )
}

export default RightNavBar;