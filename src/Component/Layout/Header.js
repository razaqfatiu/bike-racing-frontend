import React from 'react';

const Header = () => {
  return (
    <nav class="navbar sticky-top navbar-expand-lg bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">
          Bike Racing
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto w-100 justify-content-end">
            <li class="nav-item active">
              <a class="nav-link" href="/">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/photos">
                Photos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/location">
                Location
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/riders">
                Riders
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contest">
                Contest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
