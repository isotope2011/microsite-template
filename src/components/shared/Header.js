import React from "react";
import { useLocation } from "react-router-dom";

import parentLogo from "images/logo.png";

export default function Header() {
  const location = useLocation();
  const publishUrl = "https://www.publishersite.com";
  const NavLinks = [
    {
      title: "Home",
      hash: "#home",
    },
    {
      title: "Section 1",
      hash: "#section-1",
    },
    {
      title: "section 2",
      hash: "#section-2",
    },
    {
      title: "contact Us",
      hash: "#contact",
    },
  ];
  const current = location.hash.replace(/#/, "");

  return (
    <div className="site-nav-header">
      <div className="bg-light border-bottom mb-0 parent-header">
        <div className="container d-flex justify-content-center">
          <span>A product of &nbsp;</span>
          <a
            className="nav-item"
            target="_blank"
            href={`${publishUrl}`}
            rel="noreferrer"
          >
            <img
              className="parent-logo"
              src={parentLogo}
              alt="publisher site"
            />
          </a>
        </div>
      </div>
      <div id="page-nav">
        <nav className="main-nav-column-wrap navbar navbar-expand-md navbar-light">
          <div className="container-fluid justify-content-start">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#site-main-navbar"
              aria-controls="site-main-navbar"
              aria-expanded="false"
              aria-label="toggle mobile navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="px-3 current-section">{current}</div>
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="site-main-navbar"
            >
              <ul className="navbar-nav">
                {NavLinks.map((link, idx) => (
                  <li key={`nav-${idx}`} className="nav-item">
                    <a
                      key={`${link.title}= ${idx}`}
                      className="nav-link"
                      data-bs-target={link.hash}
                      href={`${location.pathname}?${link.hash}`}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
