import React, { useContext } from "react";
import Header from "./Header/Header";
import Studio from "./AltPages/Studio/Studio";
import Crousel from "./AltPages/Studio/Crousel";
import Blackpara from "./AltPages/Studio/Components/blackpara";
import Overlapp from "./AltPages/Studio/Components/overlapp";
import Endstudio from "./AltPages/Studio/Components/Endstudio";
import Footer from "./Footer/Footer";
import Context from "./Context/Context";

const StudioSubPage = () => {
  const ctx = useContext(Context);
  return (
    <>
      <div className="col-start-2 col-end-3">
        <Header
          ButtonColor="text-black border-black"
          LastColor="text-black border-black"
        />
      </div>
      {ctx?.mRespon && (
        <>
          <div className="AfterCboth"></div>
          <div className="col-start-2 col-end-3">
            <Studio />
          </div>
          <div className="col-start-1 col-end-4">
            <Crousel />
            <div className="grid grid-cols-custom bg-black">
              <div className="col-start-2 col-end-3">
                <Blackpara />
              </div>
            </div>
            <div className="AfterCboth"></div>
            <Overlapp />
            <div className="AfterCboth"></div>
            <div className="grid grid-cols-custom">
              <div className=" col-start-2 col-end-3">
                <Endstudio />
              </div>
            </div>
            <div className="col-start-1 col-end-4 text-white bg-black pl-28 pr-28">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default StudioSubPage;
