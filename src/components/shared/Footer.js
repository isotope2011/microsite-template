import React from "react";

import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="px-3 py-3">
      <div className="row text-md-start">
        <div className="col-12 col-md-6 py-1">
          <span className="text-muted">
            MicroSite, &copy; 2022 MicroSite, LLC
          </span>
        </div>
        <div className="col-12 col-md-6 py-1">
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
}
