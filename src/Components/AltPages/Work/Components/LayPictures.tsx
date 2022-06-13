import React from 'react';
import {
    Link
} from "react-router-dom";

const LayPictures = ({pics,text1,text2}:any) => {
    return (
        <div className="mt-14 ">
            <div className="flex justify-between cRes:flex-col ">

                <div className="w-40p cRes:w-full cursor-view ">
                    <Link to="/MyAss"><img
                        src="https://assets.weareadaptable.com/app/uploads/2021/01/15125342/3Z9A1535-scaled-1.jpg"
                        className="h-90p cursor-view"
                    />
                        <h2 className="cursor-view">Laying the digital foundations for an award-winning homebuilder</h2>
                        <h3 className="cursor-view">Spitfire Homes</h3>
                    </Link>
                </div>


                <div className="w-40p cRes:w-full cRes:mt-12 cursor-view">
                    <Link to="MyAss">
                        <img src="https://assets.weareadaptable.com/app/uploads/2022/04/14132332/phmg-thumb.jpg"
                             className="h-90p w-44p cursor-view"
                        />
                        <h2 className="cursor-view">Relaunching the world leaders in audio branding</h2>
                        <h3 className="cursor-view">PHMG</h3>
                    </Link>
                </div>
            </div>
        </div>
    );
};



export default LayPictures;