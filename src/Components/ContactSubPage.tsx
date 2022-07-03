import React from "react";
import Contact from "./AltPages/Contact/Contact";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const ContactSubPage = () => {
  return (
    <>
      <div className="col-start-2 col-end-3">
        <Header ButtonColor="text-black " />
        <div className="clear-both"></div>
        <Contact />
      </div>
      <div className="bg-black text-white col-start-1 col-end-4 mt-20 pl-28 pr-28">
        <Footer />
      </div>
    </>
  );
};

export default ContactSubPage;
