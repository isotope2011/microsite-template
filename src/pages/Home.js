import React from "react";
import Page from "components/PageWrapper";

import TopSection from "components/home/TopSection";
import AuthorSection from "components/home/AuthorSection";
import BookSection from "components/home/BookSection";
import ContactSection from "components/home/ContactSection";

export default function Home() {
  return (
    <Page>
      <TopSection />
      <BookSection bookName="Lorem ipsum dolor sit" price="99.99" />
      <AuthorSection />
      <ContactSection />
    </Page>
  );
}
