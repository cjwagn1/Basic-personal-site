import React from "react";
import "../App.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import Octicon, { MarkGithub, LogoGithub } from "@primer/octicons-react";

export const Header = () => {
  return (
    <header>
      <div className="">
        <h2 style={{ color: "white" }} className="logo">
          Carter Wagner
        </h2>

        <a
          className="logo"
          href="https://github.com/cjwagn1"
          style={{ color: "white" }}
          target="_blank"
        >
          <Octicon icon={MarkGithub} />

          <Octicon icon={LogoGithub} />
        </a>
      </div>
      <div className="container">
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav>
          <h2 style={{ color: "white" }} className="logoM">
            Carter Wagner
          </h2>
          <a
            className="logoG"
            href="https://github.com/cjwagn1"
            style={{ color: "white" }}
            target="_blank"
          >
            <Octicon icon={MarkGithub} />

            <Octicon icon={LogoGithub} />
          </a>
        </nav>
      </div>
    </header>
  );
};
