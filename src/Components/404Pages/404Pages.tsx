import React, {useEffect} from 'react';

const Invalid = () => {
    useEffect(()=>{
        document.body.style.background="white"
    })
    return (
        <div className="flex justify-center items-center col-span-full w-full">
            <div className="flex justify-center items-center"><img className="w-full h-full  justify-center items-center" src="https://thumbs.dreamstime.com/z/webpage-under-construction-system-administrators-fixing-web-site-page-error-website-repair-services-vector-troubleshooting-flat-235271673.jpg" alt="Loading..."/></div>
        </div>
    );
};



export default Invalid;