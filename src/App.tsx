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
                  </>
              }
              />
              <Route path="/*" element={<Invalid/>}/>
          </Routes>
      </Router>

      </div>
      </Context.Provider>

  );
}
export default App;
