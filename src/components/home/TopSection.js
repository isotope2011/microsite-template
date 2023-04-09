import React from "react";
import mainImg from "images/microsite-192x192.png";

import { AMAZON_BOOK_LINKS } from "utils/constants";

export default function Home() {
  return (
    <section id="home" className="top-section">
      <div className="container">
        <div className="section-column">
          <div className="row row-cols-2">
          <div className="col-12 col-md-6">
              <img className="img-fluid" src={mainImg} alt="ilm main" />
            </div>
            <div className="col-12 col-md-6">
              <div className="col">
                <p className="h1 display-3 fw-normal text-center">
                Lorem Ipsum
                </p>
                <p className="fs-5 lh-base my-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst quisque sagittis purus. Sit amet tellus cras adipiscing enim eu turpis egestas pretium. Felis donec et odio pellentesque diam volutpat commodo. Non blandit massa enim nec.
                </p>
              </div>
              {/* <div className="d-grid gap-2 col-6 mx-auto text-center">
                <a
                  href={AMAZON_BOOK_LINKS}
                  className="nav-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="btn btn-primary btn-lg">BUY NOW</button>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
