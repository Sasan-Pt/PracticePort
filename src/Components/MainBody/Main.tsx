import React, {Fragment, useContext, useEffect} from 'react';

import Paragh from "./Components/Paragh";
import Videos from "./Components/videos";
import SBody from "./Components/sBody";
import News from "./Components/News";
import Context from "../Context/Context";



const Main = (props:any) => {

    const ctx:any = useContext(Context)

    useEffect(()=>{

        if(ctx.mRespon){
            document.body.style.background="black"
        }if (!ctx.mRespon) {
            document.body.style.background="#765cff"
        }
    })


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

