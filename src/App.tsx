import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Work from "./Components/AltPages/Work/Work";
import Header from "./Components/Header/Header";
import Main from "./Components/MainBody/Main";
import Footer from "./Components/Footer/Footer";
import ColorBody from "./Components/Footer/ColorBody";
import Context from "./Components/Context/Context";
import Invalid from "./Components/404Pages/404Pages";
import Studio from "./Components/AltPages/Studio/Studio";
import Crousel from "./Components/AltPages/Studio/Crousel";
import Test from "./test";
import Blackpara from "./Components/AltPages/Studio/Components/blackpara";
import Overlapp from "./Components/AltPages/Studio/Components/overlapp";
import Endstudio from "./Components/AltPages/Studio/Components/Endstudio";
import LandingPage from "./Components/LandingPage";
import WorkSubPage from "./Components/WorkSubPage";
import StudioSubPage from "./Components/StudioSubPage";
import Contact from "./Components/AltPages/Contact/Contact";
import ContactSubPage from "./Components/ContactSubPage";

function App() {
  const [mRespon, setMRespan] = useState(true);
  const responClicker = () => {
    setMRespan(!mRespon);
  };
  return (
    <Context.Provider
      value={{
        mRespon: mRespon,
        setMRespan: setMRespan,
        clicker: responClicker,
      }}
    >
      <div className="grid grid-cols-custom ">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Work" element={<WorkSubPage />} />
            <Route path="/Studio" element={<StudioSubPage />} />
            <Route path="/Contact" element={<ContactSubPage />} />
            <Route path="/*" element={<Invalid />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  );
}
export default App;
