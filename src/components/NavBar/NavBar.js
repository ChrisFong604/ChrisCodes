import React from "react";

import "./NavBar.css";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import ContactMailIcon from "@material-ui/icons/ContactMail";

import { KeyboardArrowUp } from "@material-ui/icons";

function NavBar({ parallax }) {
  return (
    <div className="nav-container">
      <ul className="nav-list">
        <li>
          <button onClick={() => parallax.current.scrollTo(0)}>
            <KeyboardArrowUp fontSize="large" />
          </button>
        </li>
        <li>
          <button onClick={() => parallax.current.scrollTo(1.22)}>About</button>
        </li>
        <li>
          <button onClick={() => parallax.current.scrollTo(2.97)}>
            Experiences
          </button>
        </li>
        <li>
          <button onClick={() => parallax.current.scrollTo(5.96)}>
            Projects
          </button>
        </li>
        <li>
          <a
            href="https://github.com/chrisfong604"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/chrisfong604/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/isrly_chris"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a href="mailto: ccffoonngg@gmail.com">
            <ContactMailIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
