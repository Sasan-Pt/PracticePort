import React, { Fragment, useContext } from "react";
import Header from "./Header/Header";
import Main from "./MainBody/Main";
import ColorBody from "./Footer/ColorBody";
import Footer from "./Footer/Footer";
import Context from "./Context/Context";

const LandingPage = () => {
  const ctx = useContext(Context);
  return (
    <Fragment>
      <div className="col-start-2 col-end-3 text-white">
        <Header ButtonColor="border-white" />
        {ctx?.mRespon && <Main />}
      </div>
      {ctx?.mRespon && (
        <>
          <div className="col-start-1 col-end-4 w-full text-white">
            <ColorBody />
          </div>
          <div className="col-start-2 col-end-3 text-white">
            <Footer />
          </div>
        </>
      )}
    </Fragment>
  );
};

export default LandingPage;
