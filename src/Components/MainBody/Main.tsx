import React, {Fragment} from 'react';

import Paragh from "./Components/Paragh";
import Videos from "./Components/videos";
import SBody from "./Components/sBody";
import News from "./Components/News";



const Main = (props:any) => {


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

