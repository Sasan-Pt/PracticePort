import React from 'react';
import AntButton from "../../Button";


const Paragh = () => {
    return (
        <div >
            <div className="mt-60 text-6xl flex font-bold flex-col shrink">
                <p className="shrink">A digital studio creating </p>
                <p className="shrink">experiences that work, for the </p>
                <p className="shrink">people who matter.</p>
                <AntButton stylee="w-44 h-20 mt-28 border-white hover:bg-white hover:text-black"/>
            </div>
        </div>
    );
};


export default Paragh;