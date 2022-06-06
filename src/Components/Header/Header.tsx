import React, { useEffect} from 'react';
import AntButton from "../Button";

import {
    Link
} from "react-router-dom";
import Hamburger from "./Components/hamburger";
import ResMenu from "./Components/ResMenu";




const Header = (props:any) => {
    const mRespond = props.value
    const respondClicker = props.Clicked


    useEffect(()=>{

        if(mRespond){
            document.body.style.background="black"
        }if (!mRespond) {
            document.body.style.background="#765cff"
        }
    })

    return (
        <div>
            <Hamburger show={respondClicker}/>
            <nav className="mt-14 text-xl font-bold cResp:hidden">
                <ul>
                    <Link to="/work" className="float-left">adaptable.</Link>
                    <Link to="/work" className="float-right pl-8 "><AntButton stylee="border-white hover:bg-white hover:text-black"/></Link>
                    <Link to="/work" className="float-right pl-8">Contact</Link>
                    <Link to="/work" className="float-right pl-8">Journal</Link>
                    <Link to="/work" className="float-right pl-8">WhitePapers</Link>
                    <Link to="/work" className="float-right pl-8">Services</Link>
                    <Link to="/work" className="float-right pl-8">Studio</Link>
                    <Link to="/work" className="float-right pl-8">Work</Link>
                </ul>
            </nav>
            {!mRespond ? <ResMenu/> :null}
        </div>
    );
};


export default Header;