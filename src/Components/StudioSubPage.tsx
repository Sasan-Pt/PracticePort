import React from "react";
import Header from "./Header/Header";
import Studio from "./AltPages/Studio/Studio";
import Crousel from "./AltPages/Studio/Crousel";
import Blackpara from "./AltPages/Studio/Components/blackpara";
import Overlapp from "./AltPages/Studio/Components/overlapp";
import Endstudio from "./AltPages/Studio/Components/Endstudio";

const StudioSubPage = () => {
  return (
    <>
      <div className="col-start-2 col-end-3">
        <Header ButtonColor="text-black border-black" />
        <div className="AfterCboth"></div>
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
        <Endstudio />
      </div>
    </>
  );
};

export default StudioSubPage;
