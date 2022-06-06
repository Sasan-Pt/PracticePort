import React from 'react';
import {MenuOutlined} from "@ant-design/icons"

const Hamburger = ({show}:any) => {
    return (
        <div onClick={show} className="flex cResH:hidden text-white justify-between">
        <div className="flex mt-14 justify-between">
            adaptable
        </div>
            <div className="mt-14">
            <MenuOutlined  style={{fontSize:"30px"}}/>
            </div>
        </div>
    );
};


export default Hamburger;