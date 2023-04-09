import React, { useEffect, useState } from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

export default function Page({
  children,
  showHeader = true,
  mainClass = "site-content",
}) {
  const [isInit, setInit] = useState(false);

  useEffect(() => {
    if(!isInit) {
      window.scrollSpy = new window.bootstrap.ScrollSpy(document.body, {
        target: '#page-nav'
      });
      setInit(true);
    }
  },[isInit])
  return (
    <div className="page" data-testid="page">
      {showHeader && <Header />}
      <main id="main" className={mainClass}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
