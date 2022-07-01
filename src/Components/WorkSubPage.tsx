import React from "react";
import Header from "./Header/Header";
import Work from "./AltPages/Work/Work";
import ColorBody from "./Footer/ColorBody";
import Footer from "./Footer/Footer";

const WorkSubPage = () => {
  return (
    <>
      <div className="col-start-2 col-end-3 text-black">
        <Header ButtonColor="text-black border-black" />
        <div className="AfterCboth"></div>
        <Work />
      </div>
      <div className="col-start-1 col-end-4 w-full text-white">
        <ColorBody />
      </div>
      <div className="col-start-1 col-end-4 text-white bg-black pl-28 pr-28">
        <Footer />
      </div>
    </>
  );
};

export default WorkSubPage;
