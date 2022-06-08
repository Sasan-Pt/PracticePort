import React from 'react';


const Menu = () => {
    return (
        <>
            <nav className="flex flex-row justify-start items-center flex-wrap list-none cResp:hidden">
                <>
                    {["All","Charity", "Corporate","Digital Products","E-Commerace","leisure","Property"].map(x=>{
                        return <li className="bg-silver-grey p-2 rounded-xl ml-2">{x}</li>
                    })}
                </>
            </nav>
            <div className="cResH:hidden">here i am</div>
        </>
    );
};



export default Menu;