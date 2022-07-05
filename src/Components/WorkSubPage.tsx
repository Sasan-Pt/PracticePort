import React, { useContext } from "react";
import Header from "./Header/Header";
import Work from "./AltPages/Work/Work";
import ColorBody from "./Footer/ColorBody";
import Footer from "./Footer/Footer";
import Context from "./Context/Context";

const WorkSubPage = () => {
  const ctx = useContext(Context);
  return (
    <>
      <div className="col-start-2 col-end-3 text-black">
        <Header
          ButtonColor="text-black border-black"
          LastColor="text-black border-black"
        />
      </div>
      {ctx?.mRespon && (
        <>
          <div className="AfterCboth"></div>
          <div className="col-start-2 col-end-3 text-black">
            <Work />
          </div>
          <div className="col-start-1 col-end-4 w-full text-white">
            <ColorBody />
          </div>
          <div className="col-start-1 col-end-4 text-white bg-black pl-28 pr-28">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default WorkSubPage;
