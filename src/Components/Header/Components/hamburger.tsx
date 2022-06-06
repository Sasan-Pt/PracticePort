import React, {useContext} from 'react';
import {MenuOutlined} from "@ant-design/icons"
import Context from "../../Context/Context";

const Hamburger = () => {
    const ctx:any=useContext(Context)
    return (
        <div onClick={ctx.clicker} className="flex cResH:hidden text-white justify-between">
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