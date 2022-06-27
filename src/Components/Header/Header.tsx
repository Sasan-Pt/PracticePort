import React, {useContext, useEffect} from 'react';
import AntButton from "../Button";

import {
    Link,
    useParams
} from "react-router-dom";
import Hamburger from "./Components/hamburger";
import ResMenu from "./Components/ResMenu";
import Context from "../Context/Context";


const Header = () => {

    const ctx = useContext(Context)

    let params= useParams()
    console.log(params)


    let color=null

    if (params.work==="work"){
        color="text-black border-black"
    }
    useEffect(()=>{

        if(ctx?.mRespon && Object.keys(params).length===0){
            document.body.style.background="black"
        }if (!ctx?.mRespon) {
            document.body.style.background="#765cff"
        }
    })

    if (ctx?.mRespon){
        return (
            <div>
                <Hamburger />
                <nav className="mt-14 text-xl font-bold cResp:hidden" >
                    <ul>
                        <Link to="/Invalid" className="float-left">adaptable.</Link>
                        <Link to="/Invalid" className="float-right pl-8 "><AntButton stylee={`border-white hover:bg-white hover:text-black ${color}`}/></Link>
                        <Link to="/Invalid" className="float-right pl-8">Contact</Link>
                        <Link to="/Invalid" className="float-right pl-8">Journal</Link>
                        <Link to="/Invalid" className="float-right pl-8">WhitePapers</Link>
                        <Link to="/Invalid" className="float-right pl-8">Services</Link>
                        <Link to="/lorem/lorem/Studio" className="float-right pl-8">Studio</Link>
                        <Link to="/lorem/work" className="float-right pl-8">Work</Link>
                    </ul>
                </nav>
            </div>
        )
    }
    return (
        <>
        <Hamburger />
        <ResMenu/>
        </>
    );
};


export default Header;