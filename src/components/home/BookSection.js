import React from "react";
import bookImg from "images/microsite-192x192.png";

import { AMAZON_BOOK_LINKS } from "utils/constants";

export default function BookSection({ bookName, price }) {
  return (
    <section id="buy-book" className="white-section">
      <div className="container">
        <div className="section-column">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="book-section">
                <img
                  className="img-fluid"
                  src={bookImg}
                  alt="author - clarissa henry"
                />
              </div>
            </div>
            <div className="col-12 col-md-8">
              <div className="col py-5">
                <p className="h2 display-6 fw-bold">
                  {`${bookName} - Paperback`}
                </p>
                <p className="h2 display-5 fw-normal">{`$${price}`}</p>
                <p className="fs-5 lh-base">
                  {`Purchase your copy of ${bookName} Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                </p>
                <p className="fs-5 lh-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <br/>
                  <br/>
                  Please <a href="/?#contact">email us</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
                <p className="fs-7 lh-base">
                **Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. At tempor commodo ullamcorper a.
                </p>
              </div>
              <div className="d-grid gap-2 col-6">
                <a href="/#">
                  <button className="btn btn-primary btn-lg">
                    BUY NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
