import React from "react";

const Header = () => (
  <header class="l-header" id="header">
    <nav class="nav bd-container">
      <a href="#" class="nav__logo">
        Smmith
      </a>

      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="nav__item">
            <a href="#home" class="nav__link">
              <i class="bx bx-home nav__icon"></i>
              Home
            </a>
          </li>
          <li class="nav__item">
            <a href="#profile" class="nav__link">
              <i class="bx bx-user nav__icon"></i>
              Profile
            </a>
          </li>
          <li class="nav__item">
            <a href="#education" class="nav__link">
              <i class="bx bx-book nav__icon"></i>
              Education
            </a>
          </li>
          <li class="nav__item">
            <a href="#skills" class="nav__link">
              <i class="bx bx-receipt nav__icon"></i>
              Skills
            </a>
          </li>
          <li class="nav__item">
            <a href="#experience" class="nav__link">
              <i class="bx bx-briefcase-alt"></i>
              Experience
            </a>
          </li>
          <li class="nav__item">
            <a href="#certificates" class="nav__link">
              <i class="bx bx-award"></i>
              Certificates
            </a>
          </li>
          <li class="nav__item">
            <a href="#references" class="nav__link">
              <i class="bx bx-link-external"></i>
              References
            </a>
          </li>
        </ul>
      </div>

      <div class="nav__toggle" id="nav-toggle">
        <i class="bx bx-grid-alt"></i>
      </div>
    </nav>
  </header>
);

export default Header;
