import React,{Fragment} from 'react';
import {useParams} from "react-router-dom"
import Menu from "./Components/Menu";
import LayPictures from "./Components/LayPictures";


 const Work = () => {

    let params= useParams()
    if (params.work==="work"){
        document.body.style.background="white"
    }

    return (
        <Fragment>
        <div className="mt-16">
            <Menu/>
            <LayPictures/>
        </div>
        </Fragment>
    );
};
export default Work


