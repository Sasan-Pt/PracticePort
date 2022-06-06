import React, {Fragment} from 'react';
import {
    Link
} from "react-router-dom";
import {PlayCircleFilled} from "@ant-design/icons"
import {hover} from "@testing-library/user-event/dist/hover";

const Videos = () => {
    const vidUrl="fdghfdh"
   // const vidUrl="https://player.vimeo.com/external/552920337.hd.mp4?s=fc1d339bfa1a05402e9444ecdab95d8d4b266474&profile_id=175"
    return (
        <Fragment>
        <div className="flex">
        <div className="flex justify-items-center items-center mt-28 shrink relative">
            <Link to="/MyAss"><video className="justify-items-center items-center brightness-percent hover:brightness-100" autoPlay muted src={vidUrl}></video></Link>
            <div className="absolute items-center left-40p cRes:left-30p ">
                <PlayCircleFilled style={{fontSize:"150px",color:"#765cff"}}/>
            </div>
        </div>
        </div>
            <div className="mt-14">
                <div className="flex justify-between cRes:flex-col">

                    <div className="w-40p cRes:w-full cursor-view">
                    <Link to="/MyAss"><img
                        src="https://assets.weareadaptable.com/app/uploads/2021/01/15125342/3Z9A1535-scaled-1.jpg"
                        className="h-90p cursor-view"
                    />
                        <h2 className="text-white cursor-view">Laying the digital foundations for an award-winning homebuilder</h2>
                        <h3 className="text-white cursor-view">Spitfire Homes</h3>
                    </Link>
                    </div>


                    <div className="w-40p cRes:w-full cRes:mt-12 cursor-view">
                    <Link to="MyAss">
                        <img src="https://assets.weareadaptable.com/app/uploads/2022/04/14132332/phmg-thumb.jpg"
                        className="h-90p w-44p cursor-view"
                        />
                        <h2 className="text-white cursor-view">Relaunching the world leaders in audio branding</h2>
                        <h3 className="text-white cursor-view">PHMG</h3>
                    </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default Videos;