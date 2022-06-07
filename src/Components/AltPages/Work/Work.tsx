import React,{Fragment} from 'react';
import {useParams} from "react-router-dom"
import Header from "../../Header/Header";


const Work = () => {
    let params= useParams()
    if (params.work==="work"){
        document.body.style.background="white"
    }
    return (
        <Fragment>
        <div className="mt-20 ">
            sadas

        </div>
        </Fragment>
    );
};



export default Work;