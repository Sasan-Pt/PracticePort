import React, {Fragment, useState} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Work from "./Components/AltPages/Work/Work";
import Invalid from "./Components/404Pages/404Pages";
import Header from "./Components/Header/Header";
import Main from "./Components/MainBody/Main";
import Footer from "./Components/Footer/Footer";
import ColorBody from "./Components/Footer/ColorBody";

function App() {
    const [mRespon,setMRespan]=useState(true)
    const responClicker=()=>{
        setMRespan(!mRespon)
    }
  return (
      <div  className="grid grid-cols-custom ">
      <Router>
          <Routes>
              <Route path="/" element={
                  <Fragment>
                  <div className="col-start-2 col-end-3 text-white">
                      <Header Clicked={responClicker} value={mRespon}/>
                      {mRespon && <Main/>}
                  </div>
                      {mRespon &&
                          <>
                          <div className="col-start-1 col-end-4 w-full">
                              <ColorBody/>
                          </div>
                          <div className="col-start-2 col-end-3">
                          <Footer/>
                          </div>
                          </>
                      }
                  </Fragment>
              }/>
              <Route path="/:work" element={
                  <>
                  <Header/>
                  <Work/>
                  </>
              }
              />
          </Routes>
      </Router>
      </div>

  );
}
export default App;
