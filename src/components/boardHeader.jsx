import react from 'react';

const BoardHeader = () => {

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
    <li class="nav-item active">
        <a class="nav-link" href="#">Board (dropdown) <span class="sr-only"></span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">BOARD NAME <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">STAR</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> | </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TEAM NAME</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">TEAM VISIBLE </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> | </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">PERSONAL ICON</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">INVITE</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Butler</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Show Menu</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default BoardHeader;