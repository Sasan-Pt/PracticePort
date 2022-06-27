import React, {Fragment, useContext, useEffect} from 'react';

import Paragh from "./Components/Paragh";
import Videos from "./Components/videos";
import SBody from "./Components/sBody";
import News from "./Components/News";
import Context from "../Context/Context";


const Main = () => {

    const ctx = useContext(Context)

    return (
        <Fragment>
        <Paragh/>
        <Videos/>
        <SBody/>
        <News/>
        </Fragment>
    );
};



export default Main;

