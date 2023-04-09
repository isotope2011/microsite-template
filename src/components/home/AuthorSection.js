import React from "react";
import authorImg from "images/microsite-192x192.png";
// import ImaniImg from "images/imani-large@2x.png";

export default function AuthorSection() {
  return (
    <section id="about-author" className="ltblue-section">
      <div className="container">
        <div className="section-column">
          <div className="row">
            <div className="col-12 col-md-4">
              <img
                className="img-fluid"
                src={authorImg}
                alt="Lorem Ipsum"
              />
            </div>
            <div className="col-12 col-md-8">
              <p className="h2 display-6 fw-bold text-center">Lorem Ipsum a</p>
              <p className="fs-5 lh-base my-4">
                <span className="fw-bold">Lorem Ipsum 1</span><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae suscipit tellus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Ut enim blandit volutpat maecenas volutpat blandit aliquam.
              </p>
              <p className="fs-5 lh-base my-4">
                <span className="fw-bold">Lorem Ipsum 2</span><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis urna id volutpat lacus laoreet non. Aliquam eleifend mi in nulla posuere. Dolor sed viverra ipsum nunc. Dolor sit amet consectetur adipiscing elit ut.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
