import react from 'react';

const BoardHeader = () => {

    return (
       <div>
         <section class="board-info-bar">
          <div class="board-controls">

            <button class="board-title btn">
              <h2>Trello Board</h2>
            </button>
            <button class="star-btn btn" aria-label="Star Board">
              <i class="far fa-star" aria-hidden="true"></i>
            </button>

            <button class="personal-btn btn">Personal</button>

            <button class="private-btn btn"><i class="fas fa-briefcase private-btn-icon" aria-hidden="true"></i>Private</button>

          </div>

          <button class="menu-btn btn"><i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>Show Menu</button>

          </section>
       </div>
    )
}

export default BoardHeader;