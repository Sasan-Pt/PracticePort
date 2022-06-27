import React, {Fragment, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Work from "./Components/AltPages/Work/Work";
import Header from "./Components/Header/Header";
import Main from "./Components/MainBody/Main";
import Footer from "./Components/Footer/Footer";
import ColorBody from "./Components/Footer/ColorBody";
import Context from "./Components/Context/Context";
import Invalid from "./Components/404Pages/404Pages";
import Studio from "./Components/AltPages/Studio/Studio";
import Crousel from "./Components/AltPages/Studio/Crousel";
import Test from "./test"
import Blackpara from "./Components/AltPages/Studio/Components/blackpara";
import Overlapp from "./Components/AltPages/Studio/Components/overlapp";


function App() {
    const [mRespon,setMRespan]=useState(true)
    const responClicker=()=>{
        setMRespan(!mRespon)
    }
  return (
      <Context.Provider value={{
          mRespon:mRespon,
          setMRespan:setMRespan,
          clicker:responClicker
      }}>
<div  className="grid grid-cols-custom ">
      <Router>
          <Routes>
              <Route path="/" element={
                  <Fragment>
                  <div className="col-start-2 col-end-3 text-white">
                      <Header/>
                      {mRespon && <Main/>}
                  </div>
                      {mRespon &&
                          <>
                          <div className="col-start-1 col-end-4 w-full text-white">
                              <ColorBody/>
                          </div>
                          <div className="col-start-2 col-end-3 text-white">
                          <Footer/>
                          </div>
                          </>
                      }
                  </Fragment>
              }/>
              <Route path="/lorem/:work" element={
                  <>
                      <div className="col-start-2 col-end-3 text-black">
                              <Header/>
                          <div className="AfterCboth"></div>
                          <Work/>

                      </div>
                      <div className="col-start-1 col-end-4 w-full text-white">
                          <ColorBody/>
                      </div>
                      <div className="col-start-1 col-end-4 text-white bg-black pl-28 pr-28">
                              <Footer/>
                      </div>
                  </>
              }
              />
              <Route path="/lorem/lorem/:Studio" element={
                  <>
                  <div className="col-start-2 col-end-3" >
                      <Header/>
                      <div className="AfterCboth"></div>
                      <Studio/>
                  </div>
                      <div className="col-start-1 col-end-4">
                          <Crousel/>
                          <div className="grid grid-cols-custom bg-black">
                              <div className="col-start-2 col-end-3">
                              <Blackpara/>
                              </div>
                          </div>
                          <div className="AfterCboth"></div>
                          <Overlapp/>
                      </div>
                  </>
                  }
              />
              <Route path="/*" element={<Invalid/>}/>
              <Route path="/test" element={<Test/>}/>
          </Routes>
      </Router>

     </div>
      </Context.Provider>

  );
}
export default App;
