import React,{Fragment} from 'react';
import {useParams} from "react-router-dom"
import Header from "../../Header/Header";
import Menu from "./Components/Menu";


 const Work = () => {

    let params= useParams()
    if (params.work==="work"){
        document.body.style.background="white"
    }

    return (
        <Fragment>
        <div className="mt-16">
            <Menu/>
        </div>
        </Fragment>
    );
};
export default Work


