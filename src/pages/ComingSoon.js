import React from "react";
import Page from "components/PageWrapper";
import ComingSoonText from "images/coming_soon.png";
import { AMAZON_BOOK_LINKS } from "utils/constants";

export default function ComingSoon() {
  return (
    <Page showHeader={false} mainClass="temp-content">
      <section className="temp-section">
        <div className=" temp-section-bg">
          <div className="section-column">
            <div className="container text-center">
              <img
                className="d-block mx-auto"
                src={ComingSoonText}
                alt="Coming Soon"
                width="100%"
              />
              <h1 className="display-5 fw-bold">Imani the Fixer</h1>
              <h3>Under Construction</h3>
              <div>
                <span>Purchase the book on Amazon!</span>
                <div>
                  <a href={AMAZON_BOOK_LINKS} target="_blank" rel="noreferrer">
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
