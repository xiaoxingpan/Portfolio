import React from "react";

import QuoteSection from "../components/QuoteSection";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <ContactSection />
      <QuoteSection />
    </main>
  );
};

export default Contact;
